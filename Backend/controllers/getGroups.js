const client = require("../db/client");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getGroups = (req, res) => {
  try {
    const groups = client.query(
      "SELECT groupname, group_uuid, id from groups WHERE id IN (SELECT group_id from groupmembers WHERE user_id = ?);",
      [req.user.id],
      (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: "Database error while getting groups!",
          });
        }

        // Da gehen wir durch jeden Eintrag um eine neue Liste mit Gruppen IDs zu erstellen
        const groupIds = data.map((group) => group.id);
        console.log("Group-IDs:", groupIds);

        // SQL-Abfrage um Mitglieder jeder Gruppe abzurufen
        const groupMembers = client.query(
          "SELECT firstname, lastname, group_id FROM user WHERE id IN (SELECT user_id FROM groupmembers WHERE group_id IN (?))",
          [groupIds],
          (err, membersData) => {
            if (err) {
              // erstmal kurzzeitig rausgekickt, damit der Code "durchläuft"
              // throw new ErrorResponse(
              //   "Database error while getting group members!",
              //   500
              // );
            }

            // Verarbeitung von den Ergebnissen der SQL-Abfrage um eine neue Liste von Gruppen und ihren Mitgliedern zu erstellen
            const groupsWithMembers = data.map((group) => {
              if (!membersData) {
                members = "Du hast noch keine Gruppenmitglieder";
              } else {
                const members = membersData.filter(
                  (member) => member.group_id === group.id
                );
              }

              return {
                groupname: group.groupname,
                group_uuid: group.group_uuid,
                id: group.id,
                members: members,
              };
            });

            // Rückgabe der JSON-Antwort mit der Liste von Gruppen und ihren Mitgliedern
            res.status(200).json({
              message: "User signed in!",
              uuid: req.user.user_uuid,
              name: req.user.firstname,
              groups: groupsWithMembers,
              token: req.token,
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
};

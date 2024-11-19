const { createServer } = require("http");
const { v4: uuidV4 } = require("uuid"); //just rename the function v4 into uuidV4 for better understanding

const createNewMeetingID = async (req, res, next) => {
  const roomId = uuidV4();
  res.send(roomId);
  //   res.redirect(`/meeting/${uuidV4()}`); //create new room ID and redirect to this url
};

const connect2Room = async (req, res, next) => {
  console.log("here line 16 meeting.js/controller");
  res.send(`<h1>downtown</h1>`);
  //   res.render("room", { roomId: req.params.room });
};

module.exports = { createNewMeetingID, connect2Room };

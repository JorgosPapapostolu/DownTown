require("dotenv").config();
const mysql = require("mysql2");

const { createServer } = require("http");

const httpServer = createServer();
const port = process.env.PORT || 9001;

const io = require("socket.io")(httpServer, {
  allowEIO3: true,
  cors: {
    origin: process.env.SOCKET_CLIENT_ORIGIN,
    methods: ["GET", "POST"],
  },
});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === "true",
  },
  timezone: "Europe/Berlin",
});

connection.connect((err) => {
  if (err) {
    console.error("Fehler beim Verbinden zur Datenbank:", err);
    return;
  }
  console.log("Erfolgreich zur Datenbank verbunden");
});

// Funktion zur Formatierung der Zeitdaten
function formatDateTime(datetime) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  };
  return new Date(datetime).toLocaleString("de-DE", options);
}

// VideoChat
io.on("connection", (socket) => {
  socket.on("join-videochatroom", ({ roomId, peerID }) => {
    socket.join(roomId);
    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected-videochatroom", {
        socketID: socket.id,
        peerID,
      });
    });
  });
  socket.on("ready", async ({ roomId, peerID }) => {
    socket.to(roomId).emit("user-connected", { socketID: socket.id, peerID });
  });

  // TextChat

  const deleteOldMessages = async () => {
    try {
      const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
      const query = "DELETE FROM messages WHERE created_at < ?";
      await connection.promise().query(query, [twoWeeksAgo]);
      console.log("Alte Nachrichten erfolgreich gelöscht.");
    } catch (err) {
      console.error("Fehler beim Löschen der alten Nachrichten:", err);
    }
  };

  const cronJob = setInterval(deleteOldMessages, 24 * 60 * 60 * 1000); // Sinn dahinter ist damit deleteOldMessages alle 24 Std. ausgeführt wird um zu prüfen ob eine Nachricht 2 Wochen alt ist um sie zu löschen

  socket.on("join_textchat", (data) => {
    socket.join(data);

    connection.query(
      "SELECT * FROM messages WHERE room = ? ORDER BY created_at ASC",
      [data],
      (err, results) => {
        if (err) {
          console.error("Fehler beim Abrufen der Nachrichten:", err);
          return;
        }
        // Formatieren der Zeitdaten bevor sie an den Client gesendet werden
        const formattedResults = results.map((result) => ({
          ...result,
          created_at: formatDateTime(result.created_at),
        }));

        socket.emit("message_history", formattedResults);
      }
    );
  });

  socket.on("send_message", async (data) => {
    try {
      const query = `INSERT INTO messages (author, message, time, room, created_at) VALUES (?, ?, ?, ?, ?)`;
      const now = new Date();
      const time = now.toISOString().slice(0, 19).replace("T", " ");
      const values = [data.author, data.message, time, data.room, now];
      await connection.promise().query(query, values);

      // Formatieren der Zeitdaten bevor sie an den Client gesendet werden
      const formattedData = {
        ...data,
        created_at: formatDateTime(now),
      };

      socket.to(data.room).emit("receive_message", formattedData);

      console.log("Neue Nachricht erhalten und gespeichert:", formattedData);
    } catch (err) {
      console.error(err);
    }
  });
});

httpServer.listen(port);

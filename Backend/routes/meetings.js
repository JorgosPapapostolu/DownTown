const { Router } = require("express");
const meetingRouter = Router();
const { createNewMeetingID, connect2Room } = require("../controllers/meetings");

// meetingRouter.get("/", createNewMeetingID); //add middleware with authentification
meetingRouter.get("/:room", connect2Room); //this can probaly be erased!

module.exports = meetingRouter;

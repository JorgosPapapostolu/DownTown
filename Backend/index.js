const server = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

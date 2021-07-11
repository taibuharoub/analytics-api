const app = require("./app");
require("dotenv").config("./config.env");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
})
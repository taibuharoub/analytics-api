const fs = require("fs");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const AppError = require("./utilities/appError");
const routes = require("./routes/analyticsRoute");
const globalErrorHandler = require("./controllers/errorController");
const schema = require("./utilities/Validation/schema");

const app = express();
const corsOptions = {
    "orgin": "*",
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/", routes);

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

// app.use(globalErrorHandler);

module.exports = app;

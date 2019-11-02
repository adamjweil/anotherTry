require("dotenv").config();
const graphqlHTTP = require("express-graphql");
const express = require("express");
const connectDB = require("./config/db");
const schema = require("./graphqlSchema/schema");
// const graphqlHTTP = require("express-graphql");
// const schema = require("./Models/Profile");
// const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// GraphQL Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema
  })
);

// Init Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API Running"));
// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/tickets", require("./routes/api/tickets"));
app.use("/api/teams", require("./routes/api/teams"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

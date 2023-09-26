const express = require("express");
const app = express();
const db = [
  {
    id: 1,
    name: "Marcus Dev",
    email: "marcus@salt.dev",
  },
  {
    id: 2,
    name: "Styrman Karlsson",
    email: "byrålåda@chiffonje.olé",
  },
];

app.get("/api/developers/:id", (req, res) => {
  res.json(db);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const express = require("express");
const app = express();
const PORT = 3001;

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backendadasdad!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require("express");

const PORT = process.env.PORT || "8080";
const app = express();

const userRouter = require('./routes/users');
const groupRouter = require('./routes/groups');
const appRouter = require('./routes/apps');

app.get("/", (req, res) => {
  res.json({
    message: 'WELCOME TO THE REST API!',
  });
});

app.use('/users', userRouter );
app.use('/groups', groupRouter );
app.use('/apps', appRouter );

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
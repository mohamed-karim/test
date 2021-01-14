const express = require('express')
const PORT = process.env.PORT || 3001;
const db = require("./app/models");

const taskRouter = require("./app/routes/taskRouting");
const tagRouter = require("./app/routes/tagRouting")


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.use("/task", taskRouter);
app.use("/tag", tagRouter);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening at : http://localhost:${PORT} `);
    });
})


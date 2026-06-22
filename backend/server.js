require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();
const authRoutes=require("./routes/authRoutes");
const drugRoutes=require("./routes/drugRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/drugs",drugRoutes);
app.get("/", (req, res) => {
    res.send("Drug Lookup API đang chạy");
});

app.get("/api/drugs", (req, res) => {
    const sql = "SELECT * FROM drugs";

    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Lỗi truy vấn database"
            });
        }

        res.json(result);
    });
});

const PORT=


process.env.PORT


||5000;



app.listen(PORT,()=>{


console.log(

`Server chạy tại ${PORT}`

);


});


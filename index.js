import express from "express";
import cors from "cors"

const app = express();
app.use(express.json());

app.use(
    cors({
        origin: ["*"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.get("/", (req, res) => {
    res.send("Up and Running");
})


app.post("/getdata", (req, res) => {
    console.log("Data Received:", req.body);
    res.status(200).send("Data received successfully");
  });

app.listen(8080, () => {
    console.log("Server Running on port", 8080);
})
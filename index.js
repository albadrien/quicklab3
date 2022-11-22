import express from "express";
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: "Get from my-express-app!" });
});
app.put('/', (req, res) => {
    res.status(200).json({ message: "Put from my-express-app!" });
});
app.delete('/', (req, res) => {
    res.status(200).json({ message: "Delete from my-express-app!" });
});
app.post('/', (req, res) => {
    res.status(200).json({ message: "Post from my-express-app!" });
});




const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
import express  from 'express';
import data from './data.js';
import path from "path";

const __dirname = path.resolve();

const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/build")));
}

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Method", "*");
    next();
});


app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api', (req, res) => {
    res.send('Server is ready');
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
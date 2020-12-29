import express  from 'express';
import data from './data.js';
import cors from 'cors'
 
const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../frontend/build"));
}

app.use(cors());

app.get('/api/products',cors(), (req, res) => {
    res.send(data.products);
});

app.get('/api', cors(), (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Serve at http://localhost:${port}');
});
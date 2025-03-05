import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import CatatanRoute from "./Route/CatatanRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(CatatanRoute);

// Konversi ke __dirname di ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path ke folder utama (di luar backend)
const projectRoot = path.join(__dirname, "..");

// Middleware untuk melayani file statis dari luar backend
app.use(express.static(projectRoot));

// Rute untuk mengembalikan index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(projectRoot, "index.html"));
});

app.post('/catatan', (req, res) => {
    console.log("Permintaan diterima:", req.body); // Debugging
    createCatatan(req, res);
});

app.listen(3000, ()=> console.log('SERVER NYALA!!!!'));
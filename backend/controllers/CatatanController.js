import Catatan from "../models/CatatanModel.js";

// GET ALL CATATAN
export const getCatatan = async (req, res) => {
    try {
        const response = await Catatan.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET CATATAN BY ID
export const getCatatanById = async (req, res) => {
    try {
        const catatan = await Catatan.findOne({ where: { catatan_id: req.params.id } });
        if (!catatan) {
            return res.status(404).json({ msg: "Catatan tidak ditemukan" });
        }
        res.status(200).json(catatan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE CATATAN
export const createCatatan = async (req, res) => {
    try {
        const { name, judul, isi_catatan } = req.body;
        console.log("Data yang diterima:", req.body); // Debugging

        // Validasi data
        if (!name || !judul || !isi_catatan) {
            return res.status(400).json({ msg: "Semua field harus diisi" });
        }

        // Simpan data ke database
        await Catatan.create({ name, judul, isi_catatan });
        res.status(201).json({ msg: "Catatan berhasil diupload" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: error.message });
    }
};

// UPDATE CATATAN
export const updateCatatan = async (req, res) => {
    try {
        const { name, judul, isi_catatan } = req.body;
        const catatan = await Catatan.findOne({ where: { catatan_id: req.params.id } });
        if (!catatan) {
            return res.status(404).json({ msg: "Catatan tidak ditemukan" });
        }

        await Catatan.update(
            { name, judul, isi_catatan },
            { where: { catatan_id: req.params.id } }
        );

        res.status(200).json({ msg: "Catatan berhasil diperbarui" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE CATATAN
export const deleteCatatan = async (req, res) => {
    try {
        const catatan = await Catatan.findOne({ where: { catatan_id: req.params.id } });
        if (!catatan) {
            return res.status(404).json({ msg: "Catatan tidak ditemukan" });
        }

        await Catatan.destroy({ where: { catatan_id: req.params.id } });
        res.status(200).json({ msg: "Catatan berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
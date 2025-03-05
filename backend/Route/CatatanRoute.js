import express from "express";
import {getCatatan, createCatatan, updateCatatan, deleteCatatan, getCatatanById} from "../controllers/CatatanController.js";

const router = express.Router();

//endpoint
router.get('/catatan', getCatatan);
router.post('/catatan', createCatatan);
router.get('/catatan/:id', getCatatanById);
router.put('/catatan-update/:id',updateCatatan);
router.delete('/catatan-hapus/:id',deleteCatatan);


export default router;
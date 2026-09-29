import express from "express"
import ControllerMarca from '../controller/marca.js'

const router = express.Router()


router.get("/Buscar", ControllerMarca.Buscar)
router.get("/BuscarUm/:id", ControllerMarca.BuscarUm)
router.post("/Criar",  ControllerMarca.Criar)
router.put("/Alterar/:id",  ControllerMarca.Alterar)
router.delete("/Deletar/:id",  ControllerMarca.Deletar)


export default router
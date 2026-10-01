import express from "express"
import ControllerCachorro from '../controller/cachorro.js'

const router = express.Router()


router.get("/Buscar", ControllerCachorro.Buscar)
router.get("/BuscarUm/:id", ControllerCachorro.BuscarUm)
router.post("/Criar",  ControllerCachorro.Criar)
router.put("/Alterar/:id",  ControllerCachorro.Alterar)
router.delete("/Deletar/:id",  ControllerCachorro.Deletar)


export default router
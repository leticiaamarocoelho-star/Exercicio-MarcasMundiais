import express from "express"
import ControllerPessoa from '../controller/pessoa.js'

const router = express.Router()


router.get("/Buscar", ControllerPessoa.Buscar)
router.get("/BuscarUm/:id", ControllerPessoa.BuscarUm)
router.post("/Criar",  ControllerPessoa.Criar)
router.put("/Alterar/:id",  ControllerPessoa.Alterar)
router.delete("/Deletar/:id",  ControllerPessoa.Deletar)


export default router
import ServiceMarca from '../service/marca.js'

class ControllerMarca {

    Buscar(req, res) {
        try {
            const marcas = ServiceMarca.Buscar()
            
            res.send({ marcas })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const marca = ServiceMarca.BuscarUm(id)
            res.send({ marca })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Criar(req, res) {
        try {
            const marca = req.body.marca
            ServiceMarca.Criar(marca)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Alterar(req, res) {
        try {
            const id = req.params.id
            const marca = req.body.marca

            ServiceMarca.Alterar(id, marca)
            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Deletar(req, res) {
        try {
            const id = req.params.id

            ServiceMarca.Deletar(id)
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }

    
}

export default new ControllerMarca()
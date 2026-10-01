import ServiceCachorro from '../service/cachorro.js'

class ControllerCachorro {

    Buscar(req, res) {
        try {
            const racas = ServiceCachorro.Buscar()
            
            res.send({ racas })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const cachorro = ServiceCachorro.BuscarUm(id)
            res.send({ cachorro })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Criar(req, res) {
        try {
            const cachorro = req.body.cachorro
            ServiceCachorro.Criar(cachorro)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Alterar(req, res) {
        try {
            const id = req.params.id
            const cachorro = req.body.cachorro

            ServiceCachorro.Alterar(id, cachorro)
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

export default new ControllerCachorro()
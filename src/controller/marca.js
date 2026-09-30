import ServiceMarca from '../service/marca.js'

class ControllerMarca {

    Buscar(req, res) {
        try {
            const nomes = ServiceMarca.Buscar()
            
            res.send({ nomes })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = ServiceMarca.BuscarUm(id)
            res.send({ nome })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Criar(req, res) {
        try {
            const nome = req.body.nome
            ServiceMarca.Criar(nome)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome

            ServiceMarca.Alterar(id, nome)
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
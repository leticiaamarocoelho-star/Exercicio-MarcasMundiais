import Marca from '../model/marca.js'

class ServiceMarca {

    Buscar() {
        return Marca.Buscar()
    }


    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        return Marca.BuscarUm(id)
    }


    Criar(marca) {
        if(!marca) {
            throw new Error("Favor informar nome")
        }
        Marca.Criar(marca)
    }


    Alterar(id, marca) {
        if(!id || isNaN(id) || !marca) {
            throw new Error("Favor informar todos os dados")
        }
        Marca.Alterar(id, marca)
    }


    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o ID corretamente")
        }
        Marca.Deletar(id)
    }

}

export default new ServiceMarca()
import Cachorro from '../model/cachorro.js'

class ServiceCachorro {

    Buscar() {
        return Cachorro.Buscar()
    }


    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        return Cachorro.BuscarUm(id)
    }


    Criar(cachorro) {
        if(!cachorro) {
            throw new Error("Favor informar nome")
        }
        Cachorro.Criar(cachorro)
    }


    Alterar(id, cachorro) {
        if(!id || isNaN(id) || !cachorro) {
            throw new Error("Favor informar todos os dados")
        }
        Cachorro.Alterar(id, cachorro)
    }


    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o ID corretamente")
        }
        Cachorro.Deletar(id)
    }

}

export default new ServiceCachorro()
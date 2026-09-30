const marcas = new Array("Ana", "Batata", "João")

class Marca {

    Buscar() {
        return marcas
    }
    

    BuscarUm(id) {
        return marcas[id]
    }


    Criar (marca) {
        marcas.push(marca)
    }


    Alterar (id, marca) {
        marcas[id] = marca
    }


    Deletar(id) {
        marcas.splice(id, 1)
    }
    
}

export default new Marca ()
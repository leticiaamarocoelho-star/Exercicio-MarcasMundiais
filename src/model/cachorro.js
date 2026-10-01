 const racas = [
    { raca: "Golden Retriver", idade: 2, nome: "Rex", dono: "João" },
    { raca: "Shih Tzu", idade: 1, nome: "Lola", dono: "Maria" },
    { raca: "Poodle", idade: 3, nome: "Bella", dono: "Pedro" },
    { raca: "Labrador", idade: 4, nome: "Buddy", dono: "Ana" },
    { raca: "Pastor Alemão", idade: 5, nome: "Max", dono: "Carlos" },
    { raca: "Bulldog", idade: 2, nome: "Luke", dono: "Juliana" },
    { raca: "Chihuahua", idade: 1, nome: "Luna", dono: "Alice" }
]


class Cachorro {

    Buscar() {
        return racas
    }
    

    BuscarUm(id) {
        return racas[id]
    }


    Criar (cachorro) {
        racas.push(cachorro)//
    }


    Alterar (id, cachorro) {
        racas[id] = cachorro//
    }


    Deletar(id) {
        racas.splice(id, 1)
    }
    
}

export default new Cachorro ()
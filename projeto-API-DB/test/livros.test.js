const Livros = require("../src/models/livros.js")

describe("Teste de models", () => {
  const livro = new Livros({
    id: "5",
    titulo: "Quase como voltar para casa",
    autor: "Janaina Abílio",
    editora: "Bando Editorial favelofágico",
    numeroPaginas: 122,
  })

  it("Deve chamar o Schema e retornar o novo livro", () => {
    expect(livros.title).toBe("Quase como voltar para casa")
  });
  it("Deve salvar o novo livro no banco de dados", () => {
    game.save().then((dados) => {
      expect(dados.title).toBe("Quase como voltar para casa")
    })
  })
})

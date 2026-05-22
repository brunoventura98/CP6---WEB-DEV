import { useEffect, useState } from "react";
import { buscarLivros } from "../services/booksApi";
import BookCard from "../components/BookCard";
import "./Pesquisa.css";

function Pesquisa() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function carregarLivros() {
      try {
        const dados = await buscarLivros();
        setLivros(dados);
      } catch (err) {
        setErro("Não foi possível carregar os livros. Tente novamente.");
      } finally {
        setCarregando(false);
      }
    }
    carregarLivros();
  }, []);

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="pesquisa-page">
      <header className="pesquisa-header">
        <h1 className="pesquisa-titulo">Biblioteca Front-end</h1>
        <p className="pesquisa-subtitulo">
          Explore os melhores livros de desenvolvimento web
        </p>
        <div className="pesquisa-barra">
          <span className="pesquisa-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar livros pelo título..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="pesquisa-input"
          />
        </div>
      </header>

      {carregando && (
        <div className="estado-feedback">
          <div className="loading-spinner" />
          <p>Carregando livros...</p>
        </div>
      )}

      {erro && (
        <div className="estado-feedback estado-erro">
          <span>⚠️</span>
          <p>{erro}</p>
        </div>
      )}

      {!carregando && !erro && (
        <>
          <p className="pesquisa-contagem">
            {livrosFiltrados.length} livro{livrosFiltrados.length !== 1 ? "s" : ""} encontrado{livrosFiltrados.length !== 1 ? "s" : ""}
          </p>
          {livrosFiltrados.length === 0 ? (
            <div className="estado-feedback">
              <span style={{ fontSize: "2rem" }}>📭</span>
              <p>Nenhum livro encontrado para "{busca}".</p>
            </div>
          ) : (
            <div className="livros-grid">
              {livrosFiltrados.map((livro) => (
                <BookCard key={livro.id} livro={livro} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Pesquisa;

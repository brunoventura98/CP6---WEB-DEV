import { useEffect, useState } from "react";
import { buscarLivros } from "../services/booksApi";
import BookCard from "../components/BookCard";
import "./Lancamentos.css";

function Lancamentos() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarLivros() {
      try {
        const dados = await buscarLivros();
        // Pega os últimos 5 (por ordem reversa da API = mais recentes)
        const ultimos = [...dados].reverse().slice(0, 5);
        setLivros(ultimos);
      } catch (err) {
        setErro("Não foi possível carregar os lançamentos. Tente novamente.");
      } finally {
        setCarregando(false);
      }
    }
    carregarLivros();
  }, []);

  return (
    <div className="lancamentos-page">
      <header className="lancamentos-header">
        <div className="lancamentos-tag">✦ Em destaque</div>
        <h1 className="lancamentos-titulo">Últimos Lançamentos</h1>
        <p className="lancamentos-subtitulo">
          As novidades mais recentes da biblioteca
        </p>
      </header>

      {carregando && (
        <div className="estado-feedback">
          <div className="loading-spinner" />
          <p>Carregando lançamentos...</p>
        </div>
      )}

      {erro && (
        <div className="estado-feedback estado-erro">
          <span>⚠️</span>
          <p>{erro}</p>
        </div>
      )}

      {!carregando && !erro && (
        <div className="lancamentos-grid">
          {livros.map((livro, index) => (
            <div
              key={livro.id}
              className="lancamento-wrapper"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <BookCard livro={livro} destaque={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Lancamentos;

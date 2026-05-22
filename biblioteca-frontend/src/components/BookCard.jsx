import "./BookCard.css";

function BookCard({ livro, destaque = false }) {
  const resumoCurto =
    livro.resumo?.length > 100
      ? livro.resumo.substring(0, 100) + "..."
      : livro.resumo;

  return (
    <div className={`book-card ${destaque ? "book-card--destaque" : ""}`}>
      {destaque && <span className="badge-novo">✦ Novo Lançamento</span>}
      <div className="book-card__capa">
        <img src={livro.imagem} alt={livro.titulo} loading="lazy" />
      </div>
      <div className="book-card__info">
        <h3 className="book-card__titulo">{livro.titulo}</h3>
        <p className="book-card__resumo">{resumoCurto}</p>
      </div>
    </div>
  );
}

export default BookCard;

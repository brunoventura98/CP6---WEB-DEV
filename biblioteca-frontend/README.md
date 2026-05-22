# 📚 BiblioFront — Biblioteca de Front-end

Aplicação React que consome uma API pública para listar e pesquisar livros de desenvolvimento Front-end.

## ✨ Funcionalidades

- **Página de Pesquisa**: busca em tempo real por título, exibição em grid responsivo com cards interativos
- **Últimos Lançamentos**: os 5 livros mais recentes com badge de destaque visual
- **Loading & Erros**: indicadores de carregamento e mensagens amigáveis em caso de falha
- **Navegação**: React Router com menu fixo no topo

## 🛠️ Tecnologias

- React 18
- React Router DOM v6
- Vite
- CSS puro

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/biblioteca-frontend.git

# Instale as dependências
npm install

# Rode o programa
npm run dev
```

Acesse o local host criado

## 🌐 Deploy

**Vercel**

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── BookCard.jsx       # Card reutilizável de livro
│   ├── BookCard.css
│   ├── Navbar.jsx         # Barra de navegação
│   └── Navbar.css
├── pages/
│   ├── Pesquisa.jsx       # Página de pesquisa com filtro
│   ├── Pesquisa.css
│   ├── Lancamentos.jsx    # Página de últimos lançamentos
│   └── Lancamentos.css
├── services/
│   └── booksApi.js        # Serviço de consumo da API
├── App.jsx                # Rotas e estrutura principal
├── App.css                # Estilos globais
└── main.jsx               # Entry point
```

## 🔗 API utilizada

```
https://raw.githubusercontent.com/proflucassousa/api-books/main/livros.json
```

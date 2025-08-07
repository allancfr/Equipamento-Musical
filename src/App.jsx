import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListaCards from './pages/ListaCards.jsx';
import ListaTabela from './pages/ListaTabela.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Adicionamos a classe aqui para o container principal */}
      <div className="app-container">
        <header>
          <nav>
            <Link to="/">Listagem (Cards)</Link>
            <Link to="/tabela">Listagem (Tabela)</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ListaCards />} />
            <Route path="/tabela" element={<ListaTabela />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
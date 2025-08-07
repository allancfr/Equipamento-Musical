import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Apenas garantindo que a importação aponte para os arquivos .jsx
import ListaCards from './pages/ListaCards.jsx';
import ListaTabela from './pages/ListaTabela.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <Link to="/">Ver em Cards</Link>
            <Link to="/tabela">Ver em Tabela</Link>
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
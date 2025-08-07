import { useState, useEffect } from 'react';

function ListaTabela() {
  // 1. VARIÁVEIS DE ESTADO
  // Estado para armazenar a lista de equipamentos que vem da API
  const [equipamentos, setEquipamentos] = useState([]);
  // Estado para controlar a exibição do feedback de "Carregando..."
  const [loading, setLoading] = useState(true);
  // Estado para armazenar qualquer erro que ocorra na requisição
  const [error, setError] = useState(null);

  // 2. EFEITO PARA BUSCAR DADOS
  // useEffect será executado uma vez, quando o componente for montado
  useEffect(() => {
    // Definimos uma função assíncrona para poder usar 'await'
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/equipamentos');
        if (!response.ok) {
          throw new Error('A resposta da rede não foi boa');
        }
        const data = await response.json();
        setEquipamentos(data); // Armazena os dados no estado
      } catch (error) {
        setError(error); // Armazena o erro no estado
      } finally {
        setLoading(false); // Garante que o "loading" termine, com ou sem erro
      }
    };

    fetchData(); // Chama a função para buscar os dados
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez

  // 3. RENDERIZAÇÃO CONDICIONAL
  // Exibe uma mensagem enquanto os dados estão sendo carregados
  if (loading) {
    return <p>Carregando...</p>;
  }

  // Exibe uma mensagem de erro se a requisição falhar
  if (error) {
    return <p>Erro ao carregar os dados: {error.message}</p>;
  }

  // 4. RENDERIZAÇÃO DA TABELA
  // Se não há loading nem erro, exibe a tabela com os dados
  return (
    <div>
      <h1>Instrumentos em Exibição (Tabela)</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Ano</th>
            <th>Preço</th>
            <th>Ativo</th>
            <th>Voltagem</th>
            <th>Peso (kg)</th>
          </tr>
        </thead>
        <tbody>
          {/* Itera sobre o array de equipamentos e cria uma linha (tr) para cada um */}
          {equipamentos.map((equip) => (
            <tr key={equip.id}>
              <td>{equip.id}</td>
              <td>{equip.nome}</td>
              <td>{equip.tipo}</td>
              <td>{equip.marca}</td>
              <td>{equip.ano}</td>
              <td>R$ {equip.preco.toFixed(2)}</td>
              {/* Converte o valor booleano (true/false) para um texto mais legível */}
              <td>{equip.ativo ? 'Sim' : 'Não'}</td>
              <td>{equip.voltagem}</td>
              <td>{equip.peso_kg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTabela;
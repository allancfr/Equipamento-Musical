// 1. Importamos o mesmo hook
import useGetInstruments from '../hooks/useGetInstruments.jsx';

function ListaTabela() {
  // 2. E o usamos da mesma forma!
  const { equipamentos, loading, error } = useGetInstruments();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados: {error.message}</p>;
  }

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
          {equipamentos.map((equip) => (
            <tr key={equip.id}>
              <td>{equip.id}</td>
              <td>{equip.nome}</td>
              <td>{equip.tipo}</td>
              <td>{equip.marca}</td>
              <td>{equip.ano}</td>
              <td>R$ {equip.preco.toFixed(2)}</td>
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
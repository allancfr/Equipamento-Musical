// 1. Importamos nosso hook customizado
import useGetInstruments from '../hooks/useGetInstruments.jsx';

function ListaCards() {
  // 2. Usamos o hook para obter os dados, loading e error em uma única linha!
  const { equipamentos, loading, error } = useGetInstruments();

  // O resto do componente continua exatamente o mesmo!
  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados: {error.message}</p>;
  }

  return (
    <div>
      <h1>Lista de Instrumentos</h1>
      <div className="card-container">
        {equipamentos.map((equip) => (
          <div className="card" key={equip.id}>
            <h3>{equip.nome}</h3>
            <p><strong>Tipo:</strong> {equip.tipo}</p>
            <p><strong>Marca:</strong> {equip.marca}</p>
            <p><strong>Voltagem:</strong> {equip.voltagem}</p>
            <p><strong>Ano:</strong> {equip.ano}</p>
            <p><strong>Preço:</strong> R$ {equip.preco.toFixed(2)}</p>
            <p><strong>Peso:</strong> {equip.peso_kg} kg</p>
            <p>
              <strong>Status:</strong>
              <span className={equip.ativo ? 'status-ativo' : 'status-inativo'}>
                {equip.ativo ? ' Ativo' : ' Inativo'}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaCards;
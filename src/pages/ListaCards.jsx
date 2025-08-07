import { useState, useEffect } from 'react';

function ListaCards() {
  // A lógica de estado (loading, error, data) é a mesma da tabela
  const [equipamentos, setEquipamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/equipamentos');
        if (!response.ok) {
          throw new Error('A resposta da rede não foi boa');
        }
        const data = await response.json();
        setEquipamentos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados: {error.message}</p>;
  }

  // A principal diferença está aqui, no JSX retornado
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
              {/* Adicionamos uma classe dinamicamente para colorir o status */}
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
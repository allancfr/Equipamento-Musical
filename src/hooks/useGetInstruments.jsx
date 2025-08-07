import { useState, useEffect } from 'react';

// Todo hook customizado é uma função que começa com a palavra "use"
export default function useGetInstruments() {
  // 1. Recortamos toda a lógica de estado e efeito para cá
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

  // 2. O hook retorna as variáveis que os componentes precisam para funcionar
  return { equipamentos, loading, error };
}
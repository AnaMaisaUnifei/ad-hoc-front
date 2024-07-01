import React, { useState, useEffect } from 'react';
// import { fetchLeagues } from '../data/api';

interface League {
  id: number;
  name: string;
  type: string;
  logo?: string;
}

interface LeagueTableProps {
  filters: Record<string, string>;
}

const LeagueTable: React.FC = () => {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
    pais: '',
    temporada: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   fetchLeagues(filters).then(data => setLeagues(data));
  // }, [filters]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ligas</h1>
      <div className="mb-4 text-center text-black">
        <h2 className='text-white font-bold text-xl mb-4'>Filtros</h2>
        <input
          key=""
          type="text"
          name="nome"
          placeholder="Digite o Nome da Liga"
          value={formData.nome}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />

        <input
          key=""
          type="text"
          name="tipo"
          placeholder="Digite o Tipo da Liga"
          value={formData.tipo}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />

        <input
          key=""
          type="text"
          name="pais"
          placeholder="Digite o país da Liga"
          value={formData.pais}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />

        <input
          key=""
          type="text"
          name="temporada"
          placeholder="Digite a temporada da Liga"
          value={formData.temporada}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className='bg-gray-200 text-black'>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Type</th>
            <th className="py-2 px-4">Logo</th>
          </tr>
        </thead>
        <tbody>
          {leagues.map((league) => (
            <tr key={league.id}>
              <td className="border px-4 py-2">{league.id}</td>
              <td className="border px-4 py-2">{league.name}</td>
              <td className="border px-4 py-2">{league.type}</td>
              <td className="border px-4 py-2">
                <img src={league.logo} alt={`Logo of ${league.name}`} className="w-8 h-8" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;

import { NOMEM } from 'dns';
import React, { useState, useEffect } from 'react';
// import { fetchTeams } from '../data/api';

interface Team {
  id: number;
  name: string;
  logo?: string;
}

interface TeamTableProps {
  filters: Record<string, string>;
}

const TeamTable: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    pais: '',
    jogador: '',
    treinador: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   fetchTeams(filters).then(data => setTeams(data));
  // }, [filters]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Times</h1>
      <div className="mb-4 text-center text-black">
        <h2 className='text-white font-bold text-xl mb-4'>Filtros</h2>
        <input
          key=""
          type="text"
          name="nome"
          placeholder="Digite o nome"
          value={formData.nome}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          key=""
          type="text"
          name="pais"
          placeholder="Digite o País"
          value={formData.pais}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          key=""
          type="text"
          name="jogador"
          placeholder="Digite o jogador"
          value={formData.jogador}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />

        <input
          key=""
          type="text"
          name="treinador"
          placeholder="Digite o treinador"
          value={formData.treinador}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className='bg-gray-200 text-black'>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Logo</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td className="border px-4 py-2">{team.id}</td>
              <td className="border px-4 py-2">{team.name}</td>
              <td className="border px-4 py-2">
                {team.logo && <img src={team.logo} alt={`Logo of ${team.name}`} className="w-8 h-8" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;

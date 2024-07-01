import React, { useState, useEffect } from 'react';
// import { fetchPlayers } from '../data/api';

interface Player {
  id: number;
  name: string;
  age: number;
  nationality: string;
  position: string;
}

interface PlayerTableProps {
  filters: Record<string, string>;
}

const PlayerTable: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    nacionalidade: '',
    posicao: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   fetchPlayers(filters).then(data => setPlayers(data));
  // }, [filters]);

  return (
    <div className="container mx-auto mb-20">
      <h1 className="text-2xl font-bold mb-4">Jogadores</h1>
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
          type="number"
          name="idade"
          placeholder="Digite a idade"
          value={formData.idade}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          key=""
          type="text"
          name="nacionalidade"
          placeholder="Digite a nacionalidade"
          value={formData.nacionalidade}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          key=""
          type="text"
          name="posicao"
          placeholder="Digite a posição"
          value={formData.posicao}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          key=""
          type="text"
          name="time"
          placeholder="Digite o time"
          value={formData.time}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className='bg-gray-200 text-black'>
            <th className="py-2 px-4 ">ID</th>
            <th className="py-2 px-4 ">Name</th>
            <th className="py-2 px-4 ">Age</th>
            <th className="py-2 px-4 ">Nationality</th>
            <th className="py-2 px-4 ">Position</th>
          </tr>
        </thead>
        <tbody className='text-black'>
          <tr key="1">
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Gabriel Barbosa</td>
              <td className="border px-4 py-2">27</td>
              <td className="border px-4 py-2">Brasileiro</td>
              <td className="border px-4 py-2">Atacante</td>
            </tr>
            <tr key="2">
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">Vinicius Júnior</td>
              <td className="border px-4 py-2">23</td>
              <td className="border px-4 py-2">Brasileiro</td>
              <td className="border px-4 py-2">Atacante</td>
            </tr>
          {players.map((player) => (
            <tr key={player.id}>
              <td className="border px-4 py-2">{player.id}</td>
              <td className="border px-4 py-2">{player.name}</td>
              <td className="border px-4 py-2">{player.age}</td>
              <td className="border px-4 py-2">{player.nationality}</td>
              <td className="border px-4 py-2">{player.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className='bg-white' />
      <h2 className='mt-20 font-bold text-xl'>Estatísticas Gerais e Detalhes da Pesquisa</h2>
      <div className='bg-gray-200 w-full h-80 rounded-md text-black p-4'>
        Dados estatícos e detalhes de cada pesquisa
      </div>
    </div>
  );
};

export default PlayerTable;

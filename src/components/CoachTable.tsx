import React, { useState, useEffect } from 'react';
// import { fetchCoaches } from '../data/api';

interface Coach {
  id: number;
  name: string;
  nationality: string;
}

interface CoachTableProps {
  filters: Record<string, string>;
}

const CoachTable: React.FC = () => {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    nacionalidade: '',
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
  //   fetchCoaches(filters).then(data => setCoaches(data));
  // }, [filters]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Treinadores</h1>
      <div className="mb-4 text-center text-black">
        <h2 className='text-white font-bold text-xl mb-4'>Filtros</h2>
        <input
          key=""
          type="text"
          name="nome"
          placeholder="Digite o Nome"
          value={formData.nome}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          key=""
          type="text"
          name="nacionalidade"
          placeholder="Digite o nacionalidade"
          value={formData.nacionalidade}
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
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Nationality</th>
          </tr>
        </thead>
        <tbody>
          {coaches.map((coach) => (
            <tr key={coach.id}>
              <td className="border px-4 py-2">{coach.id}</td>
              <td className="border px-4 py-2">{coach.name}</td>
              <td className="border px-4 py-2">{coach.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoachTable;

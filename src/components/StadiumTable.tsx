import React, { useState, useEffect } from 'react';
// import { fetchStadiums } from '../data/api';

interface Stadium {
  id: number;
  name: string;
  city: string;
}

interface StadiumTableProps {
  filters: Record<string, string>;
}

const StadiumTable: React.FC = () => {
  const [stadiums, setStadiums] = useState<Stadium[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    cidade: '',
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
  //   fetchStadiums(filters).then(data => setStadiums(data));
  // }, [filters]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Estádios</h1>
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
          name="cidade"
          placeholder="Digite o cidade"
          value={formData.cidade}
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
            <th className="py-2 px-4">City</th>
          </tr>
        </thead>
        <tbody>
          {stadiums.map((stadium) => (
            <tr key={stadium.id}>
              <td className="border px-4 py-2">{stadium.id}</td>
              <td className="border px-4 py-2">{stadium.name}</td>
              <td className="border px-4 py-2">{stadium.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StadiumTable;

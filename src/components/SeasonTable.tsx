import React, { useState, useEffect } from 'react';
//import { fetchSeasons } from '../data/api';

interface Season {
  id: number;
  year: number;
  start: string;
  end: string;
  current: boolean;
}

interface SeasonTableProps {
  filters: Record<string, string>;
}

const SeasonTable: React.FC = () => {
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [formData, setFormData] = useState({
    ano: '',
    liga: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   fetchSeasons(filters).then(data => setSeasons(data));
  // }, [filters]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Temporadas</h1>
      <div className="mb-4 text-center text-black">
        <h2 className='text-white font-bold text-xl mb-4'>Filtros</h2>
        <input
          key=""
          type="text"
          name="ano"
          placeholder="Digite o ano"
          value={formData.ano}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          key=""
          type="text"
          name="liga"
          placeholder="Digite a liga"
          value={formData.liga}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className='bg-gray-200 text-black'>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Year</th>
            <th className="py-2 px-4">Start</th>
            <th className="py-2 px-4">End</th>
            <th className="py-2 px-4">Current</th>
          </tr>
        </thead>
        <tbody>
          {seasons.map((season) => (
            <tr key={season.id}>
              <td className="border px-4 py-2">{season.id}</td>
              <td className="border px-4 py-2">{season.year}</td>
              <td className="border px-4 py-2">{season.start}</td>
              <td className="border px-4 py-2">{season.end}</td>
              <td className="border px-4 py-2">{season.current ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeasonTable;

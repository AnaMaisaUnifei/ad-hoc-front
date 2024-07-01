import React, { useState, useEffect } from 'react';
// import { fetchCountries } from '../data/api';

interface Country {
  id: number;
  name: string;
  code?: string;
  flag?: string;
}

interface CountryTableProps {
  filters: Record<string, string>;
}

const CountryTable: React.FC= () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [formData, setFormData] = useState({
    pais: '',
    codigo: '',
    liga: '',
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
  //   fetchCountries(filters).then(data => setCountries(data));
  // }, [filters]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Países</h1>
      <div className="mb-4 text-center text-black">
        <h2 className='text-white font-bold text-xl mb-4'>Filtros</h2>
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
          name="codigo"
          placeholder="Digite o Codigo"
          value={formData.codigo}
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
            <th className="py-2 px-4">Code</th>
            <th className="py-2 px-4">Flag</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id}>
              <td className="border px-4 py-2">{country.id}</td>
              <td className="border px-4 py-2">{country.name}</td>
              <td className="border px-4 py-2">{country.code}</td>
              <td className="border px-4 py-2">
                <img src={country.flag} alt={`Flag of ${country.name}`} className="w-8 h-5" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;

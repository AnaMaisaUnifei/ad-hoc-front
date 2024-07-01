'use client';
import Link from 'next/link';
import { useState } from 'react';
import CountryTable from '@/components/CountryTable';
import LeagueTable from '@/components/LeagueTable';
import CoachTable from '@/components/CoachTable';
import PlayerTable from '@/components/PlayerTable';
import SeasonTable from '@/components/SeasonTable';
import StadiumTable from '@/components/StadiumTable';
import TeamTable from '@/components/TeamTable';
import Filter from '../components/Filter';

const Home = () => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [selectedTable, setSelectedTable] = useState('');

  const filterAttributes: Record<string, string[]> = {
    countries: ['name', 'code'],
    leagues: ['name', 'type'],
    // Adicione atributos de filtro para outras tabelas
  };

  const renderTable = () => {
    switch (selectedTable) {
      case 'countries':
        return <CountryTable  />;
      case 'leagues':
        return <LeagueTable  />;
      case 'coach':
        return <CoachTable  />;
      case 'player':
        return <PlayerTable  />;
      case 'season':
        return <SeasonTable  />;
      case 'stadium':
        return <StadiumTable  />;
      case 'team':
        return <TeamTable  />; 
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <div className="text-white text-lg font-bold">AD-Football</div>
      </div>
      </nav>
      <h1 className="text-3xl font-bold text-center my-4">Ad-Football</h1>
      <h2 className='text-xl font-bold text-center my-4'>Relatórios AD-HOC para Olheiros de Futebol</h2>
      <div className="mb-4 text-center">
        <h2>Tabelas</h2>
        <select onChange={(e) => setSelectedTable(e.target.value)} value={selectedTable} className="border p-2 text-black">
          <option className='text-gray-300' value="">Seleciona a tabela</option>
          <option value="countries">Países</option>
          <option value="leagues">Ligas</option>
          <option value="coach">Treinadores</option>
          <option value="player">Jogadores</option>
          <option value="season">Temporada</option>
          <option value="stadium">Estádio</option>
          <option value="team">Time</option>
        </select>
      </div>
      {renderTable()}
    </div>
  );
};

export default Home;

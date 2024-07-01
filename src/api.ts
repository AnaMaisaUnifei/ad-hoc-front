export const fetchCountries = async (filters: Record<string, string>) => {
  const query = new URLSearchParams(filters).toString();
  const response = await fetch(`/api/countries?${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }
  return response.json();
};

export const fetchLeagues = async (filters: Record<string, string>) => {
  const query = new URLSearchParams(filters).toString();
  const response = await fetch(`/api/leagues?${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch leagues');
  }
  return response.json();
};

// Adicione funções semelhantes para outras tabelas

import React from 'react';

interface FilterProps {
  filters: Record<string, string>;
  setFilters: (filters: Record<string, string>) => void;
  filterAttributes: string[];
}

const Filter: React.FC<FilterProps> = ({ filters, setFilters, filterAttributes }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="mb-4 text-center">
      {filterAttributes.map((attr) => (
        <input
          key={attr}
          type="text"
          name={attr}
          placeholder={`Filter by ${attr}`}
          value={filters[attr] || ''}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
      ))}
    </div>
  );
};

export default Filter;

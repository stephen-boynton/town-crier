import React, { useState } from 'react';
import styles from './styles.module.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles.container}>
      <input className={styles.searchInput} type="text" value={query} onChange={handleInputChange} />
      <button className={styles.searchButton} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

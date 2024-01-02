"use client"
import React, { useState } from 'react';
import styles from './styles.module.scss';

type SearchBarProps = {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
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

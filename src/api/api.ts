import { CharacterProps } from "../constants/interfaces";

const API_BASE_URL = 'https://swapi.dev/api/people/';

export const fetchCharacters = async (searchTerm: string) => {
  let results: CharacterProps[] = [];

  const fetchPage = async (pageUrl: string) => {
    const response = await fetch(pageUrl);
    const data = await response.json();
    results = results.concat(data.results);

    if (data.next) {
      await fetchPage(data.next); 
    }
  };

  await fetchPage(`${API_BASE_URL}?search=${searchTerm}`);
  return results;
};

import { CharacterProps } from "../constants/interfaces";

const API_BASE_URL = 'https://swapi.dev/api/people/';

export const fetchCharacters = async (searchTerm: string) => {
  const results: CharacterProps[] = [];

  const fetchPage = async (pageUrl: string) => {
    const response = await fetch(pageUrl);
    const data = await response.json();
    results.push(...data.results);
    
    if (data.next) {
      await fetchPage(data.next); 
    }
  };

  await fetchPage(`${API_BASE_URL}?search=${searchTerm}`);
  
  return results;
};

export const fetchPeople = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    
}


export const chunkArray = (data: CharacterProps[], selectedLimit: string) => {
  const result = [];
  const count = +selectedLimit;
  for (let i = 0; i < data.length; i += count) {
      result.push(data.slice(i, i + count));
  }

  return result;
};
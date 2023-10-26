import React, { Component } from 'react';
import { Loader, SearchBar, CharacterCard, ErrorButton } from './components';
import { AppProps, CharacterProps } from './constants/interfaces';

import './App.css';

class App extends Component<AppProps> {
  savedSearchRequest = localStorage.getItem('searchRequest');

  state = {
    data: [] as CharacterProps[],
    loading: true,
    searchValue: this.savedSearchRequest || '',
    searchRequest: this.savedSearchRequest || '',
    isError: false,
    isFetching: false,
  };

  onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };

  onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchRequest', this.state.searchValue);
    this.fetchResults(this.state.searchValue); // Вызывайте fetchResults при отправке формы
  };

  componentDidMount() {
    this.fetchResults(this.state.searchRequest);
  }

  errorCalling = () => {
    this.setState({ isError: true }, () => {
      throw new Error('Test error');
    });
  };

  fetchResults(searchTerm: string) {
    this.setState({ loading: true, isFetching: true });

    fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          data: data.results,
          loading: false,
          isFetching: false,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false, isFetching: false });
      });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className="container">
            <section id="top-section">
              <SearchBar
                onChange={this.onSearchChange}
                onSubmit={this.onSearchSubmit}
                value={this.state.searchValue}
              />
              <ErrorButton onClick={this.errorCalling} />
            </section>
            {this.state.data.length > 0 ? (
              <section id="main-section" className="cards-container">
                {this.state.data.map((item, index) => (
                  <CharacterCard
                    key={index}
                    name={item.name}
                    height={item.height}
                    mass={item.mass}
                    birth_year={item.birth_year}
                  />
                ))}
              </section>
            ) : (
              <h2 className="noresult">
                Unfortunately, your search returned no results
              </h2>
            )}
          </div>
        )}
      </>
    );
  }
}

export default App;

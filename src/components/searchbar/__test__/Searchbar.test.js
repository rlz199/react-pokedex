import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from '../Searchbar';
import PokemonService from '../../../services/PokemonService';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Searchbar></Searchbar>, div);
});

describe('#getPokemon()', () => {
  it('should get pokemon data', async () => {
    const response = await PokemonService.getPokemon('ditto');
    expect(response).toBeDefined();
  });

  it('should get pokemon list', async () => {
    const response = await PokemonService.getPokemon('');
    expect(response).toBeDefined();
  });

  it('should throw error', async () => {
    await expect(PokemonService.getPokemon('godofredo')).rejects.toThrow();
  });
});

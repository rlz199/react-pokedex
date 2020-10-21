import ServiceConsumer from './ServiceConsumer.js';
const PATH = '/pokemon';

export default class PokemonService extends ServiceConsumer {
  static async getPokemon(name) {
    const response = await this.get(`${PATH}/${name}`);
    return response;
  }
}

const API_ENDPOINT = 'https://pokeapi.co/api/v2';

export default class ServiceConsumer {
  static async getHeaders(path) {
    return {
      'Content-Type': 'application/json; charset=utf-8',
      'Connection': 'keep-alive',
    };
  }

  static async get(path) {
    const input = `${API_ENDPOINT}${path}`;
    const headers = await this.getHeaders(path);
    const init = {
      method: 'GET',
      headers,
    };
    try {
      const response = await fetch(input, init);
      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Searchbar from './components/searchbar/Searchbar';
import Details from './components/details/Details';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(response) {
    this.setState({ data: response });
  }

  render() {
    const { data } = this.state;
    return (
      <div className='position-absolute container-fluid h-100'>
        <Card className='pokedex anim-fade-in shadow'>
          <Card.Header className='border-0' style={{ backgroundColor: '#D32F2F', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
            <Image
              src='https://ianars.github.io/Pok-dex/images/pokedeex.png'
              className='w-100'
            />
          </Card.Header>
          <Card.Body>
            <Searchbar onPokemonSearch={this.handleData}></Searchbar>
            <Details pokemon={data}></Details>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

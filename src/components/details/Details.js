import React from 'react';
import { Row, Col, Image, Badge } from 'react-bootstrap';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.capitalizeString = this.capitalizeString.bind(this);
  }

  capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { pokemon } = this.props;
    return (
      <React.Fragment>
        {pokemon && pokemon.id && (
          <div className='anim-fade-in'>
            <Row>
              <Col className='text-center'>
                <Image src={pokemon.sprites.front_default || ''} />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className='text-right font-weight-light'>Id </Col>
              <Col>{pokemon.id}</Col>
            </Row>
            <Row className='mt-2'>
              <Col className='text-right font-weight-light'>Name </Col>
              <Col>{this.capitalizeString(pokemon.name)}</Col>
            </Row>
            <Row className='mt-2'>
              <Col className='text-right font-weight-light'>Abilities </Col>
              <Col>
                {pokemon.abilities.length > 0
                  ? pokemon.abilities.map((item) => {
                      return (
                        <Badge pill className='mr-1 font-weight-normal' variant='primary' key={item.slot}>
                          {this.capitalizeString(item.ability.name)}
                        </Badge>
                      );
                    })
                  : 'None'}
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col className='text-right font-weight-light'>Height </Col>
              <Col>{pokemon.height} ft.</Col>
            </Row>
            <Row className='mt-2'>
              <Col className='text-right font-weight-light'>Weight </Col>
              <Col>{pokemon.weight} lbs.</Col>
            </Row>
            <Row className='my-2'>
              <Col className='text-right font-weight-light'>Types </Col>
              <Col>
                {pokemon.types.length > 0
                  ? pokemon.types.map((item) => {
                      return (
                        <Badge pill className='mr-1 font-weight-normal' variant='primary' key={item.slot}>
                          {this.capitalizeString(item.type.name)}
                        </Badge>
                      );
                    })
                  : 'None'}
              </Col>
            </Row>
          </div>
        )}
      </React.Fragment>
    );
  }
}

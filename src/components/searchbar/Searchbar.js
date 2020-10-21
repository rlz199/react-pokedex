import React from 'react';
import {
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
	Alert,
	Spinner
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import PokemonService from '../../services/PokemonService';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      loading: false,
      status: null,
    };
  }

  handleInputChange(e) {
    this.setState({ name: e.target.value, status: null });
  }

  async getPokemonData() {
    const { name } = this.state;
    if (name.trim().length <= 0) {
      this.setState({ status: false });
      return;
    }
    this.setState({ loading: true });
    try {
      const response = await PokemonService.getPokemon(
        name.toLowerCase()
      );
      if (response) {
        this.setState({ status: true, loading: false });
        this.props.onPokemonSearch(response);
        return;
      }
    } catch (error) {
      this.setState({ status: false, loading: false });
    }
  }

  render() {
    const { name, status, loading } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col>
            <InputGroup className='mb-3'>
              <FormControl
                data-testid="filter"
							  autoFocus={true}
								placeholder="Pokemon's name"
                disabled={loading}
                onInput={(e) => this.handleInputChange(e)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && name.trim().length > 0) {
                    this.getPokemonData();
                  }
                }}
              />
              <InputGroup.Append>
                <Button
                  disabled={loading || name.trim().length <= 0}
                  onClick={() => this.getPokemonData()}
                >
                  {!loading ? (
                    <FaSearch color='' />
                  ) : (
                    <Spinner animation='border' size='sm'>
                      <span className='sr-only'>Loading...</span>
                    </Spinner>
                  )}
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        {status === false && (
          <Row>
            <Col>
              <Alert variant='danger'>
                Couldn't find this pokemon. Please try again.
              </Alert>
            </Col>
          </Row>
        )}
      </React.Fragment>
    );
  }
}

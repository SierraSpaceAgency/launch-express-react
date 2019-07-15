import React, { Component } from 'react';
import FullPage from '../../components/FullPage';
import Card from '../../components/Card';
import Title from '../../components/Title';
import Greeting from './components/Greeting';

class Example extends Component {
  constructor(props) {
    super(props);
    // set state
    this.state = {
      greeting: 'loading...'
    };
  }

  componentDidMount() {
    // call the server after a short delay
    setTimeout(() => {
      // hit the example API
      fetch('/api/example')
        .then(response => response.json())
        .then((response) => {
          console.log(response);
          const { greeting } = response;
          this.setState({ greeting });
        });
    }, 1000);
  }

  render() {
    const { greeting } = this.state;
    return (
      <FullPage>
        <Card>
          <Title>Check it out</Title>
          <Greeting>
            {greeting}
          </Greeting>
        </Card>
      </FullPage>
    );
  }
}

export default Example;

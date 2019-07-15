import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FullPage from '../../components/FullPage';
import Card from '../../components/Card';
import Title from '../../components/Title';
import RocketImage from '../../assets/rocket.png';
import RocketAnimation from './components/RocketAnimation';

class Landing extends Component {
  render() {
    return (
      <FullPage>
        <Card>
          <RocketAnimation src={RocketImage} alt="Rocket Lauching" />
          <Title>We have liftoff</Title>
          <p>
            Check out the
            {' '}
            <Link className="ApiLink" to="/example">API Test Page</Link>
          </p>
        </Card>
      </FullPage>
    );
  }
}

export default Landing;

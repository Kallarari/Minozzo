import Card from 'componnets/card';
import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';


const Home: React.FC = () => {

  return (
    <div>
      <Link to="/building-page">
      <h1 >HOME</h1>
      
      </Link>
      <Card />
    </div>
  );
}

export default Home;
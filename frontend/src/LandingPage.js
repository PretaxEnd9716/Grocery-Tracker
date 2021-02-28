import React from 'react';
import { Jumbotron } from 'reactstrap';
import Input from './Input'

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3 text-center">Grocery Availability searcher</h1>
        <p className="lead text-center">A simple grocery checker, ensuring that you never waste a trip to Krogers due to lack of stock</p>
        <hr className="my-2" />
        
        <p className="">Due to the winter storm, many items are only available at certain stores and out of stock elsewhere. This apps purpose is to ensure the Krogers you go to has everything you need.</p>
        <p className="invisible"> - </p>
        
        <p className="lead">
        </p>
        <SearchBar/>
        <p className="invisible"> - </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
import React ,{Component, useState} from 'react';
import {createContext} from 'react';

const MyContext = createContext();

export default class MyProvider extends Component {
  state = {
    cars: {
      car001: {name: 'Honda', price: 100},
      car002: {name: 'BMW', price: 150},
      car003: {name: 'Mercedes', price: 200},
    },
    msg: 'Ini message'
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          msg: this.state.msg,
          cars: this.state.cars,
          incrementPrice: (selectedID) => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price + 1;
            this.setState({
              cars,
            });
          },
          decrementPrice: (selectedID) => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price - 1;
            this.setState({
              cars,
            });
          },
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const MyConsumer = () => useContext(myContext);

export {MyContext, MyConsumer};
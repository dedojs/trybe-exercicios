// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const headphone = {
      id: 1023,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 773,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };



    const users = [
      {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },

    {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },
    {
      id: 82,
      name: "Andre",
      email: "and@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_6409.png"
    },
  ]
    return (
      users.map((user, index) => (
      <div key={user.id}>
        <UserProfile user={user} />
      </div>
    )));
  }
}

export default App;

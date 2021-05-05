import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './Card';
import './Css/home.css';

const Home = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const users = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      setUsers(users.data);

      console.log(users.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='main'>
      <h1 className='head-title'>Fetched User Information Page</h1>
      <div className='container'>
        {users.map((user) => (
          <div className='Card'>
            <div className='lower-container'>
              <UserCard
                name={user.name}
                username={'@' + user.username}
                email={user.email}
                id={user.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

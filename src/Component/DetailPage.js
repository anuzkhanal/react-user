import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Css/DetailPage.css';

function DetailPage(props) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const users = await axios.get(
        'https://jsonplaceholder.typicode.com/users/' + id
      );
      setUsers(users.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  let { id } = useParams();

  return (
    <div className='main-detail'>
      <h1 className='detail-info'>Detailed info</h1>

      <p>
        <strong>Name:</strong> {users.name}
      </p>
      <p>
        <strong>Username:</strong> {users.username}
      </p>
      <p>
        <strong>Phone:</strong> {users.phone}
      </p>
      <p>
        <strong>Email:</strong> {users.email}
      </p>
      <p>
        <strong>Website:</strong> {users.website}
      </p>
      <h2>Address </h2>
      <p>
        <strong>Suite:</strong> {users && users.address && users.address.suite}
        &nbsp;
      </p>
      <p>
        <strong>Street:</strong>{' '}
        {users && users.address && users.address.street}&nbsp;
      </p>
      <p>
        <strong>City:</strong> {users && users.address && users.address.city}
        &nbsp;
      </p>
      <p>
        <strong>ZipCode:</strong>{' '}
        {users && users.address && users.address.zipcode}
        &nbsp;
      </p>
      <h2>Company</h2>
      <p>
        <strong>Name:</strong> {users && users.company && users.company.name}
        &nbsp;
      </p>
      <p>
        <strong>Business:</strong> {users && users.company && users.company.bs}
        &nbsp;
      </p>
      <p>
        <strong>Catchphrase:</strong>{' '}
        {users && users.company && users.company.catchPhrase}
        &nbsp;
      </p>
    </div>
  );
}

export default DetailPage;

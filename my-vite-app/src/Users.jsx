// Users.jsx

import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.8.119:8083/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container">
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {users.map(user => (
            <div key={user.id} className="card">
              <div className="card-content">
                <h2 className="card-title">{user.username}</h2>
                <p className="card-email">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;

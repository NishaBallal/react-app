import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="user-list">
        {filteredUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="avatar-container">
              <div className="id-circle">{user.id}</div>
              <img
                src={user.avatar}
                alt={user.first_name}
                className="avatar"
              />
            </div>
            <div className="user-name">{user.first_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

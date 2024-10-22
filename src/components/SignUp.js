import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const HomePage = () => {
  const { users } = useContext(AuthContext);  // Fetch the list of users
  const navigate = useNavigate();

  const handleUserClick = (userId) => {
    navigate(`/${userId}/places`);  // Navigate to the user's places
  };

  return (
    <div>
      <h1>Property Sharing App</h1>

      <div style={{ marginBottom: '20px' }}>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
      </div>

      <h2>Users:</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user.id)}>
              {user.name}
            </li>
          ))
        ) : (
          <p>No users found. Please sign up.</p>
        )}
      </ul>
    </div>
  );
};

export default HomePage;

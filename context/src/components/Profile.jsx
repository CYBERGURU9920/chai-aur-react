import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user.username}</p>
      <button onClick={() => localStorage.removeItem('user')}>Logout</button>
    </div>
  );
}

export default Profile;
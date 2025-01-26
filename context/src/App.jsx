import { useState } from 'react';
import './App.css';
import UserContext from './context/UserContext';
import Login from './components/login';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>React Context Learn</h1>
      <Login />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
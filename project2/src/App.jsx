import React, { useState, useCallback, useEffect,useRef } from 'react';

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  //useRef hook
  const passwordRef = useRef();



  const passGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*";
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, number, character]);

  const copypass = () => {
   window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passGenerate();
  }, [length, number, character, passGenerate]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-center'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder="Generated password"
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copypass} 
        className='bg-orange-300'>Copy</button>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label>Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={character}
              onChange={(e) => setCharacter(e.target.checked)}
            />
            <label>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
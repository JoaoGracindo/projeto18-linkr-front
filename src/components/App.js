import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import UserProvider from '../context/UserContext';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
          <Routes>
          </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;


import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import AuthContext from '../context/AuthContext';

function App() {
  return (
    <AuthContext.Provider>
      <BrowserRouter>
          <Routes>
          </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

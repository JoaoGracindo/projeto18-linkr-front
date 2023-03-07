import { BrowserRouter, Route, Routes} from 'react-router-dom';

import UserContext from '../context/UserContext';

function App() {
  return (
    <UserContext.Provider>
      <BrowserRouter>
          <Routes>
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

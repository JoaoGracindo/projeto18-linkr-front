import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TokenProvider from '../context/UserContext';


function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
          <Routes>
          </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;


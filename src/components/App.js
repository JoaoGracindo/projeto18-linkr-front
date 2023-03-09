import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TokenProvider from '../context/UserContext';
import GlobalStyled from './GlobalStyled';
import SignInPage from './SignFunctions/signInPage';
import SignUpPage from './SignFunctions/signUpPage';


function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
      <GlobalStyled/>
          <Routes>
            <Route path="/" element={<SignInPage/>}/>
            <Route path="/sign-up" element={<SignUpPage/>}/>
          </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;


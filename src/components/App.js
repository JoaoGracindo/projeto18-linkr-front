import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TokenProvider from '../context/UserContext';
import GlobalStyled from './GlobalStyled';
import SignUp from './SignFunctions/signUp';
import SignIn from './SignFunctions/signIn';
import Linkr from './SignFunctions/Linkr';
import SignInPage from './SignFunctions/signInPage';
import SignUpPage from './SignFunctions/signUpPage';


function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
      <GlobalStyled/>
          <Routes>
            <Route path="/" element={<SignInPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
          </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;


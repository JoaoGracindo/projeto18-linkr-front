import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TokenProvider from '../context/UserContext';
import UserPage from '../pages/UserPage';
import GlobalStyled from './GlobalStyled';
import Timeline from './Post/postHashtags/Timeline';
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
            <Route path="/user/:id" element={<UserPage/>}/>
            <Route path="/timeline" element={<Timeline/>}/>
          </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;


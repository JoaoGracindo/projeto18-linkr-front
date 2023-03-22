import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TokenProvider from '../context/UserContext';
import HashtagPage from '../pages/HashtagPage/HashtagPage';
import UserPage from '../pages/UserPage';
import GlobalStyled from './GlobalStyled';
import Timeline from './Post/postHashtags/timeline/Timeline';
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
            <Route path='/hashtags/:hashtag' element={<HashtagPage />} />
          </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;


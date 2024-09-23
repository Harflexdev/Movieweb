import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {

  return (
  <div>
 <Router>
      <Nav/>
        <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/signUp' element={<SignUp/>} />
        </Routes>
    </Router>
  </div>
  )
}

export default App

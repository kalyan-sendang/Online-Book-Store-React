
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterScreen from "./screens/RegisterScreen"
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

function App() {
  return(
    <Router>
      <Routes>
      <Route path ='/' element={<HomeScreen/>}  />
      <Route path ='/register' element={<RegisterScreen/>}  />
      <Route path ='/login' element={<LoginScreen/>}  />
      </Routes>
    </Router>
  )

}

export default App

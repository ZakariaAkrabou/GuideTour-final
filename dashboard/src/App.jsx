import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Layout from './component/shared/Layout'
import Users from './component/Users';

import Guides from './component/Guides';
import Register from './component/Register';
import Login from './component/Login';



function App() {


  return (
  <Router>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path= "users" element={<Users />} />
          <Route path= "guides" element={<Guides />} />
        </Route>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
    </Routes>
  </Router>
  );
}

export default App;

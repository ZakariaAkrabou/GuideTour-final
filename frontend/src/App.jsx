// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/layout';
import EmailConfirmation from './pages/emailConfermation';
import ResetPassword from './components/Modals/restPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for email confirmation */}
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/rest-password/:token" element={<ResetPassword/>} />
        
        {/* All other routes wrapped with Layout */}
        <Route path="*" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Authenticate from './pages/Authenticate';
import Places from './pages/Places';
import AddProperty from './components/AddProperty';
import UpdateProperty from './components/UpdateProperty';
import PlaceDetails from './components/PlaceDetails';
import SignUp from './components/SignUp';  // Import SignUp component
import SignIn from './components/SignIn';  // Import SignIn component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:uid/authenticate" element={<Authenticate />} />
        <Route path="/:uid/places" element={<Places />} />
        <Route path="/places/new" element={<AddProperty />} />
        <Route path="/places/pid/:pid" element={<PlaceDetails />} />
        <Route path="/places/update/:pid" element={<UpdateProperty />} />
        <Route path="/signup" element={<SignUp />} />   {/* Route for SignUp */}
        <Route path="/signin" element={<SignIn />} />   {/* Route for SignIn */}
      </Routes>
    </Router>
  );
}

export default App;

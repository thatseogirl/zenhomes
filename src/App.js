import {Routes, Route} from 'react-router-dom';

import "./App.css";
import SignUp from "./auth/SignUp/SignUp";
import SignIn from "./auth/SignIn/SignIn";

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

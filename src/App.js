import {Routes, Route} from 'react-router-dom';

import "./App.css";
import SignIn from './auth/SignIn/SignIn';
import SignUp from './auth/SignUp/SignUp';
import Home from './Home/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route path="/rentals" element={<Rentals />} /> */}
        {/* <Route path="/rentals/:rentalId" element={<RentalDetails />} /> */}
        {/* <Route path="/rentals/add" element={<AddRental />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

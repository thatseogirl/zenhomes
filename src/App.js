import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./auth/SignIn/SignIn";
import SignUp from "./auth/SignUp/SignUp";
import {AllRentals} from "./pages/AllRentals";
import AddRental from "./pages/AddRental";

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route path="/rentals/:rentalId" element={<RentalDetails />} /> */}
        <Route path='/rentals/add' element={<AddRental />} />
        <Route path='/rentals' element={<AllRentals />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

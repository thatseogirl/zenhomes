import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./auth/SignIn/SignIn";
import Home from "./Home/Home";
import SignUp from "./auth/SignUp/SignUp";
import DashboardOverview from "./components/Dashboard/DashboardOverview";
import Tenants from "./components/Dashboard/Tenants";
import TenantsList from "./components/Dashboard/TenantList";
import Dashboard from "./pages/DashboardTenant";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tenantsData, setTenantsData] = useState(TenantsList);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/landlord/tenantList'
          element={<Tenants tenantsData={tenantsData} />}
        />
        <Route
          path='/landlord'
          element={<DashboardOverview tenantsData={tenantsData} />}
        />
        <Route path='/tenant' element={<Dashboard />} />
        {/* <Route path="/rentals" element={<Rentals />} /> */}
        {/* <Route path="/rentals/:rentalId" element={<RentalDetails />} /> */}
        {/* <Route path="/rentals/add" element={<AddRental />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import "./App.css";
import SignIn from './auth/SignIn/SignIn';
import Home from './Home/Home';
import SignUp from './auth/signup/SignUp';
import DashboardOverview from './components/Dashboard/DashboardOverview';
import Tenants from './components/Dashboard/Tenants';
import LandLordDashboard from './components/LandLordDashboard';
import TenantsList from './components/Dashboard/TenantList';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tenantsData, setTenantsData] = useState(TenantsList);

  return (
    <div className='App'>
      <Routes>
        <Route path="/landlord" element={<LandLordDashboard />} />
        <Route path="/landlord/tenantList" element={<Tenants tenantsData={tenantsData} />} />
        <Route path="/landlord/overview" element={<DashboardOverview tenantsData={tenantsData} />} />
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

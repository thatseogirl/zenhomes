import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import RentalCard from "../components/RentalCard";

export const AllRentals = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Add actual api call here
    fetch("/api/rentals")
      .then((res) => res.json())
      .then((data) => {
        setRentals(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <Grid container spacing={3}>
            {rentals.map((rental) => (
              <Grid item xs={12} sm={6} md={4}>
                <RentalCard rental={rental} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

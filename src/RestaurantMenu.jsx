import React, { useEffect, useState } from 'react'; 
import Card from './Card'; 
import TextField from '@mui/material/TextField';
import { restaurants } from "./restaurant";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

function RestaurantMenu() {
  const [restaurant, setRestaurant] = useState(restaurants); 
  const [searchInput, setSearchInput] = useState(""); 

  useEffect(() => {
    if (searchInput === '') {
      setRestaurant(restaurants);
    } else {
      let filterData = restaurants.filter((item) => {
        let searchTerm = item.name.toLowerCase();
        return searchTerm.includes(searchInput.toLowerCase());
      });
      setRestaurant(filterData);
    }
  }, [searchInput]);

  return (
    <>
      <div className="form"> 
        <TextField
          id="outlined-basic" 
          label="Search"
          variant="outlined"
          className='inp' 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.currentTarget.value)} 
        />
      </div>
      <div className="restaurant-container">
        {restaurant.map((item, idx) => (
          <Card
            key={idx} 
            name={item.name} 
            cuisine={item.cuisine} 
            location={item.location} 
            rating={item.rating} 
            image={item.image} 
          />
        ))}
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}

export default RestaurantMenu;

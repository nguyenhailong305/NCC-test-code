import React from 'react'
import * as pages from '../pages'
import {Routes , Route} from 'react-router-dom'

const Routers = () => {
    return (
      <Routes>
        <Route path="/" element={<pages.Home />}/>
        {/* <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tour/search" element={<SearchResultList />} /> */}
      </Routes>
    );
  };
  
  export default Routers;
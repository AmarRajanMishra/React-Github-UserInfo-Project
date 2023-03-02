import React, { useEffect } from 'react'
// import axios from "axios";
import Controlled from './Controlled';
import UnControlled from './UnControlled';

// const options = {
//     method: 'GET',
//     url: 'https://covid-193.p.rapidapi.com/countries',
//     headers: {
//       'X-RapidAPI-Key': '8aec7493ebmsh87f4049c06b695dp175580jsn098a54be0344',
//       'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
//     }
//   };

function Covid() {
    // useEffect(()=>{
    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // },[])
  return (
    <>
      <h1>Rapid API</h1>
      <Controlled />
      <h1>UnControlled</h1>
      <UnControlled />
    </>
  )
}

export default Covid;

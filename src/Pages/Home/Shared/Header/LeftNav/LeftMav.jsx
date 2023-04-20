import React, { useEffect, useState } from 'react';

const LeftMav = () => {
const [category,setCategories] = useState([]);
useEffect( ()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then (data=>setCategories(data))
    .catch(error=>console.log(error))
},[]);


    return (
        <div>
           
        </div>
    );
};

export default LeftMav;
import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhoneContainer from '../Components/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    const [phones,setPhones]=useState(data);
    const handleSearch=(e,text)=>{
        e.preventDefault();
        if(text==='') return setPhones(data)
        // console.log(text);
        const searchPhone=data.filter(phone=>
            phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone?.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
    );
        // console.log(searchPhone);
        setPhones(searchPhone);
    }
    // console.log(data);
    return (
        <div>

          <Hero handleSearch={handleSearch} ></Hero>
            <PhoneContainer phones={phones}></PhoneContainer>
            
        </div>
    );
};

export default Home;
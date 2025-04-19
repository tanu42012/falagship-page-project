import React, { useState } from 'react';
import bannerImg from '../assets/banner.png'
import Button from './Ui/Button';

const Hero = ({handleSearch}) => {
    const [searchText,setSearchText]=useState('');
    console.log(searchText);
    return (
        <div className='py-12'>
            <img className='w-full mx-auto md:max-w-md' src={bannerImg} alt="" />
            <div className='text-center space-y-4'>
                <h1 className='font-thin text-7xl text-gray-900'>Browse ,search ,View, Buy</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, enim?</p>
                <form onSubmit={(e)=>{
                    handleSearch(e,searchText)
                    setSearchText('')
                }} className='flex flex-col md:flex-row justify-center items-center mb-4 md:p-24' >
                    <input
                    value={searchText}
                    onChange={e=>setSearchText(e.target.value)}
                     className='bg-white border border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3 md:mr-2' type="text" placeholder='Search phone by name' />

<Button label='search'></Button> 

                </form>

            </div>
            
        </div>
    );
};

export default Hero;
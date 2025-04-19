import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/Ui/Button';

const PhoneDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    // console.log(id);
    const singlePhone=data.find(phone=>phone.id===parseInt(id))
    // console.log(singlePhone);
    // console.log(data);
    const{name,image,brand,model,price,description,storage,camera_info}=singlePhone || {}
    return (
        <div className='w-full py-6'>
                 <img className='w-full mx-auto md:w-auto mb-8 ' src={image} alt="" />
                 <div className='flex justify-between'>
                 <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                 <div className='flex'>
                    <Button label='cart'></Button> 
                     <Button label='favorite'></Button>
                   
   
                 </div>
                

                 </div>
                
        </div>
    );
};

export default PhoneDetails;
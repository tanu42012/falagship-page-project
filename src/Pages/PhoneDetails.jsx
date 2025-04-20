import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/Ui/Button';
import { MdBookmarkAdd } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { addFavorite, addToCart, getCart } from '../Components/Utils';
import { CartContext } from '../Providers/Contexts';
// import { addFavorite } from '../Components/Utils';

const PhoneDetails = () => {
    const {setCart}=useContext(CartContext)
    const data=useLoaderData();
    const {id}=useParams();
    // console.log(id);
    const singlePhone=data.find(phone=>phone.id===parseInt(id))
    // console.log(singlePhone);
    // console.log(data);
    const{name,image,brand,model,price,description,storage,camera_info}=singlePhone || {}
    const handleFavorite=()=>{
       
        addFavorite(singlePhone);
    }
    const handleCart=()=>{
        
        addToCart(singlePhone);
        // console.log(addToCart);
        // setCart(prv=>[...prv,singlePhone])
        setCart(getCart())
    }
    return (
        <div className='w-full py-6'>
                 <img className='w-full mx-auto md:w-auto mb-8 ' src={image} alt="" />
                 <div className='flex justify-between'>
                 <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                 <div  className='flex space-x-4'>
                    <Button onClick={handleCart} label={<FaShoppingCart />}></Button> 
                     <Button onClick={handleFavorite}  label={<MdBookmarkAdd />}></Button>
                   
   
                 </div>
                 <div>

                 </div>
                

                 </div>
                
        </div>
    );
};

export default PhoneDetails;
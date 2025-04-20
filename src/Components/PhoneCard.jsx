import React from 'react';
import { Link } from 'react-router';
import { MdDeleteForever } from "react-icons/md";
// import { removeFavorite } from './Utils';

const PhoneCard = ({phone,deletable,handleDelete}) => {
    const {name,image, description,id}=phone;
    return (
        <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
<h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
     <Link to={`/phone-details/${id}`}> <button href="#_" className="relative inline-block text-lg group">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">View More</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
     </Link>
    </div>
  </div>
 {deletable &&  <div onClick={()=>handleDelete(id)} className='absolute -top-2 -right-2 bg-gray-300 p-3 ml-5 hover:bg-gray-300 group rounded-full cursor-pointer'><MdDeleteForever size={20} className='text-gray-100 group-hover:text-gray-900' /></div>}
</div>
    );
};

export default PhoneCard;
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Button from '../Components/Ui/Button';
import { Link } from 'react-router';
// import { useRouteError } from 'react-router';

const ErrorPage = () => {
    // const error=useRouteError()
    // console.log(error.status);
    return (
        <div>
             <Navbar></Navbar>
             <div className='text-center'>
             <h1 className='text-4xl font-bold'> 404 Error Page</h1>
            <Link to='/'>
            <Button label='GO to Home'></Button>
            </Link>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default ErrorPage;
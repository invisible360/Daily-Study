import React from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';


const Aside = () => {
    return (
        <div className='col-span-1 bg-violet-200 p-5'>
            <Profile></Profile>
            <Break></Break>
            <Details></Details>
            
        </div>
    );
};

export default Aside;
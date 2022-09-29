import React, { useState } from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';


const Aside = (props) => {
    const [rest, setRest] = useState (0);
    // console.log(props.newActivity);
    const breakTime = (restTime) => {
        // console.log(restTime);
        setRest (restTime);
    }
    return (
        <div className='col-span-1 bg-violet-200 p-5'>
            <Profile></Profile>
            <Break breakTime={breakTime}></Break>
            <Details updatedActivity={props.newActivity} rest={rest}></Details>

        </div>
    );
};

export default Aside;
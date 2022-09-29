import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import pp from '../../images/inv.jpg'

const Profile = () => {
    return (
        <div className='py-5'>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={pp} alt="" />
                    </div>
                </div>
                <div className='flex flex-col px-5'>
                    <h2 className='font-bold text-lg'>Zakir Hossain</h2>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faMapLocationDot} />
                        <p className='pl-1 text-sm'>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-between my-10 p-5 bg-base-100 rounded-lg'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-semibold text-sm'>93%</h2>
                    <p className='text-xs'>Quiz</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='font-semibold text-sm'>250 Hours</h2>
                    <p className='text-xs'>Video Duration</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='font-semibold text-sm'>59.71</h2>
                    <p className='text-xs'>Assignment</p>
                </div>
            </div>

        </div>
    );
};

export default Profile;
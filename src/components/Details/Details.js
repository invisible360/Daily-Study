import React from 'react';
import './Details.css'
const Details = () => {
    return (
        <div>
            <h2 className='font-bold text-lg pb-5'>Study Details</h2>

            <div className="form-control pb-5">
                <label className="input-group">
                    <span className='text-sm font-semibold w-[50%] lg:w-[70%]'>Exercise time</span>
                    <p className="input input-bordered text-center font-bold w-[80%] flex items-center justify-center">0</p>
                </label>
            </div>
            <div className="form-control pb-5">
                <label className="input-group">
                    <span className='text-sm font-semibold w-[50%] lg:w-[70%]'>Break time</span>
                    <p className="input input-bordered text-center font-bold w-[80%] flex items-center justify-center">0</p>
                </label>
            </div>

            <button className='btn btn-success w-full my-10'>Activity Completed</button>


        </div>
    );
};

export default Details; <h2>Study Details</h2>
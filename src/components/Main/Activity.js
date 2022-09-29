import React from 'react';

const Activity = (props) => {
    const { picture, name, time } = props.activity
    return (
        <div>
            <div className="card bg-base-100 drop-shadow-2xl h-full">
                <figure className="px-3 pt-3">
                    <img src={picture} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Time Spend: {time} min</p>
                    <div className="card-actions">
                        <button className="btn btn-md">Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
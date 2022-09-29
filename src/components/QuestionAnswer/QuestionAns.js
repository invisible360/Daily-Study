import React from 'react';

const QuestionAns = () => {
    return (
        <div className='py-10'>
            <div className="text-3xl font-bold text-center">Question Answer Section</div>
            <section className='py-5'>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Click me to show/hide content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>hello</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuestionAns;
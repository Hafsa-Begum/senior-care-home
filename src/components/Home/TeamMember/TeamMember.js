import React from 'react';

const TeamMember = ({ teamMember }) => {
    const { name, image, designation } = teamMember;
    return (
        <div className='col-md-3 col-sm-6 col-12'>
            <div style={{ backgroundColor: '#8587d638' }} className='mx-2 rounded-3 border px-2 pt-2 mb-3'>
                <div>
                    <img style={{ height: '238px' }} className='w-100 rounded-3' src={image} alt="" />
                </div>
                <h4 className='mt-2'>{name}</h4>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default TeamMember;
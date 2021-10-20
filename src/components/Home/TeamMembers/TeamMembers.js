import React, { useState, useEffect } from 'react';
import TeamMember from '../TeamMember/TeamMember';

const TeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Hafsa-Begum/servicesFakeData/main/teamMember.json')
            .then(res => res.json())
            .then(data => setTeamMembers(data))
    }, [])
    return (
        <div id='teamMembers' className='mb-5'>
            <h1 className=''>Our dedicated Heros</h1>
            <div className='underline mb-5 mx-auto'></div>
            <div className="row mx-5">
                {
                    teamMembers?.map(teamMember => <TeamMember key={teamMember.name} teamMember={teamMember}></TeamMember>

                    )
                }

            </div>
        </div>
    );
};

export default TeamMembers;
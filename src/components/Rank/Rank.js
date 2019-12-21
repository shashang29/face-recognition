import React from 'react'

const Rank = ({first_name, entries}) => {
    return (
        <div>
            <div className='f2 white'>
            {`${first_name}, your current entry count is...`}
            </div>
            <div className='f1 white'>
            {entries}
            </div>
            
        </div>
    )

}


export default Rank;
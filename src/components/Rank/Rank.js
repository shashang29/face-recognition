import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux';

const Rank = ({ first_name, entries }) => {

    const [emoji, setEmoji] = useState('');

    useEffect(() => {
        generateEmoji(entries)
    }, [entries]);

    const generateEmoji = (entries) => {
        fetch(`https://ul541yco0h.execute-api.ap-south-1.amazonaws.com/prod/rank?rank=${entries}`)
            .then(res => res.json())
            .then(data => setEmoji(data.input))
            .catch(console.log)
    }
    return (
        <div>
            <div className='f2 white'>
                {`${first_name}, your current entry count is...`}
            </div>
            <div className='f1 white'>
                {entries}
            </div>
            <div className='f3 dark-blue b'>
                {`Rank Badge:${emoji}`}
            </div>

        </div>
    )
}
const mapStateToProps=({login})=>({
first_name: login.user.first_name,
entries: login.user.entries
})

export default connect(mapStateToProps)(Rank);
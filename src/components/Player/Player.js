import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'
import './Player.scss';

const Player = (video) => {
    return (
        <div className='PlayerContainer'>
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
            />
        </div>
    );
}

Player.propTypes = {
    video: PropTypes.object,
}

export default Player;
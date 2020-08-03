import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'
import './Player.scss';

const Player = ({ currentSong }) => {
    return (
        <div className='PlayerContainer'>
            <ReactPlayer
                className='react-player'
                url={currentSong}
                width='auto'
                height='auto'
            />
        </div>
    );
}

Player.propTypes = {
    video: PropTypes.string,
}

export default Player;
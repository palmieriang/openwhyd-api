import React from 'react';
import PropTypes from 'prop-types';
import Ranking from '../Ranking/Ranking';
import './SingleTrack.scss';

const SingleTrack = ({ track, handlePlayer }) => {
    const { img, name, pl, rankIncr, src } = track;

    return (
        <div className="TrackContainer">
            <img className="TrackCover" src={img} alt="" />
            <div>
                <h2>
                    {src ? (
                        <a
                            className="TrackTitle"
                            href={src.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handlePlayer}
                        >
                            {name}
                        </a>
                    ) : (
                        <p className="TrackTitle">{name}</p>
                    )}
                </h2>
                {pl && <p>{pl.name}</p>}
                <Ranking increment={rankIncr} />
            </div>
        </div>
    );
};

SingleTrack.propTypes = {
    track: PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string,
        pl: PropTypes.shape({
            name: PropTypes.string,
        }),
        src: PropTypes.shape({
            id: PropTypes.string,
        }),
    })
};

export default SingleTrack;

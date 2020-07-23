import React from 'react';
import PropTypes from 'prop-types';

const SingleTrack = ({ track }) => {
    const { img, name, pl, src } = track;

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
                        >
                            {name}
                        </a>
                    ) : (
                        <p className="TrackTitle">{name}</p>
                    )}
                </h2>
                {pl && <p>{pl.name}</p>}
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
import React from 'react';

const SingleTrack = ({ track }) => {
    console.info(track);
    const { img, name, pl, src } = track;
    return (
        <div className="TrackContainer">
            <img className="TrackCover" src={img} alt="" />
            <div>
                <h2>
                    {src ? (
                        <a
                            href={src.id}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {name}
                        </a>
                    ) : (
                        <p>{name}</p>
                    )}
                </h2>
                {pl && <p>{pl.name}</p>}
            </div>
        </div>
    );
};

export default SingleTrack;
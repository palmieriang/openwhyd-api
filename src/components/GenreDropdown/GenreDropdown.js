import React from 'react';
import PropTypes from 'prop-types';
import './GenreDropdown.scss';

const musicGenre = [
    { label: 'All', value: 'all', key: 'all' },
    { label: 'Blues', value: 'blues', key: 'blues' },
    { label: 'Classical', value: 'classical', key: 'classical' },
    { label: 'Electro', value: 'electro', key: 'electro' },
    { label: 'Folk', value: 'folk', key: 'folk' },
    { label: 'Hip Hop', value: 'hip-hop', key: 'hip-hop' },
    { label: 'Indie', value: 'indie', key: 'indie' },
    { label: 'Jazz', value: 'jazz', key: 'jazz' },
    { label: 'Latin', value: 'latin', key: 'latin' },
    { label: 'Metal', value: 'metal', key: 'metal' },
    { label: 'Pop', value: 'pop', key: 'pop' },
    { label: 'Punk', value: 'punk', key: 'punk' },
    { label: 'Reggae', value: 'reggae', key: 'reggae' },
    { label: 'R&B', value: 'rnb', key: 'rnb' },
    { label: 'Rock', value: 'rock', key: 'rock' },
    { label: 'Soul', value: 'soul', key: 'soul' },
    { label: 'World', value: 'world', key: 'world' },
];

const GenreDropdown = ({ changeMusicGenre, initialGenre }) => {

    return (
        <select
            onChange={changeMusicGenre}
            value={initialGenre}
        >
            {
                musicGenre.map(({key, value, label}) => <option key={key} value={value}>{label}</option>)
            }
        </select>
    );
};

GenreDropdown.propTypes = {
    changeMusicGenre: PropTypes.func,
    initialGenre: PropTypes.string,
};

export default GenreDropdown;

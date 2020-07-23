import React from 'react';
import PropTypes from 'prop-types';

const musicGenre = [
    { label: 'All', value: '', key: 'all' },
    { label: 'Blues', value: 'blues', key: 'blues' },
    { label: 'Electro', value: 'electro', key: 'electro' },
    { label: 'Folk', value: 'folk', key: 'folk' },
    { label: 'Hip Hop', value: 'hip-hop', key: 'hip-hop' },
    { label: 'Indie', value: 'indie', key: 'indie' },
    { label: 'Metal', value: 'metal', key: 'metal' },
    { label: 'Pop', value: 'pop', key: 'pop' },
    { label: 'Punk', value: 'punk', key: 'punk' },
    { label: 'R&B', value: 'rnb', key: 'rnb' },
    { label: 'Rock', value: 'rock', key: 'rock' },
    { label: 'Soul', value: 'soul', key: 'soul' },
];

const GenreDropdown = ({ changeMusicGenre }) => {
    return (
        <select
            onChange={changeMusicGenre}
        >
            {
                musicGenre.map(({key, value, label}) => <option key={key} value={value}>{label}</option>)
            }
        </select>
    );
};

GenreDropdown.propTypes = {
    changeMusicGenre: PropTypes.func,
};

export default GenreDropdown;

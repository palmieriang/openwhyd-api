import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Arrow} from './svg/arrow.svg';
import {ReactComponent as Equal} from './svg/equal.svg';

const Ranking = ({ increment }) => {
    return (
        <div className="RankingContainer">
            <div className="AccessibleIcon">
                <Arrow className={`ArrowUp ${increment < 0 ? "Color" : ""}`} />
                <span className="Text">Going up</span>
            </div>

            <div className="AccessibleIcon">
                <Equal className={`EqualIcon ${!increment || increment === 0 ? "Color" : ""}`} />
                <span className="Text">Stable</span>
            </div>

            <div className="AccessibleIcon">
                <Arrow className={`ArrowDown ${increment > 0 ? "Color" : ""}`} />
                <span className="Text">Going down</span>
            </div>
        </div>
    );
};

Ranking.propTypes = {
    increment: PropTypes.number,
};

export default Ranking;

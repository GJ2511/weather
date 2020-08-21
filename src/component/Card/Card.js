import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ cards, unit, startIndex, endIndex, handleClick, selectDate }) => {
    const unitPostFix = unit.charAt(0);

    return (
        <div className="card-deck col-12">
            {cards.map((card, index) => {
                const cardClasses = classNames('card col-4', {
                    'border-primary': selectDate === card.d,
                    'border-dark': selectDate !== card.d,
                });

                if (index >= startIndex && index <= endIndex) {
                    return (
                        <div className={cardClasses} key={card.d} onClick={() => handleClick(card.d)}>
                            <div className="card-body">
                                <p>
                                    Temp: {card[`Avg${unit}`].toFixed(2)}
                                    {unitPostFix}
                                </p>
                                <p>Date: {card.d}</p>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

Card.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.exact({
            d: PropTypes.string,
            AvgCelcius: PropTypes.number,
            AvgFarenhite: PropTypes.number,
        })
    ).isRequired,
    endIndex: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    selectDate: PropTypes.string.isRequired,
    startIndex: PropTypes.number.isRequired,
    unit: PropTypes.oneOf(['Celcius', 'Farenhite']).isRequired,
};

export default Card;

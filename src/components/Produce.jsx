import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
    return (
        <div>
            <style jsx>{`
                div {
                    background-color: orange;
                }
            `}</style>
            <h2>{props.month}</h2>
            <p>
                {props.selection.map((item, index) =>
                    <span>{item}, </span>
                )}
            </p>
        </div>
    );
}
Produce.propTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.array.isRequired
};

export default Produce;
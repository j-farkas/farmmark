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
            <h3>Available produce: {props.selection}</h3>
            <hr/>
        </div>
    );
}

Produce.propTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.array.isRequired
};

export default Produce;
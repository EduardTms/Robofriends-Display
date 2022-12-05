import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', borderRadius: '0.5rem', height: '77vh' }}>
            { props.children }
        </div>
    );
};

export default Scroll;
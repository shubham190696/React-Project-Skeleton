import React from 'react';

function Button(props) {
    const {onClick,children} = props;
    console.log(children)
    return <button onClick={onClick}>{children}</button>
}

export default Button;
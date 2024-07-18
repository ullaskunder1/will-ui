import React from 'react';
const Button = ({ label, onClick }) => {
    return React.createElement("button", { onClick: onClick }, label);
};
export default Button;

import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => any; // TODO: Что это за пропс? - возвращает обработчик события на текущем элементе => any значит что любое событие, а не какое-то определенное
}

var Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    );
};
export default Button;
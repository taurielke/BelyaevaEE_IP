import React from 'react';
import { useState } from 'react'; // Подключаем ссылку на useState.
import './Button';
interface CounterProps {
    start: number;
    step: number;
}

var Counter = (props: CounterProps) => {
    var [ count, setCount ] = useState(props.start); // И используем. Значение по умолчанию - 0.
    var handleIncrease = () => {
        setCount(count + props.step);
    };
    return (
        <div>
            <div>Значение счётчика: {count}.</div>
            <button onClick={handleIncrease}>{'Прибавить ' + props.step}</button>
        </div>
    );
};
export default Counter;
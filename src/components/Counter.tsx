import { MouseEventHandler } from "react";

type counterProps = {
    number: number,
    onIncrease?: MouseEventHandler<HTMLButtonElement>,
    onDecrease?: MouseEventHandler<HTMLButtonElement>
}

const Counter = ({ number, onIncrease, onDecrease }: counterProps) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;
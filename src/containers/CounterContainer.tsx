import { connect } from 'react-redux';
import Counter from "../components/Counter";
import { decrease, increase } from '../modules/counter';
type CounterContainerProps = {
    number: any,
    increase: any,
    decrease: any
}

const CounterContainer = ({ number, increase, decrease }: CounterContainerProps) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

export default connect(
    (state: any) => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    }
)(CounterContainer);
import { MouseEventHandler } from "react";

type todoItemProps = {
    todo?: any,
    onToggle?: MouseEventHandler,
    onRemove?: MouseEventHandler
}

const TodoItem = ({ todo, onToggle, onRemove }: todoItemProps) => {
    return (
        <div>
            <input type="checkbox" />
            <span>예제 텍스트</span>
            <button>삭제</button>
        </div>
    );
};

type todoProps = {
    input?: string,
    todos?: object,
    onChangeInput?: any,
    onInsert?: any,
    onToggle?: any,
    onRemove?: any,
}

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}: todoProps) => {
    const onSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
}

export default Todos;
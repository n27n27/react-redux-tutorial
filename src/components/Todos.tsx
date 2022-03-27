import { MouseEventHandler } from "react";

type todoItemProps = {
    todo?: any,
    onToggle: any,
    onRemove: any
}

const TodoItem = ({ todo, onToggle, onRemove }: todoItemProps) => {
    return (
        <div>
            <input 
                type="checkbox" 
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{ textDecoration: todo.done ? 'line-through': 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => onRemove(todo.id)}>
                삭제
            </button>
        </div>
    );
};

type todoProps = {
    input?: string,
    todos: any,
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
        onInsert(input);
        onChangeInput("");
    };

    const onChange = (e: any) => onChangeInput(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map((todo: any) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
}

export default Todos;
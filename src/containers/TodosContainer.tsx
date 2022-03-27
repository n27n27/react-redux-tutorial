import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

type todosContainerProps = {
    input: any,
    todos: any,
    changeInput: any,
    insert: any,
    toggle: any,
    remove: any
}

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}: todosContainerProps) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    ({ todos } : any) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput, insert, toggle, remove

})(TodosContainer);

import React, { useState } from 'react';

const TodoList = props => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();
        setTodoList([
            ...todoList,
            {
                task: todo,
                isComplete: false
            }
        ]);
        setTodo("");
    }

    const updateTodoCompleted = (e, index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList[index].isComplete = e.target.checked;
        setTodoList(updatedTodoList);
    }

    const deleteTodo = (index) => {
        setTodoList(todoList.filter((e, i) => i != index));
    }

    return (
        <>
            <form className={"form-control"} onSubmit={addTodo}>
                <h1>To-Do</h1>
                <input type={"text"} className={"form-control"} onChange={(e) => { setTodo(e.target.value) }} value={todo} />
                <input type={"submit"} value={"Add"} className={"form-control btn btn-primary mt-1"} />

                <div className='container my-3'>
                    {todoList.map((t, index) => {
                        return (
                            <div className={"d-flex p-1 border mb-0 align-items-center justify-content-between"} key={index}>
                                <h4 className={`my-auto ${t.isComplete ? "text-decoration-line-through" : "text-decoration-none"}`}>{t.task}</h4>
                                <input type={"checkbox"} checked={t.isComplete} onChange={(e) => { updateTodoCompleted(e, index) }} className={"form-check-input"} />
                                <button type='button' className={`btn ${t.isComplete ? 'btn-danger' : 'btn-secondary'}`} onClick={(e) => { deleteTodo(index) }} >Delete</button>
                            </div>
                        );
                    })}
                </div>
            </form>
        </>
    );
}

export default TodoList;
//local imports
import { Layout } from "../components/Layout/Layout";
import { TodoEg } from "../components/TodoEgContainer/TodoEg";

const AllTodos = ({ dummyTodos }) => {

    return (
        <Layout>
            <TodoEg allTodos={dummyTodos} />
        </Layout>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const allTodos = await res.json();


    const modifiedTodos = allTodos.map(eachTodo => {
        return {
            todoId: eachTodo.id,
            todoName: eachTodo.title,
            completed: eachTodo.completed
        }
    })

    return {
        props: {
            dummyTodos: modifiedTodos
        }
    }
}

export default AllTodos;

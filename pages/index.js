//local imports
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/HomeContainer/Home";

//global state imports
import { useStateContextConsumer } from '../global-state-utils/globalStateContext';

const AllTodos = () => {
  const stateContext = useStateContextConsumer();

  return (
    <Layout>
      <Home allTodos={stateContext.globalState} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const allTodos = await res.json();


  const modifiedTodos = allTodos.slice(0, 10).map(eachTodo => {
    return {
      todoId: eachTodo.id,
      todoName: eachTodo.title,
      completed: eachTodo.completed
    }
  })

  return {
    props: {
      dummyTodos: allTodos
    }
  }
}

export default AllTodos;

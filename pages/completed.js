//local imports
import { Layout } from "../components/Layout/Layout";
import { CompletedTodos } from "../components/CompletedContainer/CompletedTodos";

//global state imports
import { useStateContextConsumer } from '../global-state-utils/globalStateContext';

const AllTodos = () => {

    const stateContext = useStateContextConsumer();

    return (
        <Layout>
            <CompletedTodos allTodos={stateContext.globalState} />
        </Layout>
    )
}

export default AllTodos;

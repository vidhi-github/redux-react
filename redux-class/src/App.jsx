import './App.css'
import Todo from "./components/todo.jsx";
import { Provider } from 'react-redux';
import {store} from "./app/store";
import AddForm from './components/AddForm.jsx';

function App() {

  return (
    <>
    <Provider store={store}>
    <Todo/>
    </Provider>
    </>
  )
}

export default App;

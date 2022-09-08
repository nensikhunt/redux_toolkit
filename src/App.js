import Api from './slices/Api';
import AddTodo from './Todo/AddTodo';
import Todos from './Todo/Todos';

function App() {
  
  return (
    <div className="App">
      {/* <Api /> */}
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;

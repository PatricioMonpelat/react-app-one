import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My To Dos</h1>
      <Todo text='param text 1'/>
      <Todo text='param text 2'/>
      <Todo text='param text 3'/>
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;

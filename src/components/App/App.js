import Form from "../Form/Form";
import UsersContainer from "../UsersContainer/UsersContainer";
import s from './style.module.css'

function App() {


  return (
    <div className={s.wrapper}>
     <Form/>
     <UsersContainer/>
    </div>
  );
}

export default App;

import './App.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import QuestionAns from './components/QuestionAnswer/QuestionAns';

function App() {
  return (
    <div className="App">
      <section className='grid grid-cols-4'>
        <Main></Main>
        <Aside></Aside>
      </section>

      <QuestionAns></QuestionAns>
    </div>
  );
}

export default App;

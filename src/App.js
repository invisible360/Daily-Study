import './App.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <section className='grid grid-cols-4 gap-5'>
        <Main></Main>
        <Aside></Aside>
      </section>
    </div>
  );
}

export default App;

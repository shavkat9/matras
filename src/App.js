import './App.css';
import Pages from './Pages/Pages';
import Form from './components/Form/Form';
import Main from './components/Main/Main';
import Category from './components/Category/Category';
import Section from './components/Section/Section';


function App() {
  return (
    <div className="App">
    < Pages />
    < Form />
    < Main />
    < Category />
    < Section />
    </div>
  );
}

export default App;

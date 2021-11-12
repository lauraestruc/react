import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {

  const style = {backgroundColor: 'black'}

  return (
    <>
      <div className="App" style= { style }>
        <NavBar />
      </div>
      <div>
        <ItemListContainer />
      </div>


    </>
  );
}

export default App;

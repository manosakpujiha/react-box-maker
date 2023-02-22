import './App.css';
import BoxList from './BoxList'

function App() {
  return (
    <div className="App">
      <form>
        <label>Height<input ></input></label>
        <label>Width<input></input></label>
        <label>Color<input></input></label>
        <button>Generate Box</button>
      </form>
      <BoxList/>
    </div>
  );
}

export default App;

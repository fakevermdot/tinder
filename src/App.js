import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    // Bem class naming convention
    <div className="app">
    <Header />
     <TinderCards />
     <SwipeButtons />
    </div>
  );
}

export default App;

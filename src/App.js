
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import KoreanPage from './KoreanPage';
import EnglishPage from './EnglishPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<KoreanPage />} />
        <Route path='/en' element={<EnglishPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import FirmDetailPage from './pages/FirmDetailPage/FirmDetailPage';
import FirmListDetailPage from './pages/FimListDetailPage/FirmListDetailPage';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search/" element={<SearchPage />} />
        <Route path="detail/:slug" element={<FirmDetailPage />} />
        <Route path="listDetail/:slug" element={<FirmListDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

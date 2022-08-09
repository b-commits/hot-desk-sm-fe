import { Header } from './components/Header';
import { DeskList } from './components/DeskList';
import { Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DeskList />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;

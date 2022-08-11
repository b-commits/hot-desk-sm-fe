import { Header } from './components/Header';
import { ReservationList } from './components/ReservationList';
import { Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ReservationList />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;

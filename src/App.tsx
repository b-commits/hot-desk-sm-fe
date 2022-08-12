import { Header } from './components/Header';
import { ReservationList } from './components/ReservationGrid/ReservationList';
import { Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import ClientPanel from './components/ClientPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ClientPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;

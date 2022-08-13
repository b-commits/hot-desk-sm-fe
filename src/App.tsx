import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectLocations } from './features/desk/redux/locationSlice';
import { getLocations } from './features/desk/api/locationApi';
import AdminPanel from './components/AdminPanel';
import ClientPanel from './components/ClientPanel';
import { selectReservations } from './features/desk/redux/reservationSlice';
import { selectDesks, selectStatus } from './features/desk/redux/deskSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {}
      <Routes>
        <Route path="/" element={<ClientPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;

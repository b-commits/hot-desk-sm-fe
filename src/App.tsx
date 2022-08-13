import { Header } from './components/Header';
import { ReservationList } from './components/ReservationGrid/ReservationList';
import { Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import { useEffect } from 'react';
import ClientPanel from './components/ClientPanel';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectLocations } from './features/desk/redux/locationSlice';
import { getLocations } from './features/desk/api/locationApi';

function App() {
  const dispatch = useAppDispatch();
  const locations = useAppSelector(selectLocations);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);
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

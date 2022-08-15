import { Header } from './shared/Header';
import { AdminPanel } from './places/AdminPanel';
import { ClientPanel } from './places/ClientPanel';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { getLocations } from './features/desk/api/locationApi';

function App() {
  const dispatch = useAppDispatch();

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

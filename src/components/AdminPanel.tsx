import { ReservationList } from './ReservationGrid/ReservationList';
import { LocationList } from './LocationList/LocationList';
import { DeskList } from './DeskList/DeskList';

const AdminPanel = () => {
  return (
    <section>
      <LocationList />
      <DeskList />
      <ReservationList />
    </section>
  );
};

export default AdminPanel;

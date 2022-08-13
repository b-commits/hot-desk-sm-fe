import { ReservationList } from './ReservationGrid/ReservationList';
import { LocationList } from './LocationList/LocationList';
import { DeskList } from './DeskList/DeskList';

const AdminPanel = () => {
  return (
    <section>
      <LocationList />
      <DeskList />
      <ReservationList variant="admin" />
    </section>
  );
};

export default AdminPanel;

/** @jsxImportSource @emotion/react */
import { ReservationList } from './ReservationList';
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

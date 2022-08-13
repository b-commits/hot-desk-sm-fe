import { ReservationList } from '../features/desk/components/ReservationGrid/ReservationList';
import { LocationList } from '../features/desk/components/LocationList/LocationList';
import { DeskList } from '../features/desk/components/DeskList/DeskList';

export const AdminPanel = () => {
  return (
    <section>
      <LocationList />
      <DeskList />
      <ReservationList variant="admin" />
    </section>
  );
};

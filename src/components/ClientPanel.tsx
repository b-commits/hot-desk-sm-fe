import { ReservationList } from './ReservationGrid/ReservationList';
import { DeskList } from './DeskList/DeskList';

const ClientPanel = () => {
  return (
    <section>
      <DeskList reservationVariant />
      <ReservationList />
    </section>
  );
};

export default ClientPanel;

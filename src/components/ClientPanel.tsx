import { ReservationList } from './ReservationGrid/ReservationList';
import { DeskList } from './DeskList/DeskList';

const ClientPanel = () => {
  return (
    <section>
      <DeskList reservationVariant />
      <ReservationList variant="user" />
    </section>
  );
};

export default ClientPanel;

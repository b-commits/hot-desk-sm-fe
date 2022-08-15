/** @jsxImportSource @emotion/react */
import { ReservationList } from '../features/desk/components/ReservationGrid/ReservationList';
import { DeskList } from '../features/desk/components/DeskList/DeskList';

export const ClientPanel = () => {
  return (
    <section css={{ marginTop: '100px' }}>
      <DeskList reservationVariant />
      <ReservationList variant="user" />
    </section>
  );
};

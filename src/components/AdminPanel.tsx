/** @jsxImportSource @emotion/react */
import { DeskList } from './DeskList';
import { LocationList } from './LocationList/LocationList';

const AdminPanel = () => {
  return (
    <section>
      <LocationList />
      <DeskList />
    </section>
  );
};

export default AdminPanel;

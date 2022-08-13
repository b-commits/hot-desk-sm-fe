import { useAppSelector } from '../../app/hooks';
import { Desk } from '../../features/desk/definitions/types';
import { selectLocationCityById } from '../../features/desk/redux/locationSlice';

interface Props {
  desk: Desk;
}

const DeskTableCell = ({ desk }: Props) => {
  const city = useAppSelector(selectLocationCityById(desk.locationId));
  return <div>{city}</div>;
};

export default DeskTableCell;

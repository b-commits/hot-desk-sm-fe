import { useAppSelector } from '../../../../app/hooks';
import { Desk } from '../../definitions/types';
import { selectLocationCityById } from '../../redux/locationSlice';

interface Props {
  desk: Desk;
}

const DeskTableCell = ({ desk }: Props) => {
  const city = useAppSelector(selectLocationCityById(desk.locationId));
  return <div>{city}</div>;
};

export default DeskTableCell;

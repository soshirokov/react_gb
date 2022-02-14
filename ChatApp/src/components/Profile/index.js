import './style.scss';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toggleShowName, setName } from '../../store/profile/actions';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../Form';


export default function Profile () {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  function setShowName (){
    dispatch(toggleShowName);
  }

  function setNewName(value) {
    dispatch(setName(value));
  }

  return(
  <div className="profile">
    <div className="profile__user">
      {showName && <div className="profile__name">My name is {name}</div>}
      <FormControlLabel control={<Checkbox />} onChange={setShowName} label="Show name" />
      <Form onSubmitCallback={setNewName} placeholder="Input new name" submitText="Set"/>
    </div>
  </div>
  );
}
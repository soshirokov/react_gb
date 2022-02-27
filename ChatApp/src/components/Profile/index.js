import './style.scss';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toggleShowName, initNameTracking, getNameFB } from '../../store/profile/actions';
import { connect } from 'react-redux';
import { selectShowName, selectName } from '../../store/profile/selectors';
import { Form } from '../Form';
import { set } from 'firebase/database';
import { auth, profileRef } from '../../utils/firebase';
import { useEffect } from 'react';


const ProfileToConnect = ({showName, name, changeShowName, nameTracking, getName}) => {
  const userId = auth.currentUser.uid;
  
  function setShowName (){
    changeShowName();
  }

  function setNewName(value) {
    set(profileRef(userId), {
        name: value,
        id: userId
    });
  }

  useEffect(() => {
    getName(userId);
    nameTracking(userId);
  }, [nameTracking, userId, getName])

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

const mapStateToProps = (state) => ({
  showName: selectShowName(state),
  name: selectName(state),
});

const mapDispatchToProps = {
  changeShowName: () => toggleShowName,
  nameTracking: initNameTracking,
  getName: getNameFB
};

export const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileToConnect);
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeCurrentUser } from '../../Slices/authSlice';
import { Navigate } from 'react-router-dom';
const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(removeCurrentUser());
        Navigate('/login');
    }
  return (
    <div>
      {currentUser ? (
        <p>Welcome, {currentUser.username}!</p>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
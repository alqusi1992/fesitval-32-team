import { useValue } from '../../../context/globalContext';
import { useEffect, useState } from 'react';
import decode from 'jwt-decode';
import { logout, setUser } from '../../../actions/userActions';
import { getLocalStorage } from '../../../utils/localStorage';
import { getOrders } from '../../../actions/profileAction';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const {
    state: { user },
    dispatch,
  } = useValue();

  if (user?.token) {
    const decodedToken = decode(user.token);
    // if token has expired
    if (decodedToken.exp * 1000 < new Date().getTime()) logout(dispatch);
  }

  useEffect(() => {
    if (!user?.token) {
      const userProfile = getLocalStorage('profile');
      if (userProfile?.token) {
        setUser(userProfile, dispatch);
      }
    }

    const fetchOrders = async () => {
      const userOrders = await getOrders(user);
      setOrders(userOrders);
    };

    fetchOrders();
  }, [dispatch]);

  return <div>orders list</div>;
};

export default Profile;

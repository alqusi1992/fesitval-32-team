import { useValue } from '../../../context/globalContext';
import { useEffect, useState } from 'react';
import decode from 'jwt-decode';
import { logout, setUser } from '../../../actions/userActions';
import { getLocalStorage } from '../../../utils/localStorage';
import { getOrders } from '../../../actions/profileAction';
import { Order } from './components/Order';
import { Grid } from '@mui/material';

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
      const response = await getOrders(user);
      if (response.success) {
        setOrders(response.result);
      }
    };

    fetchOrders();
  }, [dispatch, user]);
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={11} md={6}>
        {!orders.length ? (
          <div>you don't have any orders</div>
        ) : (
          orders.map((order) => <Order key={order._id} order={order} />)
        )}
      </Grid>
    </Grid>
  );
};

export default Profile;

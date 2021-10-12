import { useValue } from '../../../context/globalContext';
import { useEffect, useState } from 'react';
import { getOrders } from '../../../actions/profileAction';
import { Order } from './components/Order';
import { Grid } from '@mui/material';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const {
    state: { user },
    dispatch,
  } = useValue();

  useEffect(() => {
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

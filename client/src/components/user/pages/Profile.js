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
      const response = await getOrders(user, dispatch);
      if (response.success) {
        setOrders(response.result);
      }
    };

    fetchOrders();
  }, [dispatch, user]);

  return (
    <Grid>
      {!orders.length ? (
        <div style={{ textAlign: 'center' }}>you don't have any orders</div>
      ) : (
        orders.map((order) => <Order key={order._id} order={order} />)
      )}
    </Grid>
  );
};

export default Profile;

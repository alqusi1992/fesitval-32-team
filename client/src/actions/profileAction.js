const url = process.env.REACT_APP_SERVER_URL;

export const getOrders = async (user) => {
  try {
    const response = await fetch(url + '/order', {
      headers: { authorization: `Bearer ${user?.token}` },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, msg: 'Something went wrong!' };
  }
};

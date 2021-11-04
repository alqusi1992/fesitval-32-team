import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { saveAs } from 'file-saver';

export const DownloadButton = ({ order }) => {
  const [loading, setLoading] = useState(false);

  const downloadOrder = async (order) => {
    setLoading(true);
    const { email, tickets } = order;
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/pdf/create`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ orderId: order._id, email, tickets }),
      }
    );

    const blob = await response.blob();
    if (blob) {
      setLoading(false);
    }
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    saveAs(pdfBlob, `${order._id}.pdf`);
  };

  return (
    <>
      <LoadingButton
        sx={{
          backgroundColor: '#ccc',
          color: '#000',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
          },
        }}
        endIcon={<FileDownloadIcon />}
        onClick={() => downloadOrder(order)}
        loading={loading}
        loadingPosition='end'
        variant='contained'
      >
        Download order
      </LoadingButton>
    </>
  );
};

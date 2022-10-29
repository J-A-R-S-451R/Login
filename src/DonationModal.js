import PaymentIcon from '@mui/icons-material/Payment';
import { Card, CardActions, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
  outline: 'none',
  textAlign: 'center'
};

function DonationModal({ inputDonorName, modalOpen, onModalClose, fundraiser }) {
  const [donationAmount, setDonationAmount] = useState("1.00");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [donorName, setDonorName] = useState(inputDonorName ?? "");

    return (
      <div>
        <Modal
          open={modalOpen}
          onClose={onModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            <PaymentIcon sx={{fontSize: "64px", backgroundColor: "#1976d2", padding: "8px", borderRadius: "100%", color: "white"}}></PaymentIcon>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Donate to {fundraiser.title}
            </Typography>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
              <Input
                id="standard-adornment-amount"
                value={donationAmount}
                onChange={(e)=>setDonationAmount(e.target.value)}
                name="donationAmount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Name</InputLabel>
              <Input
                id="standard-adornment-amount"
                value={donorName}
                onChange={(e)=>setDonorName(e.target.value)}
                name="donorName"
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Credit Card Number</InputLabel>
              <Input
                id="standard-adornment-amount"
                value={creditCardNumber}
                onChange={(e)=>setCreditCardNumber(e.target.value)}
                name="creditCardNumber"
              />
            </FormControl>


            <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
              Thank you for contributing to the cause
            </Typography>
            <CardActions>
            <Button size="medium" variant="contained">Donate</Button>
            <Button size="medium" onClick={onModalClose}>Cancel</Button>
          </CardActions>
          </Card>
        </Modal>
      </div>
    );
}

export default DonationModal
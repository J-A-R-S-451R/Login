import PaymentIcon from '@mui/icons-material/Payment';
import { LoadingButton } from '@mui/lab';
import { Card, CardActions, InputAdornment, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

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
              Donate to {fundraiser.name}
            </Typography>

            <form> 
              <TextField
                id="standard-adornment-amount"
                margin="normal"
                required
                fullWidth
                name="donationAmount"
                label="Amount"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      $
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="donorName"
                label="Name"
                id="donorName"
                autoComplete="given-name"
                variant="standard"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="creditCardNumber"
                label="Credit Card Number"
                id="creditCardNumber"
                variant="standard"
              />

              <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
                  Thank you for contributing to the cause
              </Typography>

              <CardActions>
                <LoadingButton type="submit" size="medium" variant="contained">Donate</LoadingButton>
                <Button size="medium" onClick={onModalClose}>Cancel</Button>
              </CardActions>
            </form>
          </Card>
        </Modal>
      </div>
    );
}

export default DonationModal
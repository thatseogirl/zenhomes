import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid black",
  boxShadow: 24,
  p: 4,
};

export default function AddressForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container component='main' maxWidth='sm' sx={{ mb: 4 }}
    // Can be added some background image as well
    >
      <Paper
        variant='outlined'
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Grid container mt={"16px"} justifyContent={"center"}>
          <Typography variant='h6' gutterBottom>
            Create a property
          </Typography>
          <Grid
            container
            spacing={3}
            xs={12}
            alignItems={"center"}
            justifyContent={"center"}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='name'
                name='name'
                label='Property name'
                fullWidth
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='price'
                name='price'
                label='Price'
                fullWidth
                autoComplete='price'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id='address1'
                name='address1'
                label='Address line 1'
                fullWidth
                autoComplete='shipping address-line1'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='address2'
                name='address2'
                label='Address line 2'
                fullWidth
                autoComplete='shipping address-line2'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='city'
                name='city'
                label='City'
                fullWidth
                autoComplete='shipping address-level2'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='state'
                name='state'
                label='State/Province/Region'
                fullWidth
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='zip'
                name='zip'
                label='Zip / Postal code'
                fullWidth
                autoComplete='shipping postal-code'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='country'
                name='country'
                label='Country'
                fullWidth
                autoComplete='shipping country'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleOpen}
                sx={{
                  border: "2px dashed lightgray",
                  p: 2,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}>
                Drop zone
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <Box sx={style}>
                  <TextField
                    type={"file"}
                    id='modal-modal-description'
                    sx={{ mt: 2 }}
                    textAlign={"center"}
                    variant='outlined'
                  />
                  <Button
                  // onClick={handleFileSubmit}
                    type='button'
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}>
                    Submit
                  </Button>
                </Box>
              </Modal>
            </Grid>
            <Button
              type='button'
              variant='contained'
              sx={{ mt: 3, mb: 2, width: "50%" }}>
              Add a property
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

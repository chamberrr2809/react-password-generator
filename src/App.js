import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import randomstring from 'randomstring';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function MyComponent() {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    document.title = 'React Password Generator';
  });

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const val = randomstring.generate(20);

  const longpw = randomstring.generate(50);

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}>
        DISMISS
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      ></IconButton>
    </React.Fragment>
  );

  const handleKlik = () => {
    setValue(longpw);
    setOpen(true);
  };

  return (
    <div>
      <TextField
        id="filled-read-only-input"
        label="Hasilnya"
        value={value}
        className="input"
        name="result"
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
      />
      <CopyToClipboard text={longpw}>
        <Button onClick={handleKlik} className="btn" variant="contained">
          Acak
        </Button>
      </CopyToClipboard>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Password Copied to Clipboard"
        action={action}
      />
    </div>
  );
}

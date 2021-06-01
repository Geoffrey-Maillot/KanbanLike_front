// Import react
import React from 'react';

// Import propTypes
import PropTypes from 'prop-types';

// Import material-ui
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

// Component -->
const SnackBar = ({
  open, // Booléen
  handlerClose, // closeFunction
  message, // Message in SnackBar
  typeColor, // Style of Snackbar
}) => (
  <Snackbar
    autoHideDuration={4000}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    onClose={handlerClose}
    open={open}
  >
    <Alert severity={typeColor} onClose={handlerClose}>
      {message}
    </Alert>
  </Snackbar>
);

// PropTypes -->
SnackBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handlerClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  typeColor: PropTypes.string.isRequired,
};

// Export -->
export default SnackBar;

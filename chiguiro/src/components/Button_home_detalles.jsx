import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Button_home_detalles = ({ description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica si es dispositivo móvil

  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        variant="outlined"
        color="error"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        aria-describedby={id}
      >
        Detalles
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        disableAutoFocus
        disableScrollLock
        sx={{
          mt: isMobile ? 1 : 2, // Ajusta el margen superior para móviles
          ml: isMobile ? 2 : 5, // Ajusta el margen izquierdo para móviles
          maxWidth: isMobile ? '80vw' : 'none', // Ajusta el ancho máximo para móviles
          width: isMobile ? 'auto' : 'initial', // Ajusta el ancho para móviles
        }}
      >
        <div style={{ margin: '10px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
          <p>{description}</p>
        </div>
      </Popover>
    </>
  );
};

export default Button_home_detalles;

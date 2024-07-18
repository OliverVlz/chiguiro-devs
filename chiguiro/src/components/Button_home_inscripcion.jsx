import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Button_home_inscripcion = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (url) => {
    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleClick}
        aria-controls="button-home-menu"
        aria-haspopup="true"
        sx={{
          backgroundColor: '#FF0000', // Color de fondo en hexadecimal
          color: '#FFFFFF !important', // Color de la letra en hexadecimal
          padding: '7.85px 23px',
          '&:hover': {
            backgroundColor: 'rgba(255, 0, 0, 0.726)', // Color de fondo al pasar el mouse en hexadecimal
          }
        }}
      >
        Inscripción
      </Button>
      <Menu
        id="button-home-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        disableAutoFocus
        disableScrollLock
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={() => handleItemClick('https://www.youtube.com')}>
          Categoria Avanzado
        </MenuItem>
        <MenuItem onClick={() => handleItemClick('https://www.otro-enlace.com')}>
          Categoria Junior
        </MenuItem>
        {/* Agrega más elementos MenuItem según sea necesario */}
      </Menu>
    </>
  );
};

export default Button_home_inscripcion;

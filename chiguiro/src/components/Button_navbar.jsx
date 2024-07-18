import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 


const Button_navbar = () => {
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
        variant="outlined"
        color="error"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        aria-controls="button-home-menu"
        aria-haspopup="true"
      >
        Inscripción!!
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

export default Button_navbar;

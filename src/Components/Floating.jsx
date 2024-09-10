import React, { useState, useEffect } from 'react';
import Modal1 from '../Components/Modal';
import './Floating.css';
import { Typography } from '@mui/material';

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000); // Aparecerá después de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    localStorage.setItem('buttonClicked', 'true');
  };

  useEffect(() => {
    if (localStorage.getItem('buttonClicked')) {
      setShowButton(false);
    }
  }, []);
  

  return (
    <>
      {showButton && (
        <div className="floating-button" onClick={handleButtonClick}>
          ⚠️
        </div>
      )}
      <Modal1 isOpen={showModal} onClose={handleCloseModal} />
    </>
  );
};

export default FloatingButton;

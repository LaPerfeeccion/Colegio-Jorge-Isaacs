import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Typography } from "@mui/material";

export default function Modal1() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')

  const backdrops = [ "blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button  
            key={b}
            variant="flat" 
            color="primary" 
            onPress={() => handleOpen(b)}
            className="capitalize"
          >
           {b}
          </Button>
        ))}  
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Somos</ModalHeader>
              <ModalBody>
                <Typography sx={{fontFamily: "Dancing Script"}} variant="h6"> 
                El Colegio Jorge Isaacs propone formar jóvenes con una conciencia clara y recta como el resultado de la práctica de valores de tipo vital, intelectual, ético, estético, social, político y utilitario como fundamento de la vida del individuo, que también les permitan capacidad de juicio para apreciar los valores culturales, formativos y vocacionales en las otras personas.
                </Typography>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

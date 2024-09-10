import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { Stack, Typography } from '@mui/material';

export default function Modal1({ isOpen, onClose }) {
  return (
    <Modal
      backdrop="blur"
      size="full"
      isOpen={isOpen}
      onClose={onClose}
      className="modal-container" // Puedes agregar una clase para manejar el estilo del modal
    >
      <ModalContent>
        {/* Stack principal del modal */}
        <Stack sx={{ backgroundColor: 'White', padding: '20px' }}>
          {' '}
          {/* Aplicamos el fondo aquí */}
          {/* Header del modal */}
          <ModalHeader>
            <Typography variant="h1" sx={{ fontFamily: 'Dancing Script', textAlign: 'center', color: 'black' }}>
              Consejos y seguridad
            </Typography>
          </ModalHeader>
          {/* Cuerpo del modal */}
          <ModalBody>
            <Stack sx={{ flexDirection: 'row', gap: '20px' }}>
              <Typography variant="h5" sx={{ fontFamily: 'Dancing Script', color: 'black' }}>
                El Colegio Jorge Isaacs propone formar jóvenes con una conciencia clara y recta como el resultado de la
                práctica de valores de tipo vital, intelectual, ético, estético, social, político y utilitario como
                fundamento de la vida del individuo, que también les permitan capacidad de juicio para apreciar los
                valores culturales, formativos y vocacionales en las otras personas.
              </Typography>
            </Stack>

            {/* Consejos y Seguridad */}
            <Stack justifyContent={'space-around'} sx={{ maxWidth: '100%', flexDirection: 'row', gap: '20px' }}>
              <Stack sx={{ gap: '10px', color: 'black', padding: '10px', borderRadius: '10px', backgroundColor:"#caf6f4" }}>
                <Typography textAlign={'center'} variant="h5" sx={{ fontFamily: 'Dancing Script'}}>
                  Consejos
                </Typography>
                  <li>
                    Es fundamental tener un horario de estudio bien definido. Establecer horas específicas para estudiar
                    y descansar crea un hábito y reduce la procrastinación.
                  </li>
                  <li>
                    Técnicas de Estudio: Promover métodos como el método Pomodoro o la técnica Feynman ayuda a una
                    comprensión más profunda.
                  </li>

              </Stack>

              {/* Sección de seguridad */}
              <Stack sx={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '10px' }}>
                <Typography
                  variant="h5"
                  textAlign={'center'}
                  sx={{
                    fontFamily: 'Dancing Script',
                    backgroundColor: 'gold',
                    color: 'black',
                    padding: '2px',
                    borderRadius: '5px'
                  }}
                >
                  Seguridad
                </Typography>
                  <li>
                    Generamos conciencia sobre el acoso en línea. Fomentamos la denuncia de situaciones de bullying y el
                    uso de herramientas de control parental.
                  </li>
                  <li>
                    Contamos con protocolos de emergencia en las escuelas, los estudiantes conocerán las rutas de
                    evacuación y tendrán simulacros regulares.
                  </li>
              </Stack>
            </Stack>
          </ModalBody>
          {/* Footer del modal */}
          <ModalFooter>
            <Stack sx={{justifyContent:"center", alignItems:"center", flexDirection:"row", gap:"40px"}}>
              <img src="./public/imagenes/20.jpeg" width={"280px"} alt="" />
           <img src="./public/imagenes/21.jpeg" width={"280px"} alt="" />
           <img src="./public/imagenes/22.jpeg" width={"280px"} alt="" />
           <img src="./public/imagenes/23.jpeg" width={"280px"} alt="" />
            </Stack>
           
          </ModalFooter>
        </Stack>
      </ModalContent>
    </Modal>
  );
}

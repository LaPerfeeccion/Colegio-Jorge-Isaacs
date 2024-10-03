import React from 'react';
import { Card, CardHeader, Image, CardFooter, Button } from '@nextui-org/react';
import './cover.css'; // Asegúrate de que este archivo incluya las clases CSS modificadas
import { Stack } from '@mui/material';

export default function Cover() {
  return (
    <div className="prin">
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
       
        <Card className="col-span-12 sm:col-span-4 h-[300px] card-overlay">
          
          <CardHeader className="absolute z-10 top-1 flex-col card-content !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Dia del Niño</p>
            <h4 className="text-white font-medium text-large">Decoración</h4>
          </CardHeader>

          <Image
            removeWrapper
            alt="Card background"
            className="z-3 w-full h-full object-cover"
            src="./public/imagenes/P1.png"
            onClick={() =>
              window.open(
                'https://www.instagram.com/reel/C6REUaPrudj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              )
            }
          />
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[300px] card-overlay">
          <CardHeader className="absolute z-10 top-1 flex-col card-content !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Imnaguración de los juegos</p>
            <h4 className="text-white font-medium text-large">Intercursos</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="./public/imagenes/P3.png"
            onClick={() =>
              window.open(
                'https://www.instagram.com/reel/C4o5OMMtFhF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              )
            }
          />
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[300px] card-overlay">
          <CardHeader className="absolute z-10 top-1 flex-col card-content !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Valores</p>
            <h4 className="text-white font-medium text-large">Tren de los valores</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="./public/imagenes/P2.png"
            onClick={() =>
              window.open(
                'https://www.instagram.com/reel/C4d95zmP57W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              )
            }
          />
        </Card>

        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 card-overlay">
          <CardHeader className="absolute z-10 top-1 flex-col card-content items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Carnaval de Barranquilla</p>
            <h4 className="text-white font-medium text-2xl">Baile del carnaval</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="./public/imagenes/P5.png"
            onClick={() =>
              window.open(
                'https://www.instagram.com/reel/C3rEA7XLi67/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              )
            }
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white text-tiny">Instagram</p>
              <p className="text-white text-tiny">Rell</p>
            </div>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 card-overlay">
          <CardHeader className="absolute z-10 top-1 flex-col card-content items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Dia</p>
            <h4 className="text-white/90 font-medium text-xl">de la creatividad</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="./public/imagenes/P4.png"
            onClick={() =>
              window.open(
                'https://www.instagram.com/reel/C_UItBot9Ld/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              )
            }
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
              <p className="text-white text-tiny">Instagram</p>
              <p className="text-white text-tiny">Rell</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

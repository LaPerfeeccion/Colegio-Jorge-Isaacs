import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import './cover.css';
import { Stack } from '@mui/material';

export default function Cover() {
  return (
    <div className="prin">
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Dia del Niño</p>
            <h4 className="text-white font-medium text-large">Decoración</h4>
          </CardHeader>

          <Image
            removeWrapper
            alt="Card background"
            className="z-3 w-full h-full object-cover"
            src="https://cdn.discordapp.com/attachments/875056103157796865/1277100164359786546/pixelcut-export.png?ex=66cbefb6&is=66ca9e36&hm=f7e60ab66367a031b241c7e91d8ed570788f4546b1e9219ac7284b0c05e400ed&"
            onClick={() =>
              window.open(
                'https://www.instagram.com/reel/C6REUaPrudj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              )
            }
          />
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
            <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://cdn.discordapp.com/attachments/875056103157796865/1277109197783302164/image_5.png?ex=66cbf820&is=66caa6a0&hm=089427af853644a20315e11afa80be2e8d80ba9b23f3a581631905896fba0329&"
            onClick={() =>
              window.open(
                'https://www.instagram.com/reel/C4o5OMMtFhF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              )
            }
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
            <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://cdn.discordapp.com/attachments/875056103157796865/1277113186910212116/image_6.png?ex=66cbfbd7&is=66caaa57&hm=09bd5459e23e49defcdc5f90b924fce3c1254b966500dbaa551ca630070a6003&"
            onClick={() =>
              window.open(
                'https://www.instagram.com/reel/C4d95zmP57W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              )
            }
          />
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://nextui.org/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

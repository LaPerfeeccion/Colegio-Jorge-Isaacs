import {Image} from "@nextui-org/react";

export default function Foto1() {
  return (
    <Image
      isBlurred
      width={240}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      className="m-5"
    />
  );
}

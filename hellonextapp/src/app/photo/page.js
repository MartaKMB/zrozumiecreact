import Image from "next/image";
import summersale from "../../assets/summersale.jpg";

export default function Photo() {
  return <Image src={summersale} alt="summer sale" placeholder="blur" />;
}

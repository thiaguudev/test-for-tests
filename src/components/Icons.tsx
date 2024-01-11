import Image from "next/image";

export const Icons = {
  logo: () => (
    <Image
      src="/logo.png"
      alt="Logo Survey Apoli"
      width={100}
      height={100}
      priority={true}
    />
  ),
};

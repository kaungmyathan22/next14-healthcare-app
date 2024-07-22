import Image from "next/image";

export function LogoImage({}) {
  return (
    <div className="flex flex-row items-center mb-12 gap-3">
      <Image
        src="/assets/icons/logo-icon.svg"
        height={1000}
        width={1000}
        alt="patient"
        className="h-10 w-fit"
      />
      <p className="text-2xl font-bold">Medicare</p>
    </div>
  );
}

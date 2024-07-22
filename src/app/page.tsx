import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <LogoImage />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Medicare
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}

function LogoImage({}) {
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

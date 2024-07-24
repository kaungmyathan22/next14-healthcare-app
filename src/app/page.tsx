import Mounted from "@/components/Mounted";
import { PasskeyModal } from "@/components/PasskeyModal";
import { PatientForm } from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import { LogoImage } from "../components/LogoImage";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";
  return (
    <Mounted>
      <div className="flex h-screen max-h-screen">
        {isAdmin && <PasskeyModal />}
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
    </Mounted>
  );
}

import { LogoImage } from "@/components/LogoImage";
import Mounted from "@/components/Mounted";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

export default async function NewAppointmentPage({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <Mounted>
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[860px] flex-1 justify-between">
            <LogoImage />
            <AppointmentForm
              type="create"
              userId={userId}
              patientId={patient.$id}
            />
            <p className="copyright mt-10 py-12">© 2024 Medicare</p>
          </div>
        </section>
        <Image
          src="/assets/images/appointment-img.png"
          height={1500}
          width={1500}
          alt="appointment"
          className="side-img max-w-[390px] bg-bottom"
        />
      </div>
    </Mounted>
  );
}

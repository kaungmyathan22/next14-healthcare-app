import { LogoImage } from "@/components/LogoImage";
import Mounted from "@/components/Mounted";
import Link from "next/link";

const Admin = () => {
  return (
    <Mounted>
      <div className="mx-auto flex max-w-7xl flex-col space-y-14">
        <header className="admin-header">
          <Link href="/" className="cursor-pointer">
            <LogoImage />
          </Link>

          <p className="text-16-semibold">Admin Dashboard</p>
        </header>

        <main className="admin-main">
          <section className="w-full space-y-4">
            <h1 className="header">Welcome 👋</h1>
            <p className="text-dark-700">
              Start the day with managing new appointments
            </p>
          </section>

          <section className="admin-stat"></section>
        </main>
      </div>
    </Mounted>
  );
};

export default Admin;

import { LoginForm } from "@/components/forms/login_form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-5 bg-[#884dee10]">
      <div className="w-full flex h-full justify-center md:justify-start  ">
        <div className="hidden max-w-900 w-4/6 h-full md:flex justify-center items-center ">
          <div className="w-full h-full  bg-[#884dee] rounded-3xl p-5 flex justify-center">
            <Image
              className="w-3/4 rounded-none"
              width={1000}
              height={1000}
              src={'/svg/grafico_login.svg'}
              alt="Imagen del login"
            />
          </div>
        </div>
        <aside className="w-full md:w-2/6 h-full flex  justify-center items-center">

          <LoginForm />

        </aside>
      </div>
    </main>
  );
}

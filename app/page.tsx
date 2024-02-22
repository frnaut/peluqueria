import { LoginForm } from "@/components/forms/login_form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <div className="w-full flex h-full">
        <div className="w-4/6 h-full">
          <Image
            className="object-cover w-full h-full"
            layout="responsive"
            width={100}
            height={100}
            src={'/images/login_image.jpg'}
            alt="Imagen login"
            objectFit="cover"
          />
        </div>
        <aside className="w-2/6 h-full flex  justify-center items-center">

          <LoginForm />

        </aside>
      </div>
    </main>
  );
}

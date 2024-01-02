import { LuMail } from "react-icons/lu";
import { BiKey } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import InputField from "./InputField";
import ButtonSubmit from "./ButtonSubmit";

export default function FormLogin() {
  return (
    <>
      <div className=" flex flex-col justify-center items-stretch min-h-screen w-full sm:px-4 md:pl-14 xl:pl-36">
        <h1 className="text-5xl font-bold mb-20 text-center"> Registrasi<br /> Akun Catatan</h1>
        <form className="flex flex-col gap-6">
          <InputField
            name="name"
            label="Nama"
            type="text"
            icon={<FaRegAddressCard size="1rem" className="text-gray-400" />}
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            icon={<LuMail size="1rem" className="text-gray-400" />}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            icon={<BiKey size="1rem" className="text-gray-400" />}
          />
          <InputField
            name="password-confirm"
            label="Konfirmasi Password"
            type="password"
            icon={<MdPassword size="1rem" className="text-gray-400" />}
          />

          <ButtonSubmit btnName="Registrasi" />
        </form>
        
      </div>
    </>
  );
}

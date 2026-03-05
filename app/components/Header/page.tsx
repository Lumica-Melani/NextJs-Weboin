import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <header className=" flex gap-30 items-center w-full bg-[var(--b1)]/70 backdrop-blur-md shadow-lg shadow-black/20">
      <Image
        src="/Logo-nxtJs.png"
        alt="Logo of the brand"
        width={100}
        height={100}
        priority
        className="object-contain scale-150 object-center"
      />
      {/* <h2 className=" text-xl font-bold relative">
          Web<span className=" text-[var(--a)]">Craft</span>
        </h2> */}
      <div className="flex items-center gap-9">
        <h2 className="text-l font-bold text-[var(--bc)]">Services</h2>
        <h2 className="text-l font-bold text-[var(--bc)]">Portfolio</h2>
        <h2 className="text-l font-bold text-[var(--bc)]">Contact</h2>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;

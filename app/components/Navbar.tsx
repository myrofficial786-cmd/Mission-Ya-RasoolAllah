"use client";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
   const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#081c15]/90 backdrop-blur-md text-white border-b border-yellow-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       <Link
  href="/"
  className="flex items-center gap-3 hover:opacity-90 transition"
>
  <Image
  src="/logo.jpeg"
  alt="Mission Ya RasoolAllah Logo"
  width={52}
  height={52}
  className="rounded-full object-cover"
  priority
/>

  <div>
    <h1 className="text-xl font-bold text-yellow-400 leading-tight">
      Mission Ya RasoolAllah ﷺ
    </h1>

    <p className="text-xs text-gray-300">
      Serving the Ummah
    </p>
  </div>
</Link>

        <ul className="hidden md:flex gap-8">
          <li>
  <button
  onClick={() => scrollToSection("home")}
  className="hover:text-yellow-400 cursor-pointer"
>
  Home
</button>
</li>
          <li>
  <button
  onClick={() => scrollToSection("about")}
  className="hover:text-yellow-400 cursor-pointer"
>
  About
</button>
</li>
          <li>
  <button
  onClick={() => scrollToSection("programs")}
  className="hover:text-yellow-400 cursor-pointer"
>
  Programs
</button>
</li>
          <li>
  <button
  onClick={() => scrollToSection("gallery")}
  className="hover:text-yellow-400 cursor-pointer"
>
  Gallery
</button>
</li>
          <li>
 <button
  onClick={() => scrollToSection("contact")}
  className="hover:text-yellow-400 cursor-pointer"
>
  Contact
</button>
</li>
        </ul>

        <Link
  href="/donate"
  className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
>
  Donate
</Link>
      </div>
    </nav>
  );
}
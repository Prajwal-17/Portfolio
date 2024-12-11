import Navbar from "./components/Navbar"
import Coding from "../src/assets/Icons/coding.svg"
import Github from "../src/assets/Icons/github.svg"
import LinkedIn from "../src/assets/Icons/linkedin.svg"
import Mail from "../src/assets/Icons/mail.svg"
import X from "../src/assets/Icons/x.svg"
import { FloatingDock } from "./components/ui/floating-dock"

const allLinks = [
  {
    title: "Github",
    icon: <img src={Github} alt="github" />,
    href: "https://github.com/Prajwal-17",
  },
  {
    title: "Linkedin",
    icon: <img src={LinkedIn} alt="linkedin" />,
    href: "https://www.linkedin.com/in/prajwal-k-836632264/",
  },
  {
    title: "Mail",
    icon: <img src={Mail} alt="mail" />,
    href: "google.com",
  },
  {
    title: "X",
    icon: <img src={X} alt="x" />,
    href: "https://x.com/Prajwal__17__"
  }
];

const App = () => {
  return (
    <main className="min-h-screen">

      <Navbar />

      <div className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center relative">
        <div className="mx-32 px-10 flex flex-col justify-center items-center gap-6 -translate-y-10">
          <div className="w-full text-center text-3xl font-epilogue">
            Hello, I'm
          </div>
          <div className="w-full text-center font-epilogue font-bold text-7xl">
            Prajwal
          </div>
          <div className="w-full text-center text-neutral-500 text-2xl tracking-widest leading-10 font-hind">
            I'm a full-stack web developer with a passion for crafting digital experiences.With a strong foundation in JavaScript I'm proficient in a wide range of technologies, React, and Next.js for frontend development. On the backend, I'm well versed with databases such as PostgreSQL and MongoDB, as well as frameworks like Express.js to build robust and scalable APIs.
          </div>
          <div className="h-20 w-32">
            <img src={Coding} />
          </div>
          <FloatingDock items={allLinks} />
        </div>
      </div>

    </main>
  );
};


export default App
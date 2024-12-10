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
    <main>

      <Navbar />

      <div>
        <div className="  mx-32 px-10 font-hind h-[calc(100vh-10rem)] flex flex-col justify-center items-center space-y-7">
          <div className="w-full text-center text-3xl">
            Hello , I'm
          </div>
          <div className="w-full text-center font-epilogue font-bold text-7xl">
            Prajwal
          </div>
          <div className="w-full text-center text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum explicabo amet est adipisci eveniet earum ullam, voluptates, beatae quia blanditiis veniam saepe doloribus? Soluta repellat architecto ad quae fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptas itaque. Ullam quia, cum incidunt in quod illum laborum possimus, aliquid sint, eius architecto sequi aliquam modi quam placeat mollitia!
          </div>
          <div className="h-20 w-32">
            <img src={Coding} />
          </div>
        <FloatingDock items={allLinks} />
        </div>
      </div>

    </main>
  )
}

export default App
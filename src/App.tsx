import Navbar from "./Components/Navbar"
import Coding from "../src/assets/Icons/coding.svg"
import Github from "../src/assets/Icons/github.svg"
import LinkedIn from "../src/assets/Icons/linkedin.svg"
import Mail from "../src/assets/Icons/mail.svg"
import X from "../src/assets/Icons/x.svg"

const App = () => {
  return (
    <main>

      <Navbar />

      <div>
        <div className="  mx-32 px-10 font-hind h-[calc(100vh-10rem)] flex flex-col justify-center items-center space-y-10">
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
          <div className="">
            <div className="flex justify-center items-centers gap-5 bg-neutral-200/60 px-4 py-4 rounded-3xl">
              <a href="" className="hover:cursor-pointer ">
                <img src={Github} alt="" className="size-7  text-neutral-500" />
              </a>
              <a href="" className="hover:cursor-pointer">
                <img src={Mail} alt="" className="size-7" />
              </a>
              <a href="" className="hover:cursor-pointer">
                <img src={X} alt="" className="size-7" />
              </a>
              <a href="" className="hover:cursor-pointer">
                <img src={LinkedIn} alt="" className="size-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default App
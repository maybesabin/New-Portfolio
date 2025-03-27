import About from "./components/About"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

const App = () => {
  return (
    <div className="dark:bg-zinc-900 dark:text-zinc-50 w-full min-h-screen md:py-[3vh] py-10 flex items-start justify-center">
      <div className="lg:w-[50rem] w-full lg:px-0 px-6 h-full flex flex-col gap-4">
        <Header />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  )
}

export default App
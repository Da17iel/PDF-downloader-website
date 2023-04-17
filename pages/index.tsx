import NavBar from "./Components/NavBar";
import Title from "./Components/Landing/Title";
import SubSection from "./Components/Landing/SubSection";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <NavBar />
        <Title />
        <SubSection />
      </div>
    </>
  )
}

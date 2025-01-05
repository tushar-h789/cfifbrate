import About from "./_components/_section/About";
import Celebrate from "./_components/_section/Celebrate";
import Featured from "./_components/_section/Featured";
import Navbar from "./_components/_section/Navbar";
import Partners from "./_components/_section/Partners";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Celebrate/>
      <Featured/>
      <About/>
      <Partners/>
    </div>
  );
}

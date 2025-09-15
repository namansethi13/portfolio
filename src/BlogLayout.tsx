import { Outlet } from "react-router-dom";
import Footer from './components/Footer'
export default function BlogLayout() {
  return (
    < >
    <section className='flex relative flex-col items-center justify-center overflow-x-hidden bg-linear-to-r from-[#0A0A0A] via-[#252525] to-[#0A0A0A] pb-20 lg:pb-0'>
    <div className="w-full h-full max-w-[1600px] flex items-center flex-col">
      <Outlet />
    </div>
      <Footer/>
    
    </section>
    </>
  );
}
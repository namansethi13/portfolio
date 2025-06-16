import { Outlet } from "react-router-dom";
import Footer from './components/Footer'
export default function BlogLayout() {
  return (
    < >
    <section className='flex relative flex-col items-center justify-center overflow-x-hidden bg-linear-to-r from-zinc-900 via-stone-800 to-zinc-900 pb-20 lg:pb-0'>
    <div className="w-full h-full max-w-[1600px] flex items-center flex-col">
      <Outlet />
      <Footer/>
    </div>
    
    </section>
    </>
  );
}
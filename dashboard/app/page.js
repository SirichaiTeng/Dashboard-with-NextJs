
import Carousel from "./components/carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
export default function Home() {

  const Bootstrap = dynamic(() => import('../lib/bootstrap'), { ssr: false });
  useEffect(() => {
    Bootstrap();
  }, []);
  return (
  <div >
    <Carousel/>
  </div>
  );
}

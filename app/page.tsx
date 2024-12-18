/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "./components/hero";
import Ceramics from "./components/ceramics";
import Product from "./components/product";
import Benefit from "./components/benefit";
import Touch from "./components/touch";
import ProductListing from "./productlisting/page";


export default function Home() {
  return (
   <>
   <Hero />
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />
<ProductListing/>
   

   </>
  );
}

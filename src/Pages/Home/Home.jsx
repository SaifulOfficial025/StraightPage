import Container from "../../Layout/Container/Container"
import Benefits from "../Benefits"
import Hero from "./Hero"
import Why from "./Why"
import ProductImage from "./ProductImage"
import CounterClock from "./CounterClock"
import CustomerReview from "./CustomerReview"
import OrderComplete from "./OrderComplete"
import Contact from "./Contact"
import Footer from "./Footer"
import FreeHeader from "./FreeHeader"
import Features from "./Features"
import Punchline from "./Punchline"
import OfferPriceDisplay from "./OfferPriceDisplay"
import OrderDirection from "./OrderDirection"
import AwarenessLine from "./AwarenessLine"

const Home = () => {
  return (
    <div>
      <FreeHeader/>
      <Hero />
      <Benefits/>
      <Why/>
      <Punchline />
      <ProductImage/>
      <CounterClock/>
      <Contact/>
      <OfferPriceDisplay/>
      <CustomerReview/>
      <OrderDirection/>
      <OrderComplete/>
      <AwarenessLine/>
      <Footer/>
    </div>
  )
}

export default Home

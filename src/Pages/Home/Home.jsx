import Container from "../../Layout/Container/Container"
import Benefits from "../Benefits"
import Hero from "./Hero"
import Why from "./Why"
import ProductImage from "./ProductImage"
import CounterClock from "./CounterClock"
import CustomerReview from "./CustomerReview"
import OrderComplete from "./OrderComplete"
import Footer from "./Footer"

const Home = () => {
  return (
    <div>
      <Hero />
      <Benefits/>
      <Why/>
      <ProductImage/>
      <CounterClock/>
      <CustomerReview/>
      <OrderComplete/>
      <Footer/>
    </div>
  )
}

export default Home

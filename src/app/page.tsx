
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import HomeSlider from "./components/HomeSlider";

export const revalidate = 60 * 60 * 1; //1 hour

export default async function Home() {

  const productsList = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = productsList.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price?.unit_amount ? new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount/100) : null,
    };
  });

  return (
    <HomeSlider products={products}/>
  );
}





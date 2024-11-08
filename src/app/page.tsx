
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import HomeSlider from "./components/HomeSlider";


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ignite Shop",
};

export const revalidate = 60 * 60 * 1; //1 hour

type ProductData = {
  id: string,
  name: string,
  imageUrl: string,
  price: string | null,
}[]


async function getProductsData(): Promise<ProductData> {

  const productsList = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return productsList.data.map((product) => {
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
}



export default async function Home() {

  
  const products = await getProductsData();

  return (
      <HomeSlider products={products}/>
  );
}







import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import HomeSlider from "./components/HomeSlider";
import { GetStaticProps } from 'next';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number | null;
}

interface HomeProps {
  products: Product[];
}

export default async function Home({ products }: HomeProps) {

  return (
    <HomeSlider products={products}/>
  );
}

export const getStaticProps: GetStaticProps = async()=>{//Static Site Generation SSG - npm run build
  
  const productsList = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = productsList.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price?.unit_amount ? price.unit_amount / 100 : null,
    };
  });

  return {
    props: { products }, // Passa os produtos como props para a página
  };
}



import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

import Image from 'next/image'

interface Props {
    params: {id: string}
}

export async function generateStaticParams() {
  const products = await stripe.products.list(); 
  //sugestão: se tem muitos produtos, buscar apenas os produtos mais acessados/vendidos

  return products.data.map((product) => ({
    id: product.id,
  }));
}

export const revalidate = 60 * 60 * 1; //1 hour

export default async function Product({params}: Props) {

  const product  = await stripe.products.retrieve(params.id,{
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;
  
  const formattedProduct =  {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: price?.unit_amount ? new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount/100) : null,
    description: product.description
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={formattedProduct?.imageUrl} width={520} height={480} alt=""/>
      </ImageContainer>
      <ProductDetails>
        <h1>{formattedProduct?.name}</h1>
        <span>{formattedProduct?.price}</span>
        <p>{formattedProduct?.description}</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { redirect } from 'next/navigation';
import Image from 'next/image'
import SendButton from "@/app/components/SendButton";
import Head from 'next/head';
import { Metadata } from "next";

interface Props {
    params: {id: string}
}
interface ProductData {
  id: string,
  name: string,
  imageUrl: string,
  price: string | null,
  description: string | null,
  defaultPriceId: string
}

export async function generateStaticParams() {
  const products = await stripe.products.list(); 
  //sugestão: se tem muitos produtos, buscar apenas os produtos mais acessados/vendidos

  return products.data.map((product) => ({
    id: product.id,
  }));
}

export const revalidate = 60 * 60 * 1; //1 hour

async function getProductData(productId: string): Promise<ProductData> {

  const product  = await stripe.products.retrieve(productId,{
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;


  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: price?.unit_amount ? new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount/100) : null,
    description: product.description,
    defaultPriceId: price.id
  };
}

export const metadata: Metadata = {
  title: "Ignite Shop",
};

export default async function Product({params}: Props) {
  
  if(!params.id){
    redirect('/');
  }

  const product = await getProductData(params.id);


  return (
    <>
      <Head>
        <title>{product?.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product?.imageUrl} width={520} height={480} alt=""/>
        </ImageContainer>
        <ProductDetails>
          <h1>{product?.name}</h1>
          <span>{product?.price}</span>
          <p>{product?.description}</p>
          <SendButton defaultPriceId={product?.defaultPriceId}/>
          {/* <button onClick={handleBuyProduct}>Comprar agora</button> */}
        </ProductDetails>
      </ProductContainer>
    </>
  );
}
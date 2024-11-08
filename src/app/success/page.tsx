import { StyledImageContainer, StyledSuccessContainer } from "@/styles/pages/success";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { redirect } from 'next/navigation';
import Head from 'next/head';



interface GetStripeProductProps {
    customerName: string | null | undefined,
    product:{
        name: string,
        imageUrl: string
    },
}

interface SuccessPageProps {
    searchParams: { session_id?: string };
  }

  async function getSessionData(sessionId: string): Promise<GetStripeProductProps> {

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product'],
    });

      const customerName = session?.customer_details?.name;
      const product = session?.line_items?.data[0]?.price?.product as Stripe.Product
      const image = product.images[0]

    return {
      customerName,
      product:{
          name: product.name,
          imageUrl: image
      }
    };   
}

export default async function Success({searchParams}: SuccessPageProps){

    if(!searchParams.session_id){
      redirect('/');
    }

    const sessionId = String(searchParams.session_id);

    const sessionData = await getSessionData(sessionId);

    return (
      <>
        <Head>
          <title>Compra efetuada | Ignite Shop</title>

          <meta name="robots" content="noindex"/>
        </Head>
        <StyledSuccessContainer>
            <h1>Compra efetuada!</h1>
            <StyledImageContainer>
                <Image src={sessionData?.product?.imageUrl} width={120} height={110} alt=''/>     
            </StyledImageContainer>
            <p>
            Uhuul <strong>{sessionData?.customerName}</strong>, sua <strong>{sessionData?.product?.name} </strong> já está a caminho da sua casa. 
            </p>
            <Link href={"/"}>Voltar ao catálogo</Link>
        </StyledSuccessContainer>
      </>
      
    )
}



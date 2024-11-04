import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";


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

export default async function Success({searchParams}: SuccessPageProps){

    const sessionId = String(searchParams.session_id);

    const sessionData = await getSessionData(sessionId);

    return (
        
        <SuccessContainer>
            <h1>Compra efetuada!</h1>
            <ImageContainer>
                <Image src={sessionData?.product?.imageUrl} width={120} height={110} alt=''/>     
            </ImageContainer>
            <p>
            Uhuul <strong>{sessionData?.customerName}</strong>, sua <strong>{sessionData?.product?.name} </strong> já está a caminho da sua casa. 
            </p>
            <Link href={"/"}>Voltar ao catálogo</Link>
        </SuccessContainer>
      
    )
}


async function getSessionData(sessionId: string): Promise<GetStripeProductProps | null> {
    try {
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

    } catch (error) {
      console.error("Erro ao buscar dados da sessão:", error);
      return null;
    }
  }


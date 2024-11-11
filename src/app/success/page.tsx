
import { StyledImageContainer, StyledImageContainerItem, StyledSuccessContainer } from "@/styles/pages/success";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { redirect } from 'next/navigation';



interface GetStripeProductProps {
    customerName: string | null | undefined,
    products:{
        name: string,
        imageUrl: string
    }[],
}

interface SuccessPageProps {
    searchParams: { session_id?: string };
  }

  async function getSessionData(sessionId: string): Promise<GetStripeProductProps> {

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product'],
    });

      const customerName = session?.customer_details?.name;

      const products = session?.line_items?.data?.map((item)=>{
          const product = item?.price?.product as Stripe.Product
          return {
            name: product.name,
            imageUrl: product.images[0] || '', 
          };
      })|| [];

    return {
      customerName,
      products
    };   
}

export default async function Success({searchParams}: SuccessPageProps){

    if(!searchParams.session_id){
      redirect('/');
    }

    const sessionId = String(searchParams.session_id);

    const sessionData = await getSessionData(sessionId);

    return (
    
        <StyledSuccessContainer>
              <StyledImageContainer>
                {
                  sessionData?.products?.map((item, index)=>(
                    <StyledImageContainerItem 
                    key={item.name}
                    css={{
                      right: `${index * 95}px`, // Cada item deslocado em relação ao anterior
                      transform: `translateX(${index * 70}px)`, // Leve sobreposição à esquerda
                      zIndex: sessionData.products.length - index, // Garante que o último item fique acima dos anteriores
                    }}
                    >
                      <span>
                       <Image  src={item.imageUrl} width={120} height={110} alt=''/> 
                      </span>
                    </StyledImageContainerItem> 
                  ))
                }
              </StyledImageContainer>
            
            <h1>Compra efetuada!</h1>
            
            {
                sessionData?.products?.length > 1 ? (
              <p>
                Uhuul <strong>{sessionData?.customerName}</strong>, sua compra de {sessionData?.products?.length} camisetas já está a caminho da sua casa. 
              </p>
                ):(
              <p>
                Uhuul <strong>{sessionData?.customerName}</strong>, sua compra já está a caminho da sua casa. 
              </p>
                )
            }
          
            <Link href={"/"}>Voltar ao catálogo</Link>
        </StyledSuccessContainer>
    )
}



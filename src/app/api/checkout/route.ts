import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';


export async function GET() {
    
    const priceId = 'price_1QEyR8BFuEymB7iSC2T9AKUV'//ID de um dos preços do produto

    const successUrl = `${process.env.NEXT_URL}/success`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const session = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ]
    })
    return NextResponse.json({ checkoutUrl: session.url });

}
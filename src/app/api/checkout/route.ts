import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

interface RequestBody {
    priceId: string;
  }

export async function POST(request: NextRequest): Promise<NextResponse> {

    const { priceId }: RequestBody = await request.json(); //ID de um dos preços do produto

    if(request.method !== 'POST'){
        return NextResponse.json(
            { status: 405, message: 'Method not allowed' },
        );
    }
    if(!priceId){
        return NextResponse.json(
            { status: 400, message: 'Price not found' },
        );
    }
    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
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
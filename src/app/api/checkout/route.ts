import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';


interface productItem {
    price: string,
    quantity: number
}
interface RequestBody{
    items: productItem[],
}

export async function POST(request: NextRequest): Promise<NextResponse> {

    const { items }: RequestBody = await request.json();

    if(request.method !== 'POST'){
        return NextResponse.json(
            { status: 405, message: 'Method not allowed' },
        );
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const session = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: 
            items
    })
    return NextResponse.json({ checkoutUrl: session.url });
    

}
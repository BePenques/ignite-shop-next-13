
import { create,  } from 'zustand';
import { persist } from 'zustand/middleware';


export interface CartItem{
    id: string,
    name: string,
    imageUrl: string,
    price: string | null,
    description?: string | null,
    defaultPriceId?: string,
    quantity: number

}

interface CartState{
    items: CartItem[],
    addItem: (item: CartItem)=> void,
    removeItem: (itemId: string) => void,
    updateItemQuantity: (itemId: string, quantity: number) => void,
    clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist<CartState>(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
              ),
            };
          } else {
            return { items: [...state.items, { ...item, quantity: 1 }] };
          }
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state?.items?.filter((item) => item?.id !== itemId),
        })),
      clearCart: () => set({ items: [] }),
      updateItemQuantity: (itemId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        })),
    }),
    {
      name: 'cart-storage', // Nome do armazenamento no localStorage
    }
  )
  );

  export default useCartStore;
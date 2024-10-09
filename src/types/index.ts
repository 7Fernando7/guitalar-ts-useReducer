export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

// Export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & { 
// quantity:number
// }

// Export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & { 
//     quantity:number
// }
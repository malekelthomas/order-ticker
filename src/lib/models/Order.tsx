export interface Order {
   customer?: Customer
   items: OrderItem[]
   created_at: Date
   started_at: Date
   completed_at: Date
   done: boolean
   time_taken: number
}

export interface Customer {
   first_name?: string
   last_name?: string
   email?: string
}

export interface OrderItem {
   name: string
   quantity: number
}

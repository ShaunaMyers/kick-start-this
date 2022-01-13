export interface SingleProduct {
   product_id: number, 
   title: string, 
   description: string, 
   funds_goal: number, 
   funds_raised: number, 
   images: string[], 
   creator_name: string, 
   creator_email: string,
}

export interface NewProduct {
   title: string,
   description: string,
   funds_goals: number,
   funds_raised: number,
   images: string,
   creator_name: string,
   creator_email: string,
}
export interface Pet {
    id: string;
    name: string;
    color: string;
    gender: "Male" | "Female";
    category: string;
    is_popular: boolean;
    age: string;
    price: string;
    image: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    category: string;  
    offer: "🎁 Free Cat Food"    
  }

 
  
  
  export interface PetKnowledgeItem {
    id: number;
    title: string;
    description: string;
    image: string;
    tag: string;
  }

  export interface ProductData {
    name: string;
    price: string;
    gender: string;
    age: string;
    size: string;
    color: string;
    vaccinated: boolean;
    dewormed: boolean;
    cert: boolean;
    microchip: boolean;
    location: string;
    publishedDate: string;
    additionalInfo: string;
    id: string;
    category: string;
    image: string;
    offer: string;
  }
  
  
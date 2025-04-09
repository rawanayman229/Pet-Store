// src/data/categories.ts
export interface Category {
    id: string;
    name: string;
    image: string;
  }
  
  export const categories: Category[] = [
    {
      id: "dogs",
      name: "Dogs",
      image: "/images/categories/dogs.jpg",
    },
    {
      id: "cats",
      name: "Cats",
      image: "/images/categories/cats.jpg",
    },
    {
      id: "birds",
      name: "Birds",
      image: "/images/categories/birds.jpg",
    },
    {
      id: "fish",
      name: "Fish",
      image: "/images/categories/fish.jpg",
    },
  ];
  
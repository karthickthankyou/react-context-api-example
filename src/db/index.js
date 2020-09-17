import { wait } from "../util"

const products = [
  {
    id: 1,
    title: "Milk",
    price: 350,
    count: 5,
  },
  {
    id: 2,
    title: "Bread",
    price: 250,
    count: 5,
  },
  {
    id: 3,
    title: "Salad Dressings",
    price: 780,
    count: 5,
  },
  {
    id: 4,
    title: "Condiments",
    price: 1250,
    count: 5,
  },
  {
    id: 5,
    title: "Cheese",
    price: 1500,
    count: 5,
  },
  {
    id: 6,
    title: "Eggs",
    price: 850,
    count: 5,
  },
  {
    id: 7,
    title: "Canned Fish",
    price: 1750,
    count: 5,
  },
  {
    id: 8,
    title: "Fish Oil",
    price: 3925,
    count: 5,
  },
  {
    id: 9,
    title: "Frozen Chicken",
    price: 1095,
    count: 5,
  },
  {
    id: 10,
    title: "Almonds",
    price: 5500,
    count: 5,
  },
  {
    id: 11,
    title: "Cashew",
    price: 6500,
    count: 5,
  },
  {
    id: 12,
    title: "Chilli Sauce",
    price: 600,
    count: 5,
  },
  {
    id: 13,
    title: "Tea",
    price: 700,
    count: 5,
  },
  {
    id: 14,
    title: "Coffee",
    price: 700,
    count: 5,
  },
  {
    id: 15,
    title: "Apple",
    price: 850,
    count: 5,
  },
  {
    id: 16,
    title: "Orange",
    price: 650,
    count: 5,
  },
  {
    id: 17,
    title: "Tomato",
    price: 160,
    count: 5,
  },
  {
    id: 18,
    title: "Brinjal",
    price: 225,
    count: 5,
  },
  {
    id: 19,
    title: "Carrot",
    price: 135,
    count: 5,
  },
  {
    id: 20,
    title: "Cooking Oil",
    price: 1220,
    count: 5,
  },
  {
    id: 21,
    title: "Cereals",
    price: 870,
    count: 5,
  },
]

export const getProducts = async () => {
  await wait(1000)
  return products
}

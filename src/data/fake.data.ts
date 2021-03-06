import { randomImage } from "../utils/image.tool";

export interface RestaurantContent {
  id: number;
  name: string;
  description: string;
  follower: number;
  isFollowing: boolean;
  image: string;
}
const fakeData: RestaurantContent[] = [
  {
    id: 0,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 1,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: true,
    image: randomImage(),
  },
  {
    id: 2,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 3,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 4,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: true,
    image: randomImage(),
  },
  {
    id: 5,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 6,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 7,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 8,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 9,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 10,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 11,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: true,
    image: randomImage(),
  },
  {
    id: 12,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 13,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 14,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: true,
    image: randomImage(),
  },
  {
    id: 15,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 16,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 17,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 18,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 19,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
  {
    id: 20,
    name: "瓦城",
    description: "最台式的泰式料理。",
    follower: Math.floor(Math.random() * 800) + 1000,
    isFollowing: false,
    image: randomImage(),
  },
];

export default fakeData;

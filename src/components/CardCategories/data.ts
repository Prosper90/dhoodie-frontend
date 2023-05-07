import img1 from "@/images/collections/man1.png";
import img2 from "@/images/collections/woman1.png";
import img3 from "@/images/collections/ball.png";
import img4 from "@/images/collections/kids.png";
import { CardCategory3Props } from "./CardCategory3";

export const CATS_DISCOVER: CardCategory3Props[] = [
  {
    name: "Men",
    desc: "Shop the latest <br /> from top brands",
    featuredImage: img1,
    color: "bg-yellow-50",
  },
  {
    name: "Women",
    desc: "Give the gift <br /> of choice",
    featuredImage: img2,
    color: "bg-red-50",
  },
  {
    name: "Sports",
    desc: "Up to <br /> 80% off retail",
    featuredImage: img3,
    color: "bg-blue-50",
  },
  {
    name: "Kids",
    desc: "Up to <br /> 80% off retail",
    featuredImage: img4,
    color: "bg-green-50",
  },
];

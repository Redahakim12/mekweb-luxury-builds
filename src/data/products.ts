import keyboard from "@/assets/product-keyboard.jpg";
import headset from "@/assets/product-headset.jpg";
import controller from "@/assets/product-controller.jpg";
import mouse from "@/assets/product-mouse.jpg";
import gameCyber from "@/assets/game-cyber.jpg";
import gameFantasy from "@/assets/game-fantasy.jpg";
import gameRacing from "@/assets/game-racing.jpg";
import gameShooter from "@/assets/game-shooter.jpg";

export type Product = {
  id: string;
  title: string;
  slug: string;
  category: string;
  platform: string;
  brand: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  stock: number;
  image: string;
  description: string;
  specifications: Record<string, string>;
  tags: string[];
  isNew?: boolean;
  isBestseller?: boolean;
};

export const categories = [
  "PC Games", "PlayStation Games", "Xbox Games", "Nintendo Games",
  "Gaming Keyboards", "Gaming Mice", "Gaming Headsets", "Controllers",
  "Consoles", "Gift Cards", "Gaming Chairs", "Streaming Gear",
];

export const products: Product[] = [
  {
    id: "1", title: "Cyber Edge 2099", slug: "cyber-edge-2099",
    category: "PC Games", platform: "PC", brand: "NeonStudio",
    price: 49.99, oldPrice: 69.99, discount: 29, rating: 4.8, stock: 124,
    image: gameCyber,
    description: "Open-world cyberpunk RPG with branching narrative and brutal combat.",
    specifications: { Genre: "RPG / Action", Release: "2025", Platforms: "PC, PS5, Xbox", Language: "Multi" },
    tags: ["new", "rpg", "cyberpunk"], isNew: true, isBestseller: true,
  },
  {
    id: "2", title: "Open World: Dragon Realms", slug: "open-world-dragon-realms",
    category: "PlayStation Games", platform: "PS5", brand: "RealmForge",
    price: 59.99, oldPrice: 79.99, discount: 25, rating: 4.9, stock: 87,
    image: gameFantasy,
    description: "Epic fantasy adventure across mountains and dragons.",
    specifications: { Genre: "Open World", Release: "2024", Platforms: "PS5, PC", Language: "Multi" },
    tags: ["fantasy", "openworld"], isBestseller: true,
  },
  {
    id: "3", title: "Neon Drift Racing", slug: "neon-drift-racing",
    category: "Xbox Games", platform: "Xbox", brand: "VeloSoft",
    price: 39.99, oldPrice: 49.99, discount: 20, rating: 4.6, stock: 200,
    image: gameRacing,
    description: "Adrenaline-fueled futuristic racer with online multiplayer.",
    specifications: { Genre: "Racing", Release: "2025", Platforms: "Xbox, PC", Language: "Multi" },
    tags: ["racing", "multiplayer"], isNew: true,
  },
  {
    id: "4", title: "Battlefront Reckoning", slug: "battlefront-reckoning",
    category: "PC Games", platform: "PC", brand: "IronSquad",
    price: 44.99, oldPrice: 59.99, discount: 25, rating: 4.5, stock: 56,
    image: gameShooter,
    description: "Tactical sci-fi FPS with squad-based combat.",
    specifications: { Genre: "FPS", Release: "2024", Platforms: "PC, PS5, Xbox", Language: "Multi" },
    tags: ["fps", "shooter"],
  },
  {
    id: "5", title: "Phantom RGB Keyboard Pro", slug: "phantom-rgb-keyboard",
    category: "Gaming Keyboards", platform: "PC", brand: "PhantomGear",
    price: 129.99, oldPrice: 169.99, discount: 24, rating: 4.7, stock: 42,
    image: keyboard,
    description: "Mechanical RGB keyboard with hot-swappable optical switches.",
    specifications: { Switches: "Optical Red", Layout: "Full-size", Backlight: "Per-key RGB", Connection: "USB-C" },
    tags: ["keyboard", "rgb"], isBestseller: true,
  },
  {
    id: "6", title: "Apex Wireless Headset", slug: "apex-wireless-headset",
    category: "Gaming Headsets", platform: "Multi", brand: "ApexAudio",
    price: 199.99, oldPrice: 249.99, discount: 20, rating: 4.9, stock: 31,
    image: headset,
    description: "7.1 surround wireless headset with 50h battery and active noise canceling.",
    specifications: { Driver: "50mm", Battery: "50h", Connection: "Wireless 2.4GHz", Mic: "Detachable" },
    tags: ["headset", "wireless"], isNew: true,
  },
  {
    id: "7", title: "ProShot Wireless Controller", slug: "proshot-controller",
    category: "Controllers", platform: "PS5", brand: "ProShot",
    price: 89.99, rating: 4.6, stock: 78,
    image: controller,
    description: "Pro controller with adaptive triggers and customizable back paddles.",
    specifications: { Compat: "PS5/PC", Battery: "20h", Triggers: "Adaptive", Paddles: "4" },
    tags: ["controller"],
  },
  {
    id: "8", title: "Strike X9 Gaming Mouse", slug: "strike-x9-mouse",
    category: "Gaming Mice", platform: "PC", brand: "StrikeTech",
    price: 79.99, oldPrice: 99.99, discount: 20, rating: 4.7, stock: 110,
    image: mouse,
    description: "Ultra-light 26K DPI gaming mouse with 8 programmable buttons.",
    specifications: { DPI: "26000", Weight: "63g", Buttons: "8", Polling: "8000Hz" },
    tags: ["mouse", "rgb"], isBestseller: true,
  },
];

export const reviews = [
  { id: 1, name: "Alex K.", role: "Pro Gamer", rating: 5, text: "Best gaming gear store I've used. Lightning fast shipping and the headset is incredible." },
  { id: 2, name: "Sarah M.", role: "Streamer", rating: 5, text: "GameZone has everything I need for my setup. Quality is unmatched and prices are fair." },
  { id: 3, name: "Yuki T.", role: "eSports Coach", rating: 5, text: "My team only buys from GameZone. Professional support and pro-grade equipment." },
];

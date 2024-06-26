
const products = [
  {
    id: 31,
    name: " Mouse ",
    description: "Wireless Rechargeable Mouse 2.4G Plus Bluetooth 2 Modes",
    category: "accessories",
    image:"/images/product_31.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },

  {

    name: "Apple IPhone 15 Pro",
    description: "Apple IPhone 15 Pro Max 256GB - 5G - Blue Titanium - A17 Pro Chip",
    category: "phones",
    image:"/images/product_4.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 5,
    name: "Samsung Galaxy A24",
    description: "Samsung Galaxy A24 6.5` 6GB RAM/128GB ROM Android 13 - Black",
    category: "phones",
    image:"/images/product_5.png",
    brand: "Gadgets",
    price: 500.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },

  {
    name: "Tecno Spark 10 5G (KI8)",
    description: "Tecno Spark 10 5G (KI8) 6.6, 256GB/ 8GB RAM, 5000mAh, 5G - Black",
    category: "phones",
    image: "/images/product_6.png",
    brand: "Gadgets",
    price: 200.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 7,
    name: "XIAOMI Redmi 12",
    description: "XIAOMI Redmi 12 6.79 8GB RAM/128GB ROM Android 13 - Midnight Black",
    category: "phones",
    image:"/images/product_7.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 8,
    name: "Infinix Hot 30i",
    description: "Infinix Hot 30i 6.6' HD+, 4+4GB RAM /128GB ROM Android 12 - Black",
    category: "phones",
    image: "/images/product_8.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 9,
    name: "Samsung Galaxy S20",
    description: "Samsung Galaxy S20 Plus 5G - 6.7'' (128GB/12GB) Single Sim - Grey",
    category: "phones",
    image: "/images/product_9.png",
    brand: "Gadgets",
    price: 150.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 10,
    name: "Itel S23+",
    description: "Itel S23+ 6.6 8GB RAM/256GB ROM Android 12 - Cyan",
    category: "phones",
    image:"/images/product_10.png",
    brand: "Gadgets",
    price: 100.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 11,
    name: "Apple IPHONE 12",
    description: "Apple IPHONE 12 - 6.1 128GB 4GB RAM (12PM+12PM) 2815mAh BLACK",
    category: "phones",
    image: "/images/product_11.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 12,
    name: "Apple Iphone XS Max 256gb 4gb 6.5inch Silver Free Case, Screen Guide",
    description: "Apple Iphone XS Max 256gb 4gb 6.5inch Silver Free Case, Screen Guide",
    category: "phones",
    image: "/images/product_12.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 13,
    name: "Asus ROG ",
    description: "Asus ROG Flow Z13 Gaming GZ301ZC Intel Core I7-12700H 16GB 512GB 4GB NVIDIA Win 11",
    category: "laptops",
    image: "/images/product_13.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 14,
    name: "Hp EliteBook ",
    description: "Hp EliteBook 840 G5 Intel Core I5- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAG",
    category: "laptops",
    image: "/images/product_14.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 15,
    name: "Hp ProBook11",
    description: "Hp ProBook11 X360-Intel Celeron 512GB 4GBRAM Windows10+MOUSE",
    category: "laptops",
    image:"/images/product_15.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 16,
    name: "Hp Probook 11",
    description: "Hp Probook 11 G7 Intel Celeron Touchscreen 4GB DDR4 RAM 256GB SSD Windows 10 + Bag",
    category: "laptops",
    image: "/images/product_16.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 17,
    name: "Lenovo Ideapad ",
    description: "Lenovo Ideapad Intel Core I3 12GB RAM 1TB HDD Win 11 Pro +Led Lamp For Keyboard",
    category: "laptops",
    image:"/images/product_17.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 18,
    name: "Hp EliteBook",
    description: "Hp EliteBook 840 G5 Intel Core I5-16GB RAM/1TB SSD/Backlit",
    category: "laptops",
    image: "/images/product_18.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 6,
    name: "Gaming Console",
    image: "/images/gaming-console.jpg",
    description:
      "Dive into the world of gaming with this powerful console that supports the latest games.",
    brand: "BrandB",
    category: "accessories",
    price: 399.99,
    countInStock: 4,
    rating: 4.2,
    numReviews: 6,
  },
 
  {
    id: 20,
    name: "Lenovo IDEAPAD ",
    description: "Lenovo IDEAPAD 15 INTEL CORE I3 12GB RAM 256GB SSD 15.6 FHD WINDOWS 11+ Mouse",
    category: "laptops",
    image: "/images/product_20.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 21,
    name: "Apple MacBook Pro",
    description: "Apple MacBook Pro 16 Laptop - M2 Max Chip - 32GB Memory - 1TB SSD Space Gray",
    category: "laptops",
    image: "/images/product_21.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 22,
    name: "Apple MacBook Air ",
    description: "Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Gray",
    category: "laptops",
    image: "/images/product_22.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 23,
    name: "Apple MacBook Pro",
    description: "Apple MacBook Pro 16 Laptop - M2 Pro Chip - 16GB Memory - 1TB SSD - Space Gray",
    category: "laptops",
    image:"/images/product_23.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 24,
    name: "Asus ROG",
    description: "Asus ROG Flow Z13 Gaming GZ301ZC Intel Core I7-12700H 16GB 512GB 4GB NVIDIA Win 11",
    category: "laptops",
    image:"/images/product_24.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 25,
    name: "Oraimo Tempo-W2 ",
    description: "Oraimo Tempo-W2 IP67 Waterproof 24 Training Modes Smart Watch",
    category: "accessories",
    image:"/images/product_25.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 26,
    name: "Ace Elec",
    description: "Ace Elec WL82 Bluetooth 5.0 Stereo Headsets",
    category: "accessories",
    image:"/images/product_26.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 27,
    name: "Jbl GO 3",
    description: "Jbl GO 3 - Portable Waterproof Speaker - Black",
    category: "accessories",
    image: "/images/product_27.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 28,
    name: "Foldable",
    description: "Foldable Mobile Phone Holder And Tablet Stand-Black",
    category: "accessories",
    image:"/images/product_28.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 29,
    name: "For Nokia 7.2 ",
    description: "For Nokia 7.2 Lenovo Tab 2 Zuk Z2 K5 Play Motorola G9 Lg G8",
    category: "accessories",
    image: "/images/product_29.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 30,
    name: "SanDisk 32GB",
    description: "SanDisk 32GB Cruzer Blade USB 2.0 Flash Drive",
    category: "accessories",
    image:"/images/product_30.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },

  {
    id: 1,
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly. High-quality AAC audio offers an immersive listening experience. Built-in microphone allows you to take calls while working.",
    brand: "Apple",
    category: "accessories",
    price: 89.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    id: 32,
    name: "F9 Wireless ",
    description: "F9 Wireless Fingerprint Touch Headset Hifi Stereo",
    category: "accessories",
    image: "/images/product_32.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 33,
    name: "USB",
    description: "Type C To USB Adapter",
    category: "accessories",
    image: "/images/product_33.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 34,
    name: "Wireless Bluetooth",
    description: "S20 Wireless Bluetooth Earphone Touch LED Stereo Audio Black",
    category: "accessories",
    image: "/images/product_34.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },
  {
    id: 35,
    name: "Anker Soundcore Flare",
    description: "Anker Soundcore Flare 2 360° Sound IPX7 Waterproof",
    category: "accessories",
    image: "/images/product_35.png",
    brand: "Gadgets",
    price: 100.99,
    countInStock: 3,
    rating: 4,
    numReviews: 6,
  },
  {
    id: 36,
    name: "Portable SSD",
    description: "Portable SSD External Hard Drive - 2TB Storage Space",
    category: "accessories",
    image:"/images/product_36.png",
    brand: "Gadgets",
    price: 400.99,
    countInStock: 3,
    rating: 4.2,
    numReviews: 6,
  },

  {
    id: 2,
    name: "Smartphone X1",
    image: "/images/smartphone-x1.jpg",
    description:
      "A powerful smartphone with high-resolution camera and long battery life.",
    brand: "BrandX",
    category: "phones",
    price: 599.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 8,
  },
  {
    id: 3,
    name: "Laptop ProBook",
    image: "/images/laptop-probook.jpg",
    description:
      "A professional laptop with fast processing, sleek design, and ample storage.",
    brand: "BrandY",
    category: "laptops",
    price: 1099.99,
    countInStock: 2,
    rating: 4.0,
    numReviews: 5,
  },
  {
    id: 4,
    name: "Wireless Headphones",
    image: "/images/headphones.jpg",
    description:
      "Immerse yourself in music with these wireless headphones featuring noise cancellation.",
    brand: "BrandZ",
    category: "accessories",
    price: 149.99,
    countInStock: 10,
    rating: 4.8,
    numReviews: 12,
  },
  {
    id: 5,
    name: "Smart TV 4K",
    image: "/images/smart-tv-4k.jpg",
    description:
      "Experience stunning visuals and smart features with this 4K Smart TV.",
    brand: "BrandA",
    category: "accessories",
    price: 799.99,
    countInStock: 7,
    rating: 4.6,
    numReviews: 9,
  },
    
      {
        name: "Tecno Phantom",
        description: "Tecno Phantom V Fold 5G (12GB RAM, 512GB ROM) Dual Sim - Black",
        category: "phones",
        image: "/images/product_1.png",
        brand: "Tecno",
        price: 300.99,
        countInStock: 4,
        rating: 4.2,
        numReviews: 6,
      },
      {
        name: "Samsung GALAXY Z",
        description: "Samsung GALAXY Z Fold 4 12GB RAM, 256GB ROM(dual Sim) - GRAY/GREEN",
        category: "phones",
        image: "/images/product_2.png",
        brand: "Samsung",
        price: 400.99,
        countInStock: 3,
        rating: 4.2,
        numReviews: 6,
      },
      {
      
        name: "Apple IPhone 14",
        description: "Apple IPhone 14 6.1'' 6GB RAM/256GB ROM IOS 16 - Blue",
        category: "phones",
        image: "/images/product_3.png",
        brand: "Gadgets",
        price: 400.99,
        countInStock: 3,
        rating: 4.2,
        numReviews: 6,
      },
      {
        id: 19,
        name: "DELL INSPIRON ",
        description: "DELL INSPIRON GAMING 15 12TH GEN INTEL CORE I7 16GB RAM 1TB SSD RTX 3060 (6GB) 15.6 WINS 11",
        category: "laptops",
        image: "/images/product_19.png",
        brand: "Gadgets",
        price: 400.99,
        countInStock: 3,
        rating: 4.2,
        numReviews: 6,
      },
     
    
  ]

  export default products;
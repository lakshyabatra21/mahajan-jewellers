// Mahajan Jewellers E-Commerce Replica Application Logic (Redesigned Luxury Version)
// Powered by GSAP, Canvas particles, and full-stack REST persistence APIs

// Default fallback products
const DEFAULT_PRODUCTS = [
  {
    "id": 1,
    "name": "Ear Rings 1",
    "category": "Earrings",
    "price": 799,
    "oldPrice": 1399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Earrings",
    "isNewArrival": true,
    "image": "Products/Earrings/ear rings 1.jpeg"
  },
  {
    "id": 2,
    "name": "Earring 2",
    "category": "Earrings",
    "price": 899,
    "oldPrice": 1499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Earrings",
    "isNewArrival": true,
    "image": "Products/Earrings/earring2.png"
  },
  {
    "id": 3,
    "name": "Earring 3",
    "category": "Earrings",
    "price": 999,
    "oldPrice": 1599,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Earrings",
    "isNewArrival": true,
    "image": "Products/Earrings/earring3.png"
  },
  {
    "id": 4,
    "name": "Mahajan Jewellery 04",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.20.17 PM.jpeg"
  },
  {
    "id": 5,
    "name": "Mahajan Jewellery 05",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.19.54 PM.jpeg"
  },
  {
    "id": 6,
    "name": "Mahajan Jewellery 06",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.19.18 PM.jpeg"
  },
  {
    "id": 7,
    "name": "Mahajan Jewellery 07",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.17.44 PM.jpeg"
  },
  {
    "id": 8,
    "name": "Mahajan Jewellery 08",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.15.32 PM.jpeg"
  },
  {
    "id": 9,
    "name": "Mahajan Jewellery 09",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.14.33 PM.jpeg"
  },
  {
    "id": 10,
    "name": "Mahajan Jewellery 10",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.13.08 PM.jpeg"
  },
  {
    "id": 11,
    "name": "Mahajan Jewellery 11",
    "category": "Pendant Sets",
    "price": 999,
    "oldPrice": 1599,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Pendant Sets",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.12.35 PM.jpeg"
  },
  {
    "id": 12,
    "name": "Mahajan Jewellery 12",
    "category": "Mangalsutra",
    "price": 1899,
    "oldPrice": 2499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.11.40 PM.jpeg"
  },
  {
    "id": 13,
    "name": "Mahajan Jewellery 13",
    "category": "Pendant Sets",
    "price": 1199,
    "oldPrice": 1799,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Pendant Sets",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.11.15 PM.jpeg"
  },
  {
    "id": 14,
    "name": "Mahajan Jewellery 14",
    "category": "Mangalsutra",
    "price": 2099,
    "oldPrice": 2699,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.10.39 PM.jpeg"
  },
  {
    "id": 15,
    "name": "Mahajan Jewellery 15",
    "category": "Mangalsutra",
    "price": 2199,
    "oldPrice": 2799,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.09.26 PM.jpeg"
  },
  {
    "id": 16,
    "name": "Mahajan Jewellery 16",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.09.01 PM.jpeg"
  },
  {
    "id": 17,
    "name": "Mahajan Jewellery 17",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.08.38 PM.jpeg"
  },
  {
    "id": 18,
    "name": "Mahajan Jewellery 18",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.07.59 PM.jpeg"
  },
  {
    "id": 19,
    "name": "Mahajan Jewellery 19",
    "category": "Mangalsutra",
    "price": 2099,
    "oldPrice": 2699,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.07.24 PM.jpeg"
  },
  {
    "id": 20,
    "name": "Mahajan Jewellery 20",
    "category": "Pendant Sets",
    "price": 1399,
    "oldPrice": 1999,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Pendant Sets",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.06.22 PM.jpeg"
  },
  {
    "id": 21,
    "name": "Mahajan Jewellery 21",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.05.24 PM.jpeg"
  },
  {
    "id": 22,
    "name": "Mahajan Jewellery 22",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.04.36 PM.jpeg"
  },
  {
    "id": 23,
    "name": "Mahajan Jewellery 23",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.04.27 PM.jpeg"
  },
  {
    "id": 24,
    "name": "Mahajan Jewellery 24",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.03.38 PM.jpeg"
  },
  {
    "id": 25,
    "name": "Mahajan Jewellery 25",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.03.00 PM.jpeg"
  },
  {
    "id": 26,
    "name": "Mahajan Jewellery 26",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 2.01.15 PM.jpeg"
  },
  {
    "id": 27,
    "name": "Mahajan Jewellery 27",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.57.53 PM.jpeg"
  },
  {
    "id": 28,
    "name": "Mahajan Jewellery 28",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.57.40 PM.jpeg"
  },
  {
    "id": 29,
    "name": "Mahajan Jewellery 29",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.56.03 PM.jpeg"
  },
  {
    "id": 30,
    "name": "Mahajan Jewellery 30",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.54.32 PM.jpeg"
  },
  {
    "id": 31,
    "name": "Mahajan Jewellery 31",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.54.00 PM.jpeg"
  },
  {
    "id": 32,
    "name": "Mahajan Jewellery 32",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.53.14 PM.jpeg"
  },
  {
    "id": 33,
    "name": "Mahajan Jewellery 33",
    "category": "Jewellery Sets",
    "price": 1699,
    "oldPrice": 2299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.51.46 PM.jpeg"
  },
  {
    "id": 34,
    "name": "Mahajan Jewellery 34",
    "category": "Jewellery Sets",
    "price": 1799,
    "oldPrice": 2399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.51.15 PM.jpeg"
  },
  {
    "id": 35,
    "name": "Mahajan Jewellery 35",
    "category": "Jewellery Sets",
    "price": 1899,
    "oldPrice": 2499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.48.27 PM.jpeg"
  },
  {
    "id": 36,
    "name": "Mahajan Jewellery 36",
    "category": "Jewellery Sets",
    "price": 1499,
    "oldPrice": 2099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.47.39 PM.jpeg"
  },
  {
    "id": 37,
    "name": "Mahajan Jewellery 37",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.46.45 PM.jpeg"
  },
  {
    "id": 38,
    "name": "Mahajan Jewellery 38",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.46.18 PM.jpeg"
  },
  {
    "id": 39,
    "name": "Mahajan Jewellery 39",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.45.49 PM.jpeg"
  },
  {
    "id": 40,
    "name": "Mahajan Jewellery 40",
    "category": "Jewellery Sets",
    "price": 1899,
    "oldPrice": 2499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.44.52 PM.jpeg"
  },
  {
    "id": 41,
    "name": "Mahajan Jewellery 41",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.44.24 PM.jpeg"
  },
  {
    "id": 42,
    "name": "Mahajan Jewellery 42",
    "category": "Mangalsutra",
    "price": 1899,
    "oldPrice": 2499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.43.22 PM.jpeg"
  },
  {
    "id": 43,
    "name": "Mahajan Jewellery 43",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.42.53 PM.jpeg"
  },
  {
    "id": 44,
    "name": "Mahajan Jewellery 44",
    "category": "Pendant Sets",
    "price": 1299,
    "oldPrice": 1899,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Pendant Sets",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.41.42 PM.jpeg"
  },
  {
    "id": 45,
    "name": "Mahajan Jewellery 45",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.40.56 PM.jpeg"
  },
  {
    "id": 46,
    "name": "Mahajan Jewellery 46",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.40.35 PM.jpeg"
  },
  {
    "id": 47,
    "name": "Mahajan Jewellery 47",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.39.26 PM.jpeg"
  },
  {
    "id": 48,
    "name": "Mahajan Jewellery 48",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.39.06 PM.jpeg"
  },
  {
    "id": 49,
    "name": "Mahajan Jewellery 49",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.38.16 PM.jpeg"
  },
  {
    "id": 50,
    "name": "Temple Raani Haar",
    "category": "Jewellery Sets",
    "price": 1899,
    "oldPrice": 2499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/Temple raani haar.jpeg"
  },
  {
    "id": 51,
    "name": "Mahajan Jewellery 51",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.37.08 PM.jpeg"
  },
  {
    "id": 52,
    "name": "Mahajan Jewellery 52",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.34.19 PM.jpeg"
  },
  {
    "id": 53,
    "name": "Mahajan Jewellery 53",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.19.59 PM.jpeg"
  },
  {
    "id": 54,
    "name": "Mahajan Jewellery 54",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.23.59 PM.jpeg"
  },
  {
    "id": 55,
    "name": "Mahajan Jewellery 55",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/WhatsApp Image 2026-07-19 at 1.25.16 PM.jpeg"
  },
  {
    "id": 56,
    "name": "Necklace",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/Necklace.jpeg"
  },
  {
    "id": 57,
    "name": "Mahajan Jewellery 10",
    "category": "Jewellery Sets",
    "price": 1599,
    "oldPrice": 2199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/New folder/p-10.png"
  },
  {
    "id": 58,
    "name": "Mahajan Jewellery 2",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/p-2.png"
  },
  {
    "id": 59,
    "name": "Mahajan Jewellery 3",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/p-3.png"
  },
  {
    "id": 60,
    "name": "Mahajan Jewellery 4",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/p-4.png"
  },
  {
    "id": 61,
    "name": "Polki",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/polki.png"
  },
  {
    "id": 62,
    "name": "Mahajan Jewellery 62",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.17.19 PM.png"
  },
  {
    "id": 63,
    "name": "Mahajan Jewellery 63",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.19.49 PM.png"
  },
  {
    "id": 64,
    "name": "Mahajan Jewellery 64",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.20.24 PM.png"
  },
  {
    "id": 65,
    "name": "Mahajan Jewellery 65",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.21.19 PM.png"
  },
  {
    "id": 66,
    "name": "Mahajan Jewellery 66",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.21.42 PM.png"
  },
  {
    "id": 67,
    "name": "Mahajan Jewellery 67",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.22.49 PM.png"
  },
  {
    "id": 68,
    "name": "Mahajan Jewellery 68",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.23.13 PM.png"
  },
  {
    "id": 69,
    "name": "Mahajan Jewellery 69",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.23.45 PM.png"
  },
  {
    "id": 70,
    "name": "Mahajan Jewellery 70",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.24.27 PM.png"
  },
  {
    "id": 71,
    "name": "Mahajan Jewellery 71",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.25.24 PM.png"
  },
  {
    "id": 72,
    "name": "Mahajan Jewellery 72",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.26.00 PM.png"
  },
  {
    "id": 73,
    "name": "Mahajan Jewellery 73",
    "category": "Pendant Sets",
    "price": 1199,
    "oldPrice": 1799,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Pendant Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.26.43 PM.png"
  },
  {
    "id": 74,
    "name": "Mahajan Jewellery 74",
    "category": "Pendant Sets",
    "price": 1299,
    "oldPrice": 1899,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Pendant Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.26.43 PMd.png"
  },
  {
    "id": 75,
    "name": "Mahajan Jewellery 75",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.27.33 PM.png"
  },
  {
    "id": 76,
    "name": "Mahajan Jewellery 76",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.28.08 PM.png"
  },
  {
    "id": 77,
    "name": "Mahajan Jewellery 77",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.28.53 PM.png"
  },
  {
    "id": 78,
    "name": "Mahajan Jewellery 78",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.29.15 PM.png"
  },
  {
    "id": 79,
    "name": "Mahajan Jewellery 79",
    "category": "Mangalsutra",
    "price": 2099,
    "oldPrice": 2699,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.32.01 PM.png"
  },
  {
    "id": 80,
    "name": "Mahajan Jewellery 80",
    "category": "Mangalsutra",
    "price": 2199,
    "oldPrice": 2799,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.33.53 PM.png"
  },
  {
    "id": 81,
    "name": "Mahajan Jewellery 81",
    "category": "Mangalsutra",
    "price": 1799,
    "oldPrice": 2399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.41.11 PM.png"
  },
  {
    "id": 82,
    "name": "Mahajan Jewellery 82",
    "category": "Mangalsutra",
    "price": 1899,
    "oldPrice": 2499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.47.26 PM.png"
  },
  {
    "id": 83,
    "name": "Mahajan Jewellery 83",
    "category": "Mangalsutra",
    "price": 1999,
    "oldPrice": 2599,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.48.56 PM.png"
  },
  {
    "id": 84,
    "name": "Mahajan Jewellery 84",
    "category": "Mangalsutra",
    "price": 2099,
    "oldPrice": 2699,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.51.07 PM.png"
  },
  {
    "id": 85,
    "name": "Mahajan Jewellery 85",
    "category": "Pendant Sets",
    "price": 1399,
    "oldPrice": 1999,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Pendant Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 2.59.49 PM (1).png"
  },
  {
    "id": 86,
    "name": "Mahajan Jewellery 86",
    "category": "Mangalsutra",
    "price": 1799,
    "oldPrice": 2399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Mangalsutra",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.01.45 PM.png"
  },
  {
    "id": 87,
    "name": "Mahajan Jewellery 87",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.03.58 PM (1).png"
  },
  {
    "id": 88,
    "name": "Mahajan Jewellery 88",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.03.58 PM.png"
  },
  {
    "id": 89,
    "name": "Mahajan Jewellery 89",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.04.37 PM.png"
  },
  {
    "id": 90,
    "name": "Mahajan Jewellery 90",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.04.38 PM.png"
  },
  {
    "id": 91,
    "name": "Mahajan Jewellery 91",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.06.15 PM (1).png"
  },
  {
    "id": 92,
    "name": "Mahajan Jewellery 92",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.06.15 PM.png"
  },
  {
    "id": 93,
    "name": "Mahajan Jewellery 93",
    "category": "Necklaces",
    "price": 2699,
    "oldPrice": 3299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.06.16 PM.png"
  },
  {
    "id": 94,
    "name": "Mahajan Jewellery 94",
    "category": "Necklaces",
    "price": 2799,
    "oldPrice": 3399,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.07.58 PM.png"
  },
  {
    "id": 95,
    "name": "Mahajan Jewellery 95",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.09.10 PM.png"
  },
  {
    "id": 96,
    "name": "Mahajan Jewellery 96",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.10.26 PM.png"
  },
  {
    "id": 97,
    "name": "Mahajan Jewellery 97",
    "category": "Necklaces",
    "price": 2599,
    "oldPrice": 3199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.11.21 PM.png"
  },
  {
    "id": 98,
    "name": "Mahajan Jewellery 98",
    "category": "Pendant Sets",
    "price": 1199,
    "oldPrice": 1799,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Pendant Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.15.46 PM.png"
  },
  {
    "id": 99,
    "name": "Mahajan Jewellery 99",
    "category": "Pendant Sets",
    "price": 1299,
    "oldPrice": 1899,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Pendant Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.16.22 PM.png"
  },
  {
    "id": 100,
    "name": "Mahajan Jewellery 100",
    "category": "Necklaces",
    "price": 2899,
    "oldPrice": 3499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.17.03 PM.png"
  },
  {
    "id": 101,
    "name": "Mahajan Jewellery 101",
    "category": "Necklaces",
    "price": 2499,
    "oldPrice": 3099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Necklaces",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.17.39 PM.png"
  },
  {
    "id": 102,
    "name": "Mahajan Jewellery 102",
    "category": "Jewellery Sets",
    "price": 1599,
    "oldPrice": 2199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.18.39 PM.png"
  },
  {
    "id": 103,
    "name": "Mahajan Jewellery 103",
    "category": "Jewellery Sets",
    "price": 1699,
    "oldPrice": 2299,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.35.09 PM.png"
  },
  {
    "id": 104,
    "name": "Mahajan Jewellery 104",
    "category": "Earrings",
    "price": 1099,
    "oldPrice": 1699,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Earrings",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.35.15 PM.png"
  },
  {
    "id": 105,
    "name": "Mahajan Jewellery 105",
    "category": "Jewellery Sets",
    "price": 1899,
    "oldPrice": 2499,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.35.37 PM.png"
  },
  {
    "id": 106,
    "name": "Mahajan Jewellery 106",
    "category": "Jewellery Sets",
    "price": 1499,
    "oldPrice": 2099,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.35.50 PM.png"
  },
  {
    "id": 107,
    "name": "Mahajan Jewellery 107",
    "category": "Jewellery Sets",
    "price": 1599,
    "oldPrice": 2199,
    "rating": 4.8,
    "tag": "New",
    "shade": "from-white via-white to-white",
    "accent": "Jewellery Sets",
    "isNewArrival": true,
    "image": "Products/New folder/WhatsApp Image 2026-07-02 at 3.42.09 PM.png"
  }
];

// LocalStorage Cache Invalidation for Version Updates
const APP_VERSION = "1.1.6";
if (localStorage.getItem('mj_app_version') !== APP_VERSION) {
  localStorage.removeItem('mj_products');
  localStorage.removeItem('mj_orders');
  localStorage.setItem('mj_app_version', APP_VERSION);
}

// App States
let products = [];
// Environment detection
const isStaticEnv = window.location.hostname.includes("github.io") || 
                    (window.location.hostname.includes("localhost") === false && 
                     window.location.hostname.includes("127.0.0.1") === false) ||
                    window.location.protocol === "file:";
let cart = JSON.parse(localStorage.getItem('mj_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('mj_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('mj_user')) || null;
let orders = [];

// UI States
let currentCategory = "All";
let searchQuery = "";
let currentHeroIndex = 0;
let isCartOpen = false;
let isWishlistOpen = false;
let isAuthOpen = false;
let isAdminOpen = false;
let authMode = "login"; 
let adminActiveTab = "overview"; 
let editProduct = null;

// Track selected options per product ID
let selectedOptionsState = {};

// Featured Carousel products
const HERO_ITEMS = [
  {
    title: "The Royal Heritage Collection",
    desc: "Pure craftsmanship featuring traditional neckpieces and matching jhumkas, designed to stun on your special moments.",
    image: "images/hero_front.png",
    link: "#collections"
  },
  {
    title: "Temple Haar Collection",
    desc: "Traditional bridal ornaments reflecting rich heritage, featuring delicate gold overlays and gemstone clusters.",
    image: "Products/WhatsApp Image 2026-07-19 at 2.09.01 PM.jpeg",
    link: "#collections"
  },
  {
    title: "Designer Necklace Sets",
    desc: "Modern aesthetics blended with heritage patterns. Discover premium artificial necklaces for all occasions.",
    image: "Products/WhatsApp Image 2026-07-19 at 1.42.53 PM.jpeg",
    link: "#collections"
  }
];

// Formatting Helper
function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

// Fetch helper - Load Products from DB (with LocalStorage static fallback)
async function loadProducts() {
  const localProducts = localStorage.getItem('mj_products');
  if (localProducts) {
    products = JSON.parse(localProducts);
    renderProducts();
    return;
  }

  if (isStaticEnv) {
    try {
      const res = await fetch('data/products.json');
      if (res.ok) {
        products = await res.json();
        localStorage.setItem('mj_products', JSON.stringify(products));
      } else {
        products = DEFAULT_PRODUCTS;
      }
    } catch (e) {
      products = DEFAULT_PRODUCTS;
    }
    renderProducts();
    return;
  }

  try {
    const res = await fetch('/api/products');
    if (res.ok) {
      products = await res.json();
      localStorage.setItem('mj_products', JSON.stringify(products));
    } else {
      products = DEFAULT_PRODUCTS;
    }
  } catch (err) {
    products = DEFAULT_PRODUCTS;
  }
  renderProducts();
}

// Fetch helper - Load Orders from DB (with LocalStorage static fallback)
async function loadOrders() {
  const localOrders = localStorage.getItem('mj_orders');
  if (localOrders) {
    orders = JSON.parse(localOrders);
    return;
  }

  if (isStaticEnv) {
    orders = [];
    return;
  }

  try {
    const res = await fetch('/api/orders');
    if (res.ok) {
      orders = await res.json();
      localStorage.setItem('mj_orders', JSON.stringify(orders));
    }
  } catch (err) {
    console.warn("Orders fetch failed, using offline storage:", err);
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", async () => {
  initCarousel();
  initTicker();
  initParticles();
  initEventListeners();
  
  loadProducts();
  loadOrders();
  
  renderCategories();
  renderCart();
  renderWishlist();
  updateAuthHeader();
  checkAdminPanelAccess();
  
  // Custom Animations setup
  initGSAPTrigger();
  initMagneticButtons();
  initCardTilt();
  initHeaderScroll();
});

// 2. Carousel Functions
function initCarousel() {
  const slider = document.getElementById("hero-slider");
  if (!slider) return;
  
  slider.innerHTML = HERO_ITEMS.map((item, idx) => `
    <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      <img src="${item.image}" class="hero-slide-bg" alt="${item.title}">
      <div class="container">
        <div class="hero-content">
          <span class="hero-label">PREMIUM ARTIFICIAL JEWELLERY</span>
          <h1 class="hero-title">${item.title}</h1>
          <p class="hero-desc">${item.desc}</p>
          <a href="${item.link}" class="btn-primary magnetic" data-strength="15">Shop Now</a>
        </div>
      </div>
    </div>
  `).join("");

  const indicators = document.getElementById("slider-indicators");
  if (indicators) {
    indicators.innerHTML = HERO_ITEMS.map((_, idx) => `
      <div class="indicator-dot ${idx === 0 ? 'active' : ''}" onclick="setHeroSlide(${idx})"></div>
    `).join("");
  }

  // Auto-play interval
  setInterval(() => {
    let nextIdx = (currentHeroIndex + 1) % HERO_ITEMS.length;
    setHeroSlide(nextIdx);
  }, 6000);
}

window.setHeroSlide = function(index) {
  currentHeroIndex = index;
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".indicator-dot");
  
  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

window.prevHeroSlide = function() {
  let prevIdx = (currentHeroIndex - 1 + HERO_ITEMS.length) % HERO_ITEMS.length;
  setHeroSlide(prevIdx);
}

window.nextHeroSlide = function() {
  let nextIdx = (currentHeroIndex + 1) % HERO_ITEMS.length;
  setHeroSlide(nextIdx);
}

// Infinite Luxury Ticker/Marquee animation setup
function initTicker() {
  const container = document.getElementById("luxury-ticker-track");
  if (!container) return;

  const tickerItems = [
    "images/hero_front.png",
    "Products/WhatsApp Image 2026-07-19 at 2.19.18 PM.jpeg",
    "Products/WhatsApp Image 2026-07-19 at 2.14.33 PM.jpeg",
    "Products/WhatsApp Image 2026-07-19 at 2.11.15 PM.jpeg",
    "Products/WhatsApp Image 2026-07-19 at 2.06.22 PM.jpeg",
    "Products/WhatsApp Image 2026-07-19 at 1.57.53 PM.jpeg",
    "Products/WhatsApp Image 2026-07-19 at 1.48.27 PM.jpeg",
    "Products/WhatsApp Image 2026-07-19 at 1.44.24 PM.jpeg",
    "Products/WhatsApp Image 2026-07-19 at 1.39.26 PM.jpeg",
  ];

  const fullTrack = [...tickerItems, ...tickerItems, ...tickerItems];
  
  container.innerHTML = fullTrack.map((img, index) => `
    <div class="ticker-item">
      <img src="${img}" alt="Luxury jewelry detail ${index}" onerror="this.src='images/logo.jpg'">
      <div class="ticker-glow"></div>
    </div>
  `).join("");
}

// Canvas-based background particles
function initParticles() {
  const canvas = document.getElementById("global-bg-canvas");
  if (canvas) {
    canvas.style.display = "none"; // Hide canvas globally
  }
  return; // Stop animation loop completely to run at buttery 120 FPS using CSS backgrounds
  
  const ctx = canvas.getContext("2d");
  
  let width, height;
  let particles = [];
  let crystals = [];
  let ribbons = [];
  let auras = [];
  let mouse = { x: null, y: null, tx: 0, ty: 0 };
  
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // Track mouse movements for parallax and interactivity
  window.addEventListener("mousemove", (e) => {
    mouse.tx = e.clientX;
    mouse.ty = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.tx = width / 2;
    mouse.ty = height / 2;
  });

  // Ease mouse coordinates for smooth lag-effect animations
  function updateMouse() {
    if (mouse.x === null) {
      mouse.x = mouse.tx = width / 2;
      mouse.y = mouse.ty = height / 2;
    }
    mouse.x += (mouse.tx - mouse.x) * 0.08;
    mouse.y += (mouse.ty - mouse.y) * 0.08;
  }

  // Colored mesh gradient aura blobs
  class Aura {
    constructor(color, radius) {
      this.color = color;
      this.radius = radius;
      this.reset();
      this.x = Math.random() * width;
      this.y = Math.random() * height;
    }
    reset() {
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      // Bound checking with soft direction change
      if (this.x < -this.radius || this.x > width + this.radius) this.vx *= -1;
      if (this.y < -this.radius || this.y > height + this.radius) this.vy *= -1;
    }
    draw() {
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
      grad.addColorStop(0, this.color);
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Glistening Diamond & Gold twinkling sparkles with 3D depth
  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * height;
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + 10;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = -(Math.random() * 0.5 + 0.15);
      this.radius = Math.random() * 2.0 + 0.8;
      this.alpha = 0;
      this.targetAlpha = Math.random() * 0.6 + 0.15; // brighter opacity
      this.speedAlpha = Math.random() * 0.008 + 0.003;
      
      // Sparkling twinkling cycle params
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.twinkleSpeed = Math.random() * 0.03 + 0.01;
      
      // Choose luxurious gold, diamond-white or sapphire-tint color
      const colors = [
        "rgba(212, 175, 55, ",  // Gold
        "rgba(255, 255, 255, ", // Diamond White
        "rgba(224, 231, 255, ", // Ice Indigo
        "rgba(192, 192, 192, "  // Silver
      ];
      this.baseColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Sparkle style (star or circle)
      this.isStar = Math.random() < 0.25;
      this.spikes = 4;
      this.innerRad = this.radius * 0.3;
      this.outerRad = this.radius * 2.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.twinklePhase += this.twinkleSpeed;
      
      // Fade in on birth
      if (this.alpha < this.targetAlpha) {
        this.alpha += this.speedAlpha;
      }
      
      if (this.y < -20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }
    draw() {
      // Calculate twinkling alpha using sine modulation
      const twinkleAlpha = Math.max(0.05, this.alpha * (0.6 + 0.4 * Math.sin(this.twinklePhase)));
      const color = this.baseColor + twinkleAlpha + ")";
      
      if (this.isStar) {
        // Draw 4-point glowing star (removed heavy shadowBlur for 60FPS)
        let cx = this.x;
        let cy = this.y;
        let rot = Math.PI / 2 * 3;
        let step = Math.PI / this.spikes;
        
        ctx.beginPath();
        ctx.moveTo(cx, cy - this.outerRad);
        for (let i = 0; i < this.spikes; i++) {
          let x = cx + Math.cos(rot) * this.outerRad;
          let y = cy + Math.sin(rot) * this.outerRad;
          ctx.lineTo(x, y);
          rot += step;
          
          x = cx + Math.cos(rot) * this.innerRad;
          y = cy + Math.sin(rot) * this.innerRad;
          ctx.lineTo(x, y);
          rot += step;
        }
        ctx.lineTo(cx, cy - this.outerRad);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
      } else {
        // Draw standard soft circle particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
    }
  }

  // Golden rotating wireframe 3D Octahedron gems
  class Crystal {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.z = Math.random() * 100 + 50; // depth
      this.size = Math.random() * 35 + 20;
      this.rotX = Math.random() * Math.PI;
      this.rotY = Math.random() * Math.PI;
      this.rotSpeedX = (Math.random() - 0.5) * 0.006;
      this.rotSpeedY = (Math.random() - 0.5) * 0.006;
      this.vx = (Math.random() - 0.5) * 0.12;
      this.vy = (Math.random() - 0.5) * 0.12;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.rotX += this.rotSpeedX;
      this.rotY += this.rotSpeedY;

      // Wrap-around screen bounds
      if (this.x < -100) this.x = width + 100;
      if (this.x > width + 100) this.x = -100;
      if (this.y < -100) this.y = height + 100;
      if (this.y > height + 100) this.y = -100;
    }
    draw() {
      const points = [
        { x: 0, y: -this.size, z: 0 },
        { x: 0, y: this.size, z: 0 },
        { x: -this.size, y: 0, z: 0 },
        { x: this.size, y: 0, z: 0 },
        { x: 0, y: 0, z: -this.size },
        { x: 0, y: 0, z: this.size }
      ];

      const rotated = points.map(p => {
        let y1 = p.y * Math.cos(this.rotX) - p.z * Math.sin(this.rotX);
        let z1 = p.y * Math.sin(this.rotX) + p.z * Math.cos(this.rotX);
        let x2 = p.x * Math.cos(this.rotY) + z1 * Math.sin(this.rotY);
        let z2 = -p.x * Math.sin(this.rotY) + z1 * Math.cos(this.rotY);
        
        const scale = 200 / (200 + this.z + z2);
        const parallaxX = (mouse.x - width / 2) * (14 / this.z);
        const parallaxY = (mouse.y - height / 2) * (14 / this.z);

        return {
          x: this.x + x2 * scale + parallaxX,
          y: this.y + y1 * scale + parallaxY
        };
      });

      const edges = [
        [0, 2], [0, 3], [0, 4], [0, 5],
        [1, 2], [1, 3], [1, 4], [1, 5],
        [2, 4], [4, 3], [3, 5], [5, 2]
      ];

      // Draw wireframe connecting paths with soft luxury gold stroke
      ctx.save();
      ctx.beginPath();
      edges.forEach(([u, v]) => {
        ctx.moveTo(rotated[u].x, rotated[u].y);
        ctx.lineTo(rotated[v].x, rotated[v].y);
      });
      ctx.strokeStyle = "rgba(212, 175, 55, 0.18)";
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // Fill crystal facets with very soft golden aura fill
      ctx.fillStyle = "rgba(212, 175, 55, 0.035)";
      ctx.beginPath();
      ctx.moveTo(rotated[0].x, rotated[0].y);
      ctx.lineTo(rotated[2].x, rotated[2].y);
      ctx.lineTo(rotated[4].x, rotated[4].y);
      ctx.closePath();
      ctx.fill();

      // Draw vertices with golden glow sparkles
      ctx.fillStyle = "rgba(212, 175, 55, 0.4)";
      rotated.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.0, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }
  }

  // Holographic Sine Waves / Ribbons in soft gold/indigo hues
  class Ribbon {
    constructor(y, color, speed, amp, freq) {
      this.y = y;
      this.color = color;
      this.speed = speed;
      this.amp = amp;
      this.freq = freq;
      this.phase = Math.random() * 100;
    }
    update() {
      this.phase += this.speed;
    }
    draw() {
      ctx.beginPath();
      ctx.moveTo(0, this.y);
      
      const step = 20;
      for (let x = 0; x <= width + step; x += step) {
        const mouseFactor = (mouse.y - height / 2) * 0.06 * Math.sin(x * 0.002);
        const dy = Math.sin(x * this.freq + this.phase) * this.amp + mouseFactor;
        ctx.lineTo(x, this.y + dy);
      }

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  }

  // Initialize objects
  for (let i = 0; i < 75; i++) particles.push(new Particle());
  for (let i = 0; i < 5; i++) crystals.push(new Crystal());
  
  // Auras: Soft luxurious mesh gradient glows
  auras.push(new Aura("rgba(99, 102, 241, 0.05)", 400)); // Sapphire Indigo
  auras.push(new Aura("rgba(212, 175, 55, 0.04)", 350));  // Premium Gold
  auras.push(new Aura("rgba(236, 72, 153, 0.03)", 300));  // Rose Pink
  
  // Holographic golden-tint ribbons
  ribbons.push(new Ribbon(height * 0.35, "rgba(212, 175, 55, 0.05)", 0.002, 40, 0.0015));
  ribbons.push(new Ribbon(height * 0.65, "rgba(99, 102, 241, 0.04)", 0.0015, 45, 0.001));

  function animate() {
    // Fill canvas background with clean Apple-like frosted base
    ctx.fillStyle = "#f5f7fc";
    ctx.fillRect(0, 0, width, height);

    // 1. Draw Mesh Gradient Auras
    auras.forEach(a => {
      a.update();
      a.draw();
    });

    // 2. Draw Dot Matrix Tech Grid Texture
    ctx.beginPath();
    const dotSpacing = 60;
    for (let x = 0; x < width; x += dotSpacing) {
      for (let y = 0; y < height; y += dotSpacing) {
        ctx.arc(x, y, 0.8, 0, Math.PI * 2);
      }
    }
    ctx.fillStyle = "rgba(15, 23, 42, 0.02)";
    ctx.fill();

    updateMouse();

    // 3. Draw energy ribbons
    ribbons.forEach(r => {
      r.update();
      r.draw();
    });

    // 4. Update and draw 3D crystals
    crystals.forEach(c => {
      c.update();
      c.draw();
    });

    // 5. Update and draw glistening twinkling particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

function renderCategories() {
  const categoriesList = [
    { name: "Necklaces", desc: "Chokers, bridal sets and haras", img: "Products/Necklace.jpeg" },
    { name: "Earrings", desc: "Jhumkas, studs and drop pairs", img: "Products/Earrings/earring2.png" },
    { name: "Mangalsutra", desc: "Traditional holy thread chains", img: "Products/New folder/WhatsApp Image 2026-07-02 at 2.47.26 PM.png" },
    { name: "Pendant Sets", desc: "Lightweight gemstone locket pairs", img: "Products/New folder/WhatsApp Image 2026-07-02 at 2.22.49 PM.png" }
  ];

  const grid = document.getElementById("categories-grid");
  if (!grid) return;

  grid.innerHTML = categoriesList.map(cat => `
    <div class="category-card" onclick="filterByCategory('${cat.name}')">
      <img src="${cat.img}" class="category-bg" alt="${cat.name}">
      <div class="category-overlay"></div>
      <div class="category-info">
        <h3 class="category-title">${cat.name}</h3>
        <p class="category-desc">${cat.desc}</p>
      </div>
    </div>
  `).join("");
}

window.filterByCategory = function(category) {
  currentCategory = category;
  
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    if (tab.getAttribute("data-category") === category) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  renderProducts();
  const collectionsElem = document.getElementById("collections");
  if (collectionsElem) {
    const yOffset = -115; // Exact offset to clear the fixed glass header and announcement bar
    const y = collectionsElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

// 4. Product Catalogue Functions
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  let filtered = products.filter(p => {
    const catMatch = currentCategory === "All" || p.category === currentCategory;
    const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-10 text-stone-500" style="grid-column: 1 / -1;">
        <p class="font-serif text-xl">No products found matching your search</p>
        <button onclick="clearSearch()" class="mt-4 text-sm font-semibold text-primary-gold underline">Clear filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((p, idx) => {
    const isWished = wishlist.includes(p.id);
    
    // Minimalist options
    const options = [
      { name: "Gold Finish", class: "swatch-gold", color: "#d4af37" },
      { name: "Silver Finish", class: "swatch-silver", color: "#c0c0c0" }
    ];

    if (!selectedOptionsState[p.id]) {
      selectedOptionsState[p.id] = options[0].name;
    }
    const currentSelected = selectedOptionsState[p.id];
    
    const isSilver = currentSelected.includes("Silver");
    const filterClass = isSilver ? "finish-silver" : "finish-gold";

    const animationDelay = (idx % 8) * 0.04;

    return `
      <div class="product-card" style="animation-delay: ${animationDelay}s; cursor: pointer;" onclick="openProductDetailsModal(${p.id})">
        <span class="product-badge ${p.tag.toLowerCase() === 'new' ? 'new' : 'featured'}">${p.tag}</span>
        <button class="wishlist-toggle-btn ${isWished ? 'active' : ''}" onclick="toggleWishlist(${p.id}); event.stopPropagation();" aria-label="Add to wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>
        <div class="product-img-wrapper">
          <img src="${p.image}" class="product-img ${filterClass}" alt="${p.name}" onerror="this.src='images/logo.jpg'">
        </div>
        <div class="product-details">
          <span class="product-cat">${p.category}</span>
          <h3 class="product-name" title="${p.name}">${p.name}</h3>
          
          <div class="product-rating">
            <div class="stars-row">
              ${Array(5).fill().map((_, i) => `
                <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              `).join("")}
            </div>
            <span>4.8</span>
          </div>

          <!-- Product Swatches/Options Selector -->
          <div class="product-swatches-container">
            <span class="swatch-label">Metal Finish:</span>
            <div class="swatches-list">
              ${options.map(opt => {
                const isActive = currentSelected === opt.name;
                return `
                  <button class="color-swatch-btn ${isActive ? 'active' : ''}" 
                          style="background: linear-gradient(135deg, ${opt.color}, #ffffff);" 
                          onclick="selectProductOption(${p.id}, '${opt.name}'); event.stopPropagation();" 
                          title="${opt.name}"></button>
                `;
              }).join("")}
            </div>
          </div>

          <div class="product-prices">
            <span class="price-now">${formatPrice(p.price)}</span>
            <span class="price-was">${formatPrice(p.oldPrice)}</span>
          </div>
          
          <button class="add-to-cart-btn magnetic" data-strength="15" onclick="triggerAddToCart(${p.id}); event.stopPropagation();">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Re-enable mouse actions
  initMagneticButtons();
}

window.selectProductOption = function(productId, optionValue) {
  selectedOptionsState[productId] = optionValue;
  renderProducts();
}

window.triggerAddToCart = function(productId) {
  const selectedOption = selectedOptionsState[productId] || "Gold Finish";
  addToCartWithOption(productId, selectedOption);
}

window.clearSearch = function() {
  searchQuery = "";
  const input = document.getElementById("search-input");
  if (input) input.value = "";
  renderProducts();
}

// 5. Cart Management
window.toggleCart = function(forceState) {
  isCartOpen = forceState !== undefined ? forceState : !isCartOpen;
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  
  if (isCartOpen) {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    renderCart();
  } else {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
  }
}

window.addToCart = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const defaultOpt = selectedOptionsState[productId] || "Gold Finish";
  addToCartWithOption(productId, defaultOpt);
}

window.addToCartWithOption = function(productId, option) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cartItem = cart.find(item => item.id === productId && item.option === option);
  if (cartItem) {
    cartItem.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      qty: 1,
      option: option
    });
  }

  localStorage.setItem('mj_cart', JSON.stringify(cart));
  renderCart();
  toggleCart(true);
}

window.updateQuantity = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) updateQuantityWithOption(productId, item.option, delta);
}

window.updateQuantityWithOption = function(productId, option, delta) {
  const cartItem = cart.find(item => item.id === productId && item.option === option);
  if (!cartItem) return;

  cartItem.qty += delta;
  if (cartItem.qty <= 0) {
    cart = cart.filter(item => !(item.id === productId && item.option === option));
  }

  localStorage.setItem('mj_cart', JSON.stringify(cart));
  renderCart();
}

window.removeFromCart = function(productId) {
  const item = cart.find(i => i.id === productId);
  if (item) removeFromCartWithOption(productId, item.option);
}

window.removeFromCartWithOption = function(productId, option) {
  cart = cart.filter(item => !(item.id === productId && item.option === option));
  localStorage.setItem('mj_cart', JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cartBadge = document.getElementById("cart-count-badge");
  const cartItemsCount = cart.reduce((acc, item) => acc + item.qty, 0);
  
  if (cartBadge) {
    cartBadge.innerText = cartItemsCount;
    cartBadge.style.display = cartItemsCount > 0 ? "flex" : "none";
  }

  const content = document.getElementById("cart-drawer-content");
  const footer = document.getElementById("cart-drawer-footer");
  if (!content) return;

  if (cart.length === 0) {
    content.innerHTML = `
      <div class="drawer-empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-stone-600">
          <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
        <p class="empty-state-title">Your cart is empty</p>
        <p class="empty-state-desc">Add jewellery pieces from the collection to get started.</p>
      </div>
    `;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "block";

  content.innerHTML = `
    <div class="cart-items-list">
      ${cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" class="cart-item-img" alt="${item.name}" onerror="this.src='images/logo.jpg'">
          <div class="cart-item-details">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-option" style="font-size:0.75rem; color:var(--text-secondary); font-weight: 600; margin-bottom: 0.25rem;">Finish: ${item.option || 'Gold Finish'}</p>
            <p class="cart-item-price">${formatPrice(item.price)}</p>
            <div class="cart-item-actions">
              <div class="qty-counter">
                <button class="qty-btn" onclick="updateQuantityWithOption(${item.id}, '${item.option}', -1)">-</button>
                <div class="qty-val">${item.qty}</div>
                <button class="qty-btn" onclick="updateQuantityWithOption(${item.id}, '${item.option}', 1)">+</button>
              </div>
              <button class="item-remove-btn" onclick="removeFromCartWithOption(${item.id}, '${item.option}')">Remove</button>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  // Calculate pricing summaries
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = subtotal > 2000 ? 250 : 0;
  const shipping = (subtotal > 0 && subtotal < 1999) ? 99 : 0;
  const grandTotal = Math.max(subtotal - discount + shipping, 0);

  const subtotalEl = document.getElementById("summary-subtotal");
  const discountEl = document.getElementById("summary-discount");
  const shippingEl = document.getElementById("summary-shipping");
  const totalEl = document.getElementById("summary-total");

  if (subtotalEl) subtotalEl.innerText = formatPrice(subtotal);
  if (discountEl) discountEl.innerText = discount > 0 ? `-${formatPrice(discount)}` : "₹0";
  if (shippingEl) shippingEl.innerText = shipping > 0 ? formatPrice(shipping) : "Free";
  if (totalEl) totalEl.innerText = formatPrice(grandTotal);

  const formEmail = document.getElementById("checkout-email");
  const formPhone = document.getElementById("checkout-phone");
  const formName = document.getElementById("checkout-name");
  
  if (currentUser) {
    if (formEmail && !formEmail.value) formEmail.value = currentUser.email || "";
    if (formPhone && (!formPhone.value || formPhone.value === "+91")) formPhone.value = currentUser.phone || "";
    if (formName && !formName.value) formName.value = currentUser.name || "";
  }
}

// Payment Method Switcher logic
window.handlePaymentMethodChange = function(select) {
  const qrWrapper = document.getElementById("upi-qr-wrapper");
  if (!qrWrapper) return;
  if (select.value === "upi") {
    qrWrapper.style.display = "flex";
  } else {
    qrWrapper.style.display = "none";
  }
}

// 6. Wishlist Management
window.toggleWishlistDrawer = function(forceState) {
  isWishlistOpen = forceState !== undefined ? forceState : !isWishlistOpen;
  const drawer = document.getElementById("wishlist-drawer");
  const backdrop = document.getElementById("wishlist-backdrop");
  
  if (isWishlistOpen) {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    renderWishlist();
  } else {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
  }
}

window.toggleWishlist = function(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(productId);
  }

  localStorage.setItem('mj_wishlist', JSON.stringify(wishlist));
  renderWishlist();
  renderProducts();
}

function renderWishlist() {
  const wishlistBadge = document.getElementById("wishlist-count-badge");
  if (wishlistBadge) {
    wishlistBadge.innerText = wishlist.length;
    wishlistBadge.style.display = wishlist.length > 0 ? "flex" : "none";
  }

  const content = document.getElementById("wishlist-drawer-content");
  if (!content) return;

  if (wishlist.length === 0) {
    content.innerHTML = `
      <div class="drawer-empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-stone-600">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
        <p class="empty-state-title">Your wishlist is empty</p>
        <p class="empty-state-desc">Save pieces you love here to shop them later.</p>
      </div>
    `;
    return;
  }

  const wishedItems = products.filter(p => wishlist.includes(p.id));
  content.innerHTML = `
    <div class="cart-items-list">
      ${wishedItems.map(item => `
        <div class="cart-item">
          <img src="${item.image}" class="cart-item-img" alt="${item.name}" onerror="this.src='images/logo.jpg'">
          <div class="cart-item-details">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-price">${formatPrice(item.price)}</p>
            <div class="cart-item-actions">
              <button class="add-to-cart-btn magnetic" style="height: 1.85rem; padding: 0 0.75rem; font-size: 0.7rem; width: auto;" onclick="addToCart(${item.id})">Add</button>
              <button class="item-remove-btn" onclick="toggleWishlist(${item.id})">Remove</button>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  initMagneticButtons();
}

// 7. Full-Stack User Authentication
window.toggleAuthModal = function(forceState, mode) {
  isAuthOpen = forceState !== undefined ? forceState : !isAuthOpen;
  if (mode) authMode = mode;
  
  const modal = document.getElementById("auth-modal");
  if (!modal) return;

  if (isAuthOpen) {
    modal.classList.add("open");
    renderAuthForm();
  } else {
    modal.classList.remove("open");
  }
}

window.setAuthMode = function(mode) {
  authMode = mode;
  renderAuthForm();
}

function renderAuthForm() {
  const tabs = document.querySelectorAll(".auth-tab-btn");
  tabs.forEach(btn => {
    if (btn.getAttribute("data-mode") === authMode) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const container = document.getElementById("auth-form-container");
  if (!container) return;

  if (authMode === "login") {
    container.innerHTML = `
      <form onsubmit="handleLoginSubmit(event)" class="space-y-4" style="display:flex; flex-direction:column; gap:0.75rem;">
        <div class="form-group">
          <label class="form-label">Email or Phone Number</label>
          <input type="text" id="login-identifier" class="form-input" placeholder="e.g. admin@mahajanjeweller.in or +91..." required>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" id="login-password" class="form-input" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" required>
        </div>
        <button type="submit" class="btn-primary w-full" style="margin-top:0.5rem; height:2.5rem; padding:0;">Login</button>
        <p class="auth-form-footer">
          Don't have an account? <a href="#" class="auth-form-link" onclick="setAuthMode('signup')">Sign Up</a>
        </p>
      </form>
    `;
  } else {
    container.innerHTML = `
      <form onsubmit="handleSignupSubmit(event)" class="space-y-4" style="display:flex; flex-direction:column; gap:0.75rem;">
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input type="text" id="signup-name" class="form-input" placeholder="Enter name" required>
        </div>
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" id="signup-email" class="form-input" placeholder="email@example.com" required>
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number</label>
          <input type="tel" id="signup-phone" class="form-input" value="+91" placeholder="+91..." required>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" id="signup-password" class="form-input" placeholder="Minimum 6 characters" required>
        </div>
        <button type="submit" class="btn-primary w-full" style="margin-top:0.5rem; height:2.5rem; padding:0;">Sign Up</button>
        <p class="auth-form-footer">
          Already have an account? <a href="#" class="auth-form-link" onclick="setAuthMode('login')">Login</a>
        </p>
      </form>
    `;
  }
  initMagneticButtons();
}

window.handleLoginSubmit = async function(e) {
  e.preventDefault();
  const identifier = document.getElementById("login-identifier")?.value.trim();
  const password = document.getElementById("login-password")?.value;

  if (!identifier || !password) return;

  // Admin login bypass for offline static preview
  if (identifier.toLowerCase() === "admin" && password === "admin") {
    currentUser = { email: "admin@mahajanjewellers.com", name: "System Admin", role: "admin" };
    localStorage.setItem('mj_user', JSON.stringify(currentUser));
    alert("Logged in as Admin (Offline Static Mode)!");
    updateAuthHeader();
    checkAdminPanelAccess();
    toggleAuthModal(false);
    renderCart();
    return;
  }

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password })
    });

    if (res.ok) {
      currentUser = await res.json();
      localStorage.setItem('mj_user', JSON.stringify(currentUser));
      alert("Login successful!");
      updateAuthHeader();
      checkAdminPanelAccess();
      toggleAuthModal(false);
      renderCart();
      return;
    }
  } catch (err) {
    console.warn("Login API failed, checking offline storage:", err);
  }

  // LocalStorage Fallback Authentication
  const localUsers = JSON.parse(localStorage.getItem('mj_simulated_users') || '[]');
  const user = localUsers.find(u => (u.email === identifier || u.phone === identifier) && u.password === password);
  if (user) {
    currentUser = { email: user.email, name: user.name, role: user.role || "customer", phone: user.phone };
    localStorage.setItem('mj_user', JSON.stringify(currentUser));
    alert("Login successful (Offline Mode)!");
    updateAuthHeader();
    checkAdminPanelAccess();
    toggleAuthModal(false);
    renderCart();
  } else {
    alert("Invalid credentials in offline database. Please sign up first!");
  }
}

window.handleSignupSubmit = async function(e) {
  e.preventDefault();
  const name = document.getElementById("signup-name")?.value.trim();
  const email = document.getElementById("signup-email")?.value.trim();
  const phone = document.getElementById("signup-phone")?.value.trim();
  const password = document.getElementById("signup-password")?.value;

  if (!name || !email || !phone || !password) return;

  const newUser = { name, email, phone, password, role: "customer" };

  try {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    if (res.ok) {
      currentUser = await res.json();
      localStorage.setItem('mj_user', JSON.stringify(currentUser));
      alert("Registration successful!");
      updateAuthHeader();
      toggleAuthModal(false);
      renderCart();
      return;
    }
  } catch (err) {
    console.warn("Signup API failed, checking offline storage:", err);
  }

  // LocalStorage Fallback Sign Up
  const localUsers = JSON.parse(localStorage.getItem('mj_simulated_users') || '[]');
  if (localUsers.some(u => u.email === email || u.phone === phone)) {
    alert("User with this email or phone already exists in offline database!");
    return;
  }
  localUsers.push(newUser);
  localStorage.setItem('mj_simulated_users', JSON.stringify(localUsers));

  currentUser = { name, email, phone, role: "customer" };
  localStorage.setItem('mj_user', JSON.stringify(currentUser));
  alert("Registration successful (Offline local mode)!");
  updateAuthHeader();
  toggleAuthModal(false);
  renderCart();
}

window.handleSignupSubmit = async function(e) {
  e.preventDefault();
  const name = document.getElementById("signup-name")?.value.trim();
  const email = document.getElementById("signup-email")?.value.trim();
  const phone = document.getElementById("signup-phone")?.value.trim();
  const password = document.getElementById("signup-password")?.value;

  if (!name || !email || !phone || !password) return;

  try {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        role: "customer"
      })
    });

    if (res.ok) {
      currentUser = await res.json();
      localStorage.setItem('mj_user', JSON.stringify(currentUser));
      alert("Registration successful!");
      updateAuthHeader();
      toggleAuthModal(false);
      renderCart();
    } else {
      const err = await res.json();
      alert(err.error || "Signup failed.");
    }
  } catch (err) {
    alert("Connection error: " + err.message);
  }
}

window.handleLogout = function() {
  if (confirm("Are you sure you want to logout?")) {
    currentUser = null;
    localStorage.removeItem('mj_user');
    updateAuthHeader();
    checkAdminPanelAccess();
    alert("Logged out successfully.");
    renderCart();
  }
}

function updateAuthHeader() {
  const loginBtn = document.getElementById("header-login-btn");
  if (!loginBtn) return;

  if (currentUser) {
    loginBtn.innerHTML = `
      <div onclick="handleLogout()" title="Logout (${currentUser.name})" style="display:flex; align-items:center; gap:0.375rem; cursor:pointer;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        <span class="text-xs font-semibold uppercase tracking-wide hidden sm:inline" style="color:var(--text-primary);">${currentUser.name}</span>
      </div>
    `;
  } else {
    loginBtn.innerHTML = `
      <div onclick="toggleAuthModal(true, 'login')" title="Login / Sign Up">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
    `;
  }
}

function checkAdminPanelAccess() {
  const adminLinks = document.querySelectorAll(".admin-only-link");
  adminLinks.forEach(link => {
    if (currentUser && currentUser.role === "admin") {
      link.style.display = "inline-block";
    } else {
      link.style.display = "none";
    }
  });
}

// 8. Order Placement & Tracking
window.handleCheckoutSubmit = async function(e) {
  e.preventDefault();
  
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  if (!currentUser) {
    alert("You must be logged in to place an order!");
    toggleAuthModal(true, 'login');
    return;
  }

  const name = document.getElementById("checkout-name")?.value.trim();
  const email = document.getElementById("checkout-email")?.value.trim();
  const phone = document.getElementById("checkout-phone")?.value.trim();
  const address = document.getElementById("checkout-address")?.value.trim();
  const city = document.getElementById("checkout-city")?.value.trim();
  const pincode = document.getElementById("checkout-pincode")?.value.trim();
  const paymentMethod = document.getElementById("checkout-payment")?.value;

  if (!name || !email || !phone || !address || !city || !pincode || !paymentMethod) {
    alert("Please fill in all checkout fields.");
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = subtotal > 2000 ? 250 : 0;
  const shipping = (subtotal > 0 && subtotal < 1999) ? 99 : 0;
  const total = Math.max(subtotal - discount + shipping, 0);

  const orderId = `MJ${Date.now().toString().slice(-6)}`;
  const newOrder = {
    id: orderId,
    userId: currentUser.email || "cust_guest",
    total: total,
    items: [...cart],
    paymentMethod: paymentMethod,
    paymentStatus: paymentMethod === "cod" ? "COD pending" : "Paid simulation",
    status: "placed",
    customer: {
      fullName: name,
      email: email,
      phone: phone,
      address: address,
      city: city,
      pincode: pincode
    },
    subtotal: subtotal,
    discount: discount,
    shipping: shipping,
    createdAt: new Date().toISOString()
  };

  // Try API first
  let placementSuccess = false;
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    });

    if (res.ok) {
      placementSuccess = true;
      await loadOrders();
    }
  } catch (err) {
    console.warn("Order placement API failed, using local storage instead:", err);
  }

  // LocalStorage fallback order saving
  if (!placementSuccess) {
    const localOrders = JSON.parse(localStorage.getItem('mj_orders') || '[]');
    localOrders.unshift(newOrder);
    localStorage.setItem('mj_orders', JSON.stringify(localOrders));
    orders = localOrders;
    placementSuccess = true;
  }

  if (placementSuccess) {
    // Reset cart
    cart = [];
    localStorage.removeItem('mj_cart');
    renderCart();
    toggleCart(false);

    showOrderSuccessModal(orderId, name, total);

    // Open WhatsApp pre-filled order details
    const whatsappNumber = "919418718000";
    const orderItemsText = newOrder.items.map(item => `- ${item.name} (${item.option || 'Gold Finish'}) x${item.qty} [${formatPrice(item.price * item.qty)}]`).join('%0A');
    const msg = `Hi Mahajan Jewellers, I would like to place an order:%0A%0A*Order ID:* ${orderId}%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Delivery Address:* ${address}, ${city} - ${pincode}%0A*Payment Method:* ${paymentMethod.toUpperCase()}%0A%0A*Items:*%0A${orderItemsText}%0A%0A*Grand Total:* ${formatPrice(total)}`;
    
    console.log("Redirecting order placement details to WhatsApp...");
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    }, 1500);
  }
}

function showOrderSuccessModal(orderId, customerName, total) {
  const modal = document.getElementById("order-success-modal");
  const modalBody = document.getElementById("order-success-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="order-success-content">
      <div class="order-success-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h3 class="order-success-title">Order Placed Successfully!</h3>
      <p class="order-success-desc">Thank you for shopping with us, <strong>${customerName}</strong>. Your premium jewellery order is being processed.</p>
      
      <div class="order-id-label">ORDER ID: ${orderId}</div>
      
      <p class="text-sm text-stone-500 mb-5">Total amount payable: <strong>${formatPrice(total)}</strong> on delivery.</p>
      
      <button onclick="closeOrderSuccessModal()" class="btn-primary magnetic" data-strength="15">Continue Shopping</button>
    </div>
  `;

  modal.classList.add("open");
  initMagneticButtons();
}

window.closeOrderSuccessModal = function() {
  const modal = document.getElementById("order-success-modal");
  if (modal) modal.classList.remove("open");
}

// 9. Admin Dashboard Overlay Panel
window.toggleAdminModal = function(forceState) {
  isAdminOpen = forceState !== undefined ? forceState : !isAdminOpen;
  
  if (isAdminOpen && (!currentUser || currentUser.role !== "admin")) {
    alert("Access Denied! Admin credentials required.");
    toggleAuthModal(true, 'login');
    return;
  }

  const modal = document.getElementById("admin-modal");
  if (!modal) return;

  if (isAdminOpen) {
    modal.classList.add("open");
    setAdminTab(adminActiveTab);
  } else {
    modal.classList.remove("open");
  }
}

window.setAdminTab = function(tab) {
  adminActiveTab = tab;
  
  const buttons = document.querySelectorAll(".admin-menu-item");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-tab") === tab) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const panels = document.querySelectorAll(".admin-panel");
  panels.forEach(p => {
    if (p.getAttribute("data-panel") === tab) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  if (tab === "overview") {
    renderAdminOverview();
  } else if (tab === "orders") {
    renderAdminOrders();
  } else if (tab === "products") {
    renderAdminProducts();
  }
}

function renderAdminOverview() {
  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);
  const pendingOrders = orders.filter(o => o.status === "placed").length;
  const shippedOrders = orders.filter(o => o.status === "shipped").length;
  const deliveredOrders = orders.filter(o => o.status === "delivered").length;

  const container = document.getElementById("admin-panel-overview");
  if (!container) return;

  container.innerHTML = `
    <h3 class="admin-panel-title mb-5">Overview Stats</h3>
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-bottom: 2rem;">
      <div style="background-color:rgba(255,255,255,0.02); border:1px solid var(--glass-border); padding:1.25rem; border-radius:0.375rem;">
        <span class="text-xs font-semibold uppercase text-stone-400">Total Revenue</span>
        <h4 style="font-family:var(--font-serif); font-size:1.75rem; color:var(--text-primary); margin-top:0.25rem;">${formatPrice(totalRevenue)}</h4>
      </div>
      <div style="background-color:rgba(255,255,255,0.02); border:1px solid var(--glass-border); padding:1.25rem; border-radius:0.375rem;">
        <span class="text-xs font-semibold uppercase text-stone-400">Pending Orders</span>
        <h4 style="font-family:var(--font-serif); font-size:1.75rem; color:var(--text-primary); margin-top:0.25rem;">${pendingOrders}</h4>
      </div>
      <div style="background-color:rgba(255,255,255,0.02); border:1px solid var(--glass-border); padding:1.25rem; border-radius:0.375rem;">
        <span class="text-xs font-semibold uppercase text-stone-400">Shipped/Delivered</span>
        <h4 style="font-family:var(--font-serif); font-size:1.75rem; color:var(--text-secondary); margin-top:0.25rem;">${shippedOrders + deliveredOrders}</h4>
      </div>
    </div>
    
    <h3 class="admin-panel-title mb-3">Quick Guide</h3>
    <div class="space-y-2 text-sm text-stone-400 leading-6">
      <p>&bull; As an administrator, you have full control over orders placed by clients.</p>
      <p>&bull; Navigate to the <strong>Orders</strong> tab to update tracking statuses or shipping actions.</p>
      <p>&bull; Navigate to the <strong>Products</strong> tab to add new jewelry designs, delete items, or edit prices.</p>
    </div>
  `;
}

function renderAdminOrders() {
  const container = document.getElementById("admin-panel-orders");
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <h3 class="admin-panel-title mb-3">Manage Orders</h3>
      <p class="text-stone-500">No orders placed yet.</p>
    `;
    return;
  }

  container.innerHTML = `
    <div class="admin-title-row">
      <h3 class="admin-panel-title">Manage Orders</h3>
      <button onclick="clearAllOrders()" class="text-xs font-semibold text-red-600 underline">Clear Order History</button>
    </div>
    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(o => `
            <tr>
              <td><strong>${o.id}</strong></td>
              <td>
                <div style="font-weight:700;">${o.customer.fullName}</div>
                <div style="font-size:0.75rem; color:var(--text-secondary);">${o.customer.phone}</div>
                <div style="font-size:0.75rem; color:var(--text-secondary); max-width:180px; overflow:hidden; text-overflow:ellipsis;">${o.customer.address}, ${o.customer.city}</div>
              </td>
              <td>
                ${o.items.map(item => `<div style="font-size:0.75rem;">${item.name} (x${item.qty})</div>`).join("")}
              </td>
              <td>${formatPrice(o.total)}</td>
              <td>
                <span class="badge-status ${o.status}">${o.status}</span>
              </td>
              <td>
                <select class="admin-action-select" onchange="updateOrderStatus('${o.id}', this.value)">
                  <option value="placed" ${o.status === 'placed' ? 'selected' : ''}>Placed</option>
                  <option value="confirmed" ${o.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                  <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                  <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                </select>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

window.updateOrderStatus = async function(orderId, newStatus) {
  try {
    const res = await fetch(`/api/orders/${orderId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
    if (res.ok) {
      await loadOrders();
      renderAdminOrders();
      alert(`Order ${orderId} updated to ${newStatus}.`);
    } else {
      alert("Failed to update status on server.");
    }
  } catch (err) {
    console.error(err);
  }
}

window.clearAllOrders = async function() {
  if (confirm("Are you sure you want to clear all order records?")) {
    try {
      const res = await fetch('/api/orders', { method: 'DELETE' });
      if (res.ok) {
        await loadOrders();
        renderAdminOrders();
      }
    } catch (err) {
      console.error(err);
    }
  }
}

function renderAdminProducts() {
  const container = document.getElementById("admin-panel-products");
  if (!container) return;

  container.innerHTML = `
    <div class="admin-title-row">
      <h3 class="admin-panel-title">Product Catalogue</h3>
      <button onclick="showAddProductForm()" class="btn-primary magnetic" data-strength="10" style="height:2rem; padding:0 1rem; font-size:0.75rem;">+ Add Product</button>
    </div>
    
    <div id="product-form-container" style="display:none; background-color:var(--glass-bg); border:1px solid var(--glass-border); padding:1.25rem; border-radius:0.375rem; margin-bottom:1.5rem;"></div>

    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Original Price</th>
            <th>Tag</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${products.map(p => `
            <tr>
              <td>${p.id}</td>
              <td>
                <div style="display:flex; align-items:center; gap:0.5rem;">
                  <img src="${p.image}" style="height:1.75rem; width:1.75rem; object-fit:cover; border-radius:0.25rem;" onerror="this.src='images/logo.jpg'">
                  <strong>${p.name}</strong>
                </div>
              </td>
              <td>${p.category}</td>
              <td>${formatPrice(p.price)}</td>
              <td>${formatPrice(p.oldPrice)}</td>
              <td><span style="font-size:0.75rem; font-weight:700; color:var(--text-primary);">${p.tag}</span></td>
              <td>
                <button onclick="editProductDetails(${p.id})" class="text-xs font-semibold text-primary-gold underline mr-2">Edit</button>
                <button onclick="deleteProductDetails(${p.id})" class="text-xs font-semibold text-red-600 underline">Delete</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
  initMagneticButtons();
}

window.showAddProductForm = function() {
  editProduct = null;
  const container = document.getElementById("product-form-container");
  if (!container) return;

  container.style.display = "block";
  container.innerHTML = `
    <h4 class="font-serif text-lg mb-3">Add New Jewellery Item</h4>
    <form onsubmit="handleProductFormSubmit(event)" style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
      <div class="form-group">
        <label class="form-label">Product Name</label>
        <input type="text" id="admin-p-name" class="form-input" placeholder="e.g. Kundan Necklace" required>
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <select id="admin-p-cat" class="form-select" required>
          <option value="Necklaces">Necklaces</option>
          <option value="Earrings">Earrings</option>
          <option value="Mangalsutra">Mangalsutra</option>
          <option value="Pendant Sets">Pendant Sets</option>
          <option value="Jewellery Sets">Jewellery Sets</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Price (INR)</label>
        <input type="number" id="admin-p-price" class="form-input" placeholder="999" required>
      </div>
      <div class="form-group">
        <label class="form-label">Old Price (INR)</label>
        <input type="number" id="admin-p-oldprice" class="form-input" placeholder="1599" required>
      </div>
      <div class="form-group">
        <label class="form-label">Image URL / Path</label>
        <input type="text" id="admin-p-image" class="form-input" value="images/logo.jpg" required>
      </div>
      <div class="form-group">
        <label class="form-label">Product Tag</label>
        <select id="admin-p-tag" class="form-select">
          <option value="New">New</option>
          <option value="Featured">Featured</option>
        </select>
      </div>
      <div class="col-span-full" style="grid-column: span 2;">
        <button type="submit" class="btn-primary magnetic" data-strength="10" style="height:2rem; font-size:0.75rem; padding: 0 1.25rem;">Save Product</button>
        <button type="button" onclick="cancelProductForm()" class="btn-secondary" style="height:2rem; font-size:0.75rem; margin-left:0.5rem; background:transparent; color:white; border:1px solid var(--glass-border); border-radius:0.375rem; padding: 0 1.25rem;">Cancel</button>
      </div>
    </form>
  `;
  initMagneticButtons();
}

window.editProductDetails = function(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  editProduct = p;
  const container = document.getElementById("product-form-container");
  if (!container) return;

  container.style.display = "block";
  container.innerHTML = `
    <h4 class="font-serif text-lg mb-3">Edit Product details: #${p.id}</h4>
    <form onsubmit="handleProductFormSubmit(event)" style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
      <div class="form-group">
        <label class="form-label">Product Name</label>
        <input type="text" id="admin-p-name" class="form-input" value="${p.name}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <select id="admin-p-cat" class="form-select" required>
          <option value="Necklaces" ${p.category === 'Necklaces' ? 'selected' : ''}>Necklaces</option>
          <option value="Earrings" ${p.category === 'Earrings' ? 'selected' : ''}>Earrings</option>
          <option value="Mangalsutra" ${p.category === 'Mangalsutra' ? 'selected' : ''}>Mangalsutra</option>
          <option value="Pendant Sets" ${p.category === 'Pendant Sets' ? 'selected' : ''}>Pendant Sets</option>
          <option value="Jewellery Sets" ${p.category === 'Jewellery Sets' ? 'selected' : ''}>Jewellery Sets</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Price (INR)</label>
        <input type="number" id="admin-p-price" class="form-input" value="${p.price}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Old Price (INR)</label>
        <input type="number" id="admin-p-oldprice" class="form-input" value="${p.oldPrice}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Image URL / Path</label>
        <input type="text" id="admin-p-image" class="form-input" value="${p.image}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Product Tag</label>
        <select id="admin-p-tag" class="form-select">
          <option value="New" ${p.tag === 'New' ? 'selected' : ''}>New</option>
          <option value="Featured" ${p.tag === 'Featured' ? 'selected' : ''}>Featured</option>
        </select>
      </div>
      <div class="col-span-full" style="grid-column: span 2;">
        <button type="submit" class="btn-primary magnetic" data-strength="10" style="height:2rem; font-size:0.75rem; padding: 0 1.25rem;">Update Product</button>
        <button type="button" onclick="cancelProductForm()" class="btn-secondary" style="height:2rem; font-size:0.75rem; margin-left:0.5rem; background:transparent; color:white; border:1px solid var(--glass-border); border-radius:0.375rem; padding: 0 1.25rem;">Cancel</button>
      </div>
    </form>
  `;
  initMagneticButtons();
}

window.cancelProductForm = function() {
  const container = document.getElementById("product-form-container");
  if (container) {
    container.style.display = "none";
    container.innerHTML = "";
  }
}

window.handleProductFormSubmit = async function(e) {
  e.preventDefault();
  
  const name = document.getElementById("admin-p-name")?.value.trim();
  const category = document.getElementById("admin-p-cat")?.value;
  const tag = document.getElementById("admin-p-tag")?.value;
  const price = parseInt(document.getElementById("admin-p-price")?.value);
  const oldPrice = parseInt(document.getElementById("admin-p-oldprice")?.value);
  const image = document.getElementById("admin-p-image")?.value.trim();

  if (!name || !category || !tag || isNaN(price) || isNaN(oldPrice) || !image) {
    alert("Please fill in all product form fields.");
    return;
  }

  const payload = { name, category, tag, price, oldPrice, image };

  let success = false;
  try {
    let res;
    if (editProduct) {
      res = await fetch(`/api/products/${editProduct.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        alert("Product updated successfully.");
        success = true;
      }
    } else {
      res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        alert("New product added successfully.");
        success = true;
      }
    }
    
    if (res.ok) {
      await loadProducts();
    }
  } catch (err) {
    console.warn("Product save API failed, falling back to LocalStorage catalog operations:", err);
  }

  // LocalStorage Fallback for catalog management
  if (!success) {
    if (editProduct) {
      const idx = products.findIndex(p => p.id === editProduct.id);
      if (idx !== -1) {
        products[idx] = { ...products[idx], ...payload };
        success = true;
        alert("Product updated successfully (LocalStorage database)!");
      }
    } else {
      const newId = Math.max(...products.map(p => p.id), 0) + 1;
      products.push({ id: newId, ...payload });
      success = true;
      alert("New product added successfully (LocalStorage database)!");
    }
    localStorage.setItem('mj_products', JSON.stringify(products));
  }

  if (success) {
    cancelProductForm();
    renderProducts();
    renderAdminProducts();
  }
}

window.deleteProductDetails = async function(productId) {
  if (confirm("Are you sure you want to delete this product?")) {
    let success = false;
    try {
      const res = await fetch(`/api/products/${productId}`, { method: 'DELETE' });
      if (res.ok) {
        success = true;
        await loadProducts();
      }
    } catch (err) {
      console.warn("Product deletion API failed, falling back to LocalStorage catalog operations:", err);
    }

    if (!success) {
      products = products.filter(p => p.id !== productId);
      localStorage.setItem('mj_products', JSON.stringify(products));
      success = true;
      alert("Product deleted from local catalogue database!");
    }

    if (success) {
      renderProducts();
      renderAdminProducts();
    }
  }
}

// 10. Event Listeners Setup
function initEventListeners() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  const navToggle = document.getElementById("mobile-nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      if (isOpen) {
        mobileMenu.classList.remove("open");
      } else {
        mobileMenu.classList.add("open");
      }
    });
  }

  // Scroll Progress Bar listener
  window.addEventListener("scroll", () => {
    const progress = document.getElementById("scroll-progress");
    if (!progress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progress.style.width = scrollPercent + "%";
  });
}

// 11. GSAP Custom Animations (60 FPS)
function initGSAPTrigger() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  
  // On mobile/tablet, instantly show items to prevent empty white spaces and scroll lag
  if (window.innerWidth < 1024) {
    gsap.utils.toArray('.section-title, .badge-gold, .section-desc, .category-card, .feature-card, .review-card, .faq-item').forEach(el => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }
  
  gsap.registerPlugin(ScrollTrigger);

  // Fade Up titles and text on scroll
  gsap.utils.toArray('.section-title, .badge-gold, .section-desc, .category-card, .feature-card, .review-card, .faq-item').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  });
}

// Magnetic Buttons
function initMagneticButtons() {
  if (typeof gsap === "undefined") return;
  const buttons = document.querySelectorAll(".magnetic");
  
  buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const strength = parseFloat(btn.getAttribute("data-strength")) || 20;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * (strength / (rect.width / 2)),
        y: y * (strength / (rect.height / 2)),
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    });
  });
}

// Card Tilt Parallax effect
function initCardTilt() {
  if (typeof gsap === "undefined") return;
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  
  grid.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;
    
    const img = card.querySelector(".product-img");
    if (img) {
      gsap.to(img, {
        x: px * 10,
        y: py * 10,
        rotationY: px * 8,
        rotationX: -py * 8,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 800
      });
    }
  });
  
  grid.addEventListener("mouseleave", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;
    
    const img = card.querySelector(".product-img");
    if (img) {
      gsap.to(img, {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        duration: 0.6,
        ease: "power3.out"
      });
    }
  }, true);
}

// Header scrolled class
function initHeaderScroll() {
  const header = document.querySelector(".main-header");
  if (!header) return;
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 12. Product Details Popup Modal handlers
window.openProductDetailsModal = function(productId) {
  console.log("openProductDetailsModal triggered for ID:", productId);
  const p = products.find(prod => Number(prod.id) === Number(productId));
  console.log("Product found:", p);
  if (!p) {
    console.error("Product not found in products list for ID:", productId);
    return;
  }
  
  const selectedOption = selectedOptionsState[productId] || "Gold Finish";
  const isSilver = selectedOption.includes("Silver");
  const filterClass = isSilver ? "finish-silver" : "finish-gold";
  
  const modal = document.getElementById("product-details-modal");
  const layout = document.getElementById("product-details-layout");
  console.log("Modal:", modal, "Layout:", layout);
  if (!modal || !layout) {
    console.error("Modal or Layout elements missing from DOM!");
    return;
  }

  layout.innerHTML = `
    <div class="product-details-img-side">
      <span class="product-details-badge">${p.tag}</span>
      <div style="aspect-ratio: 1/1; width: 100%; display: flex; align-items: center; justify-content: center;">
        <img src="${p.image}" class="product-details-img ${filterClass}" alt="${p.name}" onerror="this.src='images/logo.jpg'">
      </div>
    </div>
    <div class="product-details-info-side">
      <span class="product-details-cat">${p.category}</span>
      <h2 class="product-details-title">${p.name}</h2>
      
      <div class="product-details-rating">
        <span style="color:#eab308; display:inline-flex; align-items:center; gap:0.25rem; font-weight: 700;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color:#eab308"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          4.8
        </span>
        <span style="color:#cbd5e1">&bull;</span>
        <span style="color:#10b981; font-weight: 700;">Available now</span>
      </div>
      
      <div class="product-details-price-row">
        <span class="details-price-now">${formatPrice(p.price)}</span>
        <span class="details-price-was">${formatPrice(p.oldPrice)}</span>
      </div>
      
      <p class="product-details-desc">
        Premium artificial jewellery selected for festive outfits, weddings, and everyday styling. Intricately polished to replicate authentic designs.
      </p>
      
      <div class="product-details-benefits">
        <div class="benefit-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#10b981"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Cash on delivery available</span>
        </div>
        <div class="benefit-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#10b981"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Order tracking after login</span>
        </div>
        <div class="benefit-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#10b981"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Secure account checkout</span>
        </div>
        <div class="benefit-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#10b981"><polyline points="20 6 9 17 4 12"/></svg>
          <span>WhatsApp support</span>
        </div>
      </div>
      
      <div class="product-details-actions">
        <button class="details-add-btn magnetic" data-strength="15" onclick="triggerAddToCart(${p.id}); toggleProductDetailsModal(false);">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
          Add to Cart
        </button>
        <button class="details-buy-btn magnetic" data-strength="15" onclick="triggerBuyNow(${p.id})">
          Buy Now
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add("open");
  console.log("Added 'open' class to modal. Modal classes:", modal.className);
  initMagneticButtons();
}

window.toggleProductDetailsModal = function(forceState) {
  const modal = document.getElementById("product-details-modal");
  if (!modal) return;
  if (forceState !== undefined) {
    if (forceState) modal.classList.add("open");
    else modal.classList.remove("open");
  } else {
    modal.classList.toggle("open");
  }
}

window.triggerBuyNow = function(productId) {
  triggerAddToCart(productId);
  toggleProductDetailsModal(false);
  toggleCart(true);
}

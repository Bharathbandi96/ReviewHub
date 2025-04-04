import type { Product, BlogPost } from './types';

export const products: Product[] = [
  // Cars Category
  {
    id: '1',
    name: 'Tesla Model 3',
    category: 'cars',
    subCategory: 'electric',
    rating: 4.5,
    image: '/tesla_model_3.jpg',
    description: 'The Tesla Model 3 is an all-electric four-door sedan with cutting-edge technology, impressive range, and exceptional performance.',
    price: '$38,990',
    brand: 'Tesla',
    features: [
      'Autopilot capabilities',
      'Up to 358 mile range',
      '0-60 mph in 3.1 seconds',
      '15-inch touchscreen',
      'Glass roof'
    ],
    pros: [
      'Long electric range',
      'Strong performance',
      'High-tech features',
      'Spacious interior'
    ],
    cons: [
      'Limited service centers',
      'Build quality inconsistencies',
      'No Apple CarPlay/Android Auto'
    ],
    specifications: {
      'Range': '358 miles',
      'Top Speed': '162 mph',
      'Acceleration': '3.1s 0-60 mph',
      'Drive': 'Dual Motor All-Wheel Drive',
      'Seating': '5 adults',
      'Cargo': '23 cu ft'
    },
    trending: true,
    purchaseLink: 'https://www.tesla.com/model3',
    monthlyRatings: [
      { month: 'Jan', rating: 4.3 },
      { month: 'Feb', rating: 4.4 },
      { month: 'Mar', rating: 4.5 }
    ],
    sales: [
      {
        platform: 'Tesla Direct',
        price: '$38,990',
        url: 'https://www.tesla.com/model3',
        inStock: true
      },
      {
        platform: 'CarMax',
        price: '$41,990',
        url: 'https://www.carmax.com/cars/tesla/model-3',
        inStock: true,
        shipping: 'Free delivery'
      },
      {
        platform: 'Carvana',
        price: '$40,590',
        url: 'https://www.carvana.com/cars/tesla-model-3',
        inStock: true,
        discount: {
          original: '$42,990',
          percentage: 5
        }
      }
    ],
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'John Smith',
        rating: 5,
        comment: 'Best car I\'ve ever owned. The technology is incredible and the performance is amazing.',
        date: '2024-03-15',
        helpful: 45,
        images: [
          'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800',
          'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=800'
        ],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ],
    comparableProducts: [
      {
        name: 'BMW i4',
        price: '$52,995',
        rating: 4.6,
        specifications: {
          'Range': '301 miles',
          'Top Speed': '140 mph',
          'Acceleration': '3.7s 0-60 mph',
          'Drive': 'Dual Motor All-Wheel Drive',
          'Seating': '5 adults',
          'Cargo': '16.6 cu ft'
        },
        keyDifferences: [
          'Higher build quality but more expensive',
          'Traditional luxury car feel',
          'Better interior materials',
          'More traditional dashboard layout'
        ]
      },
      {
        name: 'Polestar 2',
        price: '$44,900',
        rating: 4.4,
        specifications: {
          'Range': '270 miles',
          'Top Speed': '127 mph',
          'Acceleration': '4.5s 0-60 mph',
          'Drive': 'Dual Motor All-Wheel Drive',
          'Seating': '5 adults',
          'Cargo': '14.3 cu ft'
        },
        keyDifferences: [
          'Android Automotive OS integration',
          'Scandinavian design aesthetic',
          'Better build quality',
          'More traditional car controls'
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'BMW i4',
    category: 'cars',
    subCategory: 'luxury',
    rating: 4.6,
    image: '/bmw_i4.jpg',
    description: 'The BMW i4 combines luxury with electric performance, offering a refined driving experience and cutting-edge technology.',
    price: '$52,995',
    brand: 'BMW',
    features: [
      'Up to 301 mile range',
      'Dual motor all-wheel drive',
      'BMW iDrive 8.0',
      'Premium audio system',
      'Advanced driver assistance'
    ],
    pros: [
      'Premium build quality',
      'Excellent handling',
      'Luxurious interior',
      'Fast charging capability'
    ],
    cons: [
      'Higher price point',
      'Heavier than gas counterpart',
      'Limited rear headroom'
    ],
    specifications: {
      'Range': '301 miles',
      'Power': '536 hp',
      'Acceleration': '3.7s 0-60 mph',
      'Charging': '200 kW DC fast charging',
      'Cargo': '16.6 cu ft'
    },
    trending: true,
    purchaseLink: 'https://www.bmw.co.uk/en/all-models/bmw-i/i4/i4-gran-coupe-2024-g26bev.html',
    sales: [
      {
        platform: 'BMW Direct',
        price: '$52,995',
        url: 'https://www.bmwusa.com/vehicles/i4/gran-coupe/build-your-own.html',
        inStock: true
      },
      {
        platform: 'CarMax',
        price: '$54,990',
        url: 'https://www.carmax.com/cars/bmw/i4',
        inStock: true,
        shipping: 'Free delivery'
      }
    ],
    comparableProducts: [
      {
        name: 'Tesla Model 3',
        price: '$38,990',
        rating: 4.5,
        specifications: {
          'Range': '358 miles',
          'Power': '450 hp',
          'Acceleration': '3.1s 0-60 mph',
          'Charging': '250 kW DC fast charging',
          'Cargo': '23 cu ft'
        },
        keyDifferences: [
          'Lower price point',
          'Longer range',
          'More minimalist interior',
          'Better charging network'
        ]
      },
      {
        name: 'Mercedes-Benz EQE',
        price: '$74,900',
        rating: 4.7,
        specifications: {
          'Range': '305 miles',
          'Power': '402 hp',
          'Acceleration': '4.0s 0-60 mph',
          'Charging': '170 kW DC fast charging',
          'Cargo': '15.1 cu ft'
        },
        keyDifferences: [
          'More luxurious interior',
          'Better ride comfort',
          'Higher price point',
          'More traditional Mercedes features'
        ]
      }
    ]
  },
  {
    "id": "3",
    "name": "Lucid Air Grand Touring",
    "category": "cars",
    "subCategory": "electric",
    "rating": 4.8,
    "image": "/lucid_air_grand_touring.jpeg",
    "description": "The Lucid Air Grand Touring is a high-performance luxury electric sedan with an industry-leading range, cutting-edge technology, and an ultra-modern design.",
    "price": "$125,600",
    "brand": "Lucid Motors",
    "features": [
      "516-mile range",
      "0-60 mph in 3.0 seconds",
      "34-inch floating Glass Cockpit display",
      "DreamDrive advanced driver assistance",
      "Ultra-fast 924V charging system"
    ],
    "pros": [
      "Longest range of any EV",
      "Luxury interior with high-end materials",
      "Rapid charging speeds",
      "Smooth and quiet ride"
    ],
    "cons": [
      "Expensive compared to competitors",
      "Limited service centers",
      "Infotainment system can be slow"
    ],
    "specifications": {
      "Range": "516 miles",
      "Top Speed": "168 mph",
      "Acceleration": "3.0s 0-60 mph",
      "Drive": "Dual Motor All-Wheel Drive",
      "Seating": "5 adults",
      "Cargo": "32.5 cu ft"
    },
    "purchaseLink": "https://www.lucidmotors.com/air",
    "monthlyRatings": [
      { "month": "Jan", "rating": 4.7 },
      { "month": "Feb", "rating": 4.8 },
      { "month": "Mar", "rating": 4.8 }
    ],
    "sales": [
      {
        "platform": "Lucid Motors Direct",
        "price": "$125,600",
        "url": "https://www.lucidmotors.com/air",
        "inStock": true
      },
      {
        "platform": "AutoNation",
        "price": "$128,000",
        "url": "https://www.autonation.com/cars/lucid-air",
        "inStock": true,
        "shipping": "Free delivery"
      },
      {
        "platform": "Carvana",
        "price": "$124,900",
        "url": "https://www.carvana.com/cars/lucid-air",
        "inStock": true,
        "discount": {
          "original": "$129,900",
          "percentage": 4
        }
      }
    ],
    "reviews": [
      {
        "id": "r2",
        "userId": "u2",
        "userName": "Emily Johnson",
        "rating": 5,
        "comment": "The best luxury EV I've driven. The range is unbeatable, and the interior is stunning.",
        "date": "2024-03-20",
        "helpful": 50,
        "images": [
          "https://images.unsplash.com/photo-1632834929772-60262d02ad50?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1632834929772-60262d02ad50?auto=format&fit=crop&w=800"
        ],
        "video": "https://www.youtube.com/embed/7YahcGc_p8Q"
      }
    ],
    "comparableProducts": [
      {
        "name": "Mercedes-Benz EQS 580",
        "price": "$125,950",
        "rating": 4.7,
        "specifications": {
          "Range": "340 miles",
          "Top Speed": "130 mph",
          "Acceleration": "4.1s 0-60 mph",
          "Drive": "Dual Motor All-Wheel Drive",
          "Seating": "5 adults",
          "Cargo": "22.7 cu ft"
        },
        "keyDifferences": [
          "More luxurious and traditional luxury brand",
          "Lower range but advanced comfort features",
          "Advanced MBUX Hyperscreen system"
        ]
      },
      {
        "name": "Tesla Model S Plaid",
        "price": "$89,990",
        "rating": 4.6,
        "specifications": {
          "Range": "396 miles",
          "Top Speed": "200 mph",
          "Acceleration": "1.99s 0-60 mph",
          "Drive": "Tri Motor All-Wheel Drive",
          "Seating": "5 adults",
          "Cargo": "28 cu ft"
        },
        "keyDifferences": [
          "Faster acceleration but less range",
          "More minimalist interior with yoke steering",
          "More widely available service centers"
        ]
      }
    ]
  },
  {
    "id": "4",
    "name": "Rivian R1S",
    "category": "cars",
    "subCategory": "suv",
    "rating": 4.7,
    "image": "/rivian_r1S.jpeg",
    "description": "The Rivian R1S is a rugged, all-electric adventure SUV offering exceptional off-road capabilities, a spacious interior, and cutting-edge technology.",
    "price": "$78,000",
    "brand": "Rivian",
    "features": [
      "Up to 400-mile range",
      "Quad-Motor AWD system",
      "0-60 mph in 3.0 seconds",
      "Three-row seating for up to 7",
      "Water fording up to 3 feet"
    ],
    "pros": [
      "Excellent off-road capabilities",
      "High-tech and luxurious interior",
      "Spacious and versatile seating",
      "Strong performance and acceleration"
    ],
    "cons": [
      "Limited charging network",
      "Expensive compared to some rivals",
      "No Apple CarPlay/Android Auto"
    ],
    "specifications": {
      "Range": "400 miles",
      "Top Speed": "110 mph",
      "Acceleration": "3.0s 0-60 mph",
      "Drive": "Quad Motor All-Wheel Drive",
      "Seating": "7 adults",
      "Cargo": "104 cu ft (with seats folded)"
    },
    "purchaseLink": "https://www.rivian.com/r1s",
    "monthlyRatings": [
      { "month": "Jan", "rating": 4.6 },
      { "month": "Feb", "rating": 4.7 },
      { "month": "Mar", "rating": 4.7 }
    ],
    "sales": [
      {
        "platform": "Rivian Direct",
        "price": "$78,000",
        "url": "https://www.rivian.com/r1s",
        "inStock": true
      },
      {
        "platform": "AutoNation",
        "price": "$79,500",
        "url": "https://www.autonation.com/cars/rivian-r1s",
        "inStock": true,
        "shipping": "Free delivery"
      },
      {
        "platform": "Carvana",
        "price": "$76,900",
        "url": "https://www.carvana.com/cars/rivian-r1s",
        "inStock": true,
        "discount": {
          "original": "$80,000",
          "percentage": 4
        }
      }
    ],
    "reviews": [
      {
        "id": "r3",
        "userId": "u3",
        "userName": "Michael Anderson",
        "rating": 5,
        "comment": "This SUV is an off-road beast! Handles any terrain effortlessly, and the electric powertrain is fantastic.",
        "date": "2024-03-22",
        "helpful": 60,
        "images": [
          "https://images.unsplash.com/photo-1675717693534-4b41f7659142?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1675717693534-4b41f7659142?auto=format&fit=crop&w=800"
        ],
        "video": "https://www.youtube.com/embed/3jFZBlK-vmA"
      }
    ],
    "comparableProducts": [
      {
        "name": "Tesla Model X",
        "price": "$79,990",
        "rating": 4.6,
        "specifications": {
          "Range": "348 miles",
          "Top Speed": "155 mph",
          "Acceleration": "2.5s 0-60 mph",
          "Drive": "Dual Motor All-Wheel Drive",
          "Seating": "6-7 adults",
          "Cargo": "91 cu ft"
        },
        "keyDifferences": [
          "Faster acceleration but less off-road capability",
          "Falcon Wing doors for unique access",
          "More widely available charging network"
        ]
      },
      {
        "name": "BMW iX",
        "price": "$87,100",
        "rating": 4.5,
        "specifications": {
          "Range": "324 miles",
          "Top Speed": "124 mph",
          "Acceleration": "4.4s 0-60 mph",
          "Drive": "Dual Motor All-Wheel Drive",
          "Seating": "5 adults",
          "Cargo": "77.9 cu ft"
        },
        "keyDifferences": [
          "More luxury-focused interior",
          "Better on-road driving dynamics",
          "Premium materials and design"
        ]
      }
    ]
  },
  {
    "id": "5",
    "name": "Ford Mustang Mach-E",
    "category": "cars",
    "subCategory": "suv",
    "rating": 4.6,
    "image": "/ford_mustang_mach-e.jpeg",
    "description": "The Ford Mustang Mach-E is a stylish, all-electric SUV that offers a thrilling driving experience with impressive range, cutting-edge technology, and powerful performance.",
    "price": "$43,895",
    "brand": "Ford",
    "features": [
      "Up to 312-mile range",
      "0-60 mph in 3.5 seconds",
      "Ford Co-Pilot360 driver-assist system",
      "SYNC 4A infotainment system",
      "Available all-wheel drive"
    ],
    "pros": [
      "Affordable compared to rivals",
      "Excellent performance and handling",
      "Wide range of configurations",
      "Spacious and comfortable interior"
    ],
    "cons": [
      "Smaller cargo space compared to some competitors",
      "Infotainment system can be glitchy",
      "Charging infrastructure not as expansive as Tesla"
    ],
    "specifications": {
      "Range": "312 miles",
      "Top Speed": "124 mph",
      "Acceleration": "3.5s 0-60 mph",
      "Drive": "All-Wheel Drive (AWD) or Rear-Wheel Drive (RWD)",
      "Seating": "5 adults",
      "Cargo": "29.7 cu ft"
    },
    "purchaseLink": "https://www.ford.com/suvs/mach-e/",
    "monthlyRatings": [
      { "month": "Jan", "rating": 4.5 },
      { "month": "Feb", "rating": 4.6 },
      { "month": "Mar", "rating": 4.6 }
    ],
    "sales": [
      {
        "platform": "Ford Direct",
        "price": "$43,895",
        "url": "https://www.ford.com/suvs/mach-e/",
        "inStock": true
      },
      {
        "platform": "CarMax",
        "price": "$46,500",
        "url": "https://www.carmax.com/cars/ford/mach-e",
        "inStock": true,
        "shipping": "Free delivery"
      },
      {
        "platform": "Carvana",
        "price": "$45,200",
        "url": "https://www.carvana.com/cars/ford-mustang-mach-e",
        "inStock": true,
        "discount": {
          "original": "$47,000",
          "percentage": 4
        }
      }
    ],
    "reviews": [
      {
        "id": "r4",
        "userId": "u4",
        "userName": "Sarah Mitchell",
        "rating": 5,
        "comment": "The Mach-E is an amazing SUV. It's fun to drive, has a great range, and the tech is top-notch. Highly recommend!",
        "date": "2024-03-28",
        "helpful": 70,
        "images": [
          "https://images.unsplash.com/photo-1604023790771-2a9db741ebc1?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1604023790771-2a9db741ebc1?auto=format&fit=crop&w=800"
        ],
        "video": "https://www.youtube.com/embed/7XJmMdr27bQ"
      }
    ],
    "comparableProducts": [
      {
        "name": "Volkswagen ID.4",
        "price": "$39,995",
        "rating": 4.4,
        "specifications": {
          "Range": "260 miles",
          "Top Speed": "99 mph",
          "Acceleration": "8.5s 0-60 mph",
          "Drive": "Rear-Wheel Drive (RWD) or All-Wheel Drive (AWD)",
          "Seating": "5 adults",
          "Cargo": "30.3 cu ft"
        },
        "keyDifferences": [
          "More affordable than the Mach-E",
          "Lower acceleration and top speed",
          "Less performance-oriented"
        ]
      },
      {
        "name": "Chevrolet Bolt EUV",
        "price": "$33,500",
        "rating": 4.3,
        "specifications": {
          "Range": "247 miles",
          "Top Speed": "93 mph",
          "Acceleration": "7.0s 0-60 mph",
          "Drive": "Front-Wheel Drive (FWD)",
          "Seating": "5 adults",
          "Cargo": "56.9 cu ft"
        },
        "keyDifferences": [
          "Significantly more affordable",
          "Smaller range and performance",
          "Larger cargo capacity"
        ]
      }
    ]
  },
  {
    "id": "6",
    "name": "Porsche Taycan Turbo S",
    "category": "cars",
    "subCategory": "sports",
    "rating": 4.9,
    "image": "/porsche_taycan_turbo_s.jpeg",
    "description": "The Porsche Taycan Turbo S is a high-performance electric sports sedan that combines stunning acceleration, exquisite craftsmanship, and cutting-edge technology, delivering a truly exhilarating driving experience.",
    "price": "$185,000",
    "brand": "Porsche",
    "features": [
      "750 hp with 616 lb-ft of torque",
      "0-60 mph in 2.6 seconds",
      "Top speed of 161 mph",
      "All-wheel drive (AWD)",
      "Innovative 800V architecture for ultra-fast charging"
    ],
    "pros": [
      "Incredible acceleration and performance",
      "Superb handling and cornering",
      "Luxurious interior with high-end materials",
      "Fast charging capabilities"
    ],
    "cons": [
      "Very high price tag",
      "Limited rear-seat space",
      "Cargo space is somewhat cramped"
    ],
    "specifications": {
      "Range": "246 miles",
      "Top Speed": "161 mph",
      "Acceleration": "2.6s 0-60 mph",
      "Drive": "All-Wheel Drive (AWD)",
      "Seating": "4 adults",
      "Cargo": "14.3 cu ft"
    },
    "purchaseLink": "https://www.porsche.com/usa/models/taycan/taycan-turbo-s/",
    "monthlyRatings": [
      { "month": "Jan", "rating": 4.8 },
      { "month": "Feb", "rating": 4.9 },
      { "month": "Mar", "rating": 4.9 }
    ],
    "sales": [
      {
        "platform": "Porsche Direct",
        "price": "$185,000",
        "url": "https://www.porsche.com/usa/models/taycan/taycan-turbo-s/",
        "inStock": true
      },
      {
        "platform": "CarMax",
        "price": "$189,000",
        "url": "https://www.carmax.com/cars/porsche/taycan",
        "inStock": true,
        "shipping": "Free delivery"
      },
      {
        "platform": "Carvana",
        "price": "$182,500",
        "url": "https://www.carvana.com/cars/porsche-taycan-turbo-s",
        "inStock": true,
        "discount": {
          "original": "$185,000",
          "percentage": 1.35
        }
      }
    ],
    "reviews": [
      {
        "id": "r5",
        "userId": "u5",
        "userName": "David Lee",
        "rating": 5,
        "comment": "The Taycan Turbo S is a game-changer. Unmatched acceleration, cornering, and a thrilling driving experience. Porsche truly nailed it.",
        "date": "2024-03-30",
        "helpful": 80,
        "images": [
          "https://images.unsplash.com/photo-1591410347767-1fef29cb5067?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1591410347767-1fef29cb5067?auto=format&fit=crop&w=800"
        ],
        "video": "https://www.youtube.com/embed/k9sPImvb73s"
      }
    ],
    "comparableProducts": [
      {
        "name": "Tesla Roadster",
        "price": "$200,000",
        "rating": 4.8,
        "specifications": {
          "Range": "620 miles",
          "Top Speed": "250 mph",
          "Acceleration": "1.9s 0-60 mph",
          "Drive": "All-Wheel Drive (AWD)",
          "Seating": "2 adults",
          "Cargo": "N/A"
        },
        "keyDifferences": [
          "Faster acceleration and top speed",
          "Higher price tag",
          "Smaller, two-seater design"
        ]
      },
      {
        "name": "Audi e-tron GT RS",
        "price": "$139,900",
        "rating": 4.7,
        "specifications": {
          "Range": "232 miles",
          "Top Speed": "155 mph",
          "Acceleration": "3.1s 0-60 mph",
          "Drive": "All-Wheel Drive (AWD)",
          "Seating": "4 adults",
          "Cargo": "12 cu ft"
        },
        "keyDifferences": [
          "More affordable than Taycan Turbo S",
          "Great performance but less extreme acceleration",
          "More practical and spacious for passengers"
        ]
      }
    ]
  },
  {
    "id": "7",
    "name": "Tesla Roadster",
    "category": "cars",
    "subCategory": "sports",
    "rating": 4.8,
    "image": "/tesla_roadster.jpeg",
    "description": "The Tesla Roadster is a high-performance electric sports car that redefines speed and acceleration. With an astonishing 0-60 mph time of 1.9 seconds, it's one of the fastest cars in the world.",
    "price": "$200,000",
    "brand": "Tesla",
    "features": [
      "0-60 mph in 1.9 seconds",
      "Top speed of 250 mph",
      "Range of 620 miles",
      "All-wheel drive (AWD)",
      "SpaceX package for increased performance"
    ],
    "pros": [
      "Unbelievably fast acceleration",
      "Extremely long range",
      "Record-breaking top speed",
      "Advanced, futuristic features"
    ],
    "cons": [
      "Very high price tag",
      "Limited interior space",
      "Expected production delays"
    ],
    "specifications": {
      "Range": "620 miles",
      "Top Speed": "250 mph",
      "Acceleration": "1.9s 0-60 mph",
      "Drive": "All-Wheel Drive (AWD)",
      "Seating": "2 adults",
      "Cargo": "N/A"
    },
    "purchaseLink": "https://www.tesla.com/roadster",
    "monthlyRatings": [
      { "month": "Jan", "rating": 4.7 },
      { "month": "Feb", "rating": 4.8 },
      { "month": "Mar", "rating": 4.8 }
    ],
    "sales": [
      {
        "platform": "Tesla Direct",
        "price": "$200,000",
        "url": "https://www.tesla.com/roadster",
        "inStock": true
      },
      {
        "platform": "CarMax",
        "price": "$205,000",
        "url": "https://www.carmax.com/cars/tesla/roadster",
        "inStock": true,
        "shipping": "Free delivery"
      },
      {
        "platform": "Carvana",
        "price": "$198,500",
        "url": "https://www.carvana.com/cars/tesla-roadster",
        "inStock": true,
        "discount": {
          "original": "$205,000",
          "percentage": 3.17
        }
      }
    ],
    "reviews": [
      {
        "id": "r6",
        "userId": "u6",
        "userName": "James White",
        "rating": 5,
        "comment": "This car is insane! The acceleration is unreal, and the design is out of this world. It’s the ultimate driving machine.",
        "date": "2024-03-25",
        "helpful": 90,
        "images": [
          "https://images.unsplash.com/photo-1583731320870-017e7d03a137?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1583731320870-017e7d03a137?auto=format&fit=crop&w=800"
        ],
        "video": "https://www.youtube.com/embed/ujxvlzFr0pg"
      }
    ],
    "comparableProducts": [
      {
        "name": "Lucid Air Sapphire",
        "price": "$249,000",
        "rating": 4.7,
        "specifications": {
          "Range": "520 miles",
          "Top Speed": "200 mph",
          "Acceleration": "2.5s 0-60 mph",
          "Drive": "All-Wheel Drive (AWD)",
          "Seating": "5 adults",
          "Cargo": "16.0 cu ft"
        },
        "keyDifferences": [
          "More practical for daily use with 4-door design",
          "Slightly slower acceleration but more spacious",
          "Higher price but still luxurious"
        ]
      },
      {
        "name": "Rimac Nevera",
        "price": "$2.4 million",
        "rating": 4.9,
        "specifications": {
          "Range": "340 miles",
          "Top Speed": "258 mph",
          "Acceleration": "1.85s 0-60 mph",
          "Drive": "All-Wheel Drive (AWD)",
          "Seating": "2 adults",
          "Cargo": "N/A"
        },
        "keyDifferences": [
          "Even faster than the Tesla Roadster",
          "Extremely expensive and rare",
          "More of a hypercar than a sports car"
        ]
      }
    ]
  },
  {
    "id": "8",
    "name": "Toyota Prius Prime",
    "category": "cars",
    "subCategory": "hybrid",
    "rating": 4.5,
    "image": "/toyota_prius_prime.jpeg",
    "description": "The Toyota Prius Prime is a plug-in hybrid that offers excellent fuel efficiency, a comfortable ride, and the versatility of being able to drive short distances on electric power alone.",
    "price": "$28,000",
    "brand": "Toyota",
    "features": [
      "Up to 25 miles on electric power alone",
      "Hybrid system with 121 hp combined",
      "7-inch touchscreen with Apple CarPlay",
      "Toyota Safety Sense 2.0",
      "Available all-wheel drive"
    ],
    "pros": [
      "Great fuel efficiency",
      "Affordable for a plug-in hybrid",
      "Spacious interior",
      "Advanced safety features"
    ],
    "cons": [
      "Limited electric-only range",
      "Interior feels less premium",
      "Not as sporty as some rivals"
    ],
    "specifications": {
      "Range": "25 miles electric-only, 640 miles total",
      "Top Speed": "112 mph",
      "Acceleration": "10.9s 0-60 mph",
      "Drive": "Front-Wheel Drive",
      "Seating": "5 adults",
      "Cargo": "19.8 cu ft"
    },
    "purchaseLink": "https://www.toyota.com/priusprime",
    "monthlyRatings": [
      { "month": "Jan", "rating": 4.4 },
      { "month": "Feb", "rating": 4.5 },
      { "month": "Mar", "rating": 4.5 }
    ],
    "sales": [
      {
        "platform": "Toyota Direct",
        "price": "$28,000",
        "url": "https://www.toyota.com/priusprime",
        "inStock": true
      },
      {
        "platform": "CarMax",
        "price": "$29,000",
        "url": "https://www.carmax.com/cars/toyota/prius-prime",
        "inStock": true,
        "shipping": "Free delivery"
      },
      {
        "platform": "Carvana",
        "price": "$28,500",
        "url": "https://www.carvana.com/cars/toyota-prius-prime",
        "inStock": true,
        "discount": {
          "original": "$29,000",
          "percentage": 2
        }
      }
    ],
    "reviews": [
      {
        "id": "r7",
        "userId": "u7",
        "userName": "Michael Johnson",
        "rating": 4,
        "comment": "Great hybrid car for city driving. I love the electric-only range for short trips, and the fuel efficiency is incredible.",
        "date": "2024-03-20",
        "helpful": 30,
        "images": [
          "https://images.unsplash.com/photo-1604011348743-12852ab5098a?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1604011348743-12852ab5098a?auto=format&fit=crop&w=800"
        ],
        "video": "https://www.youtube.com/embed/Rb2J8r4rTkw"
      }
    ],
    "comparableProducts": [
      {
        "name": "Honda Clarity Plug-In Hybrid",
        "price": "$34,000",
        "rating": 4.4,
        "specifications": {
          "Range": "47 miles electric-only, 340 miles total",
          "Top Speed": "103 mph",
          "Acceleration": "7.6s 0-60 mph",
          "Drive": "Front-Wheel Drive",
          "Seating": "5 adults",
          "Cargo": "15.5 cu ft"
        },
        "keyDifferences": [
          "Longer electric-only range",
          "Higher price point",
          "Slightly better acceleration"
        ]
      },
      {
        "name": "Chrysler Pacifica Hybrid",
        "price": "$43,000",
        "rating": 4.6,
        "specifications": {
          "Range": "32 miles electric-only, 520 miles total",
          "Top Speed": "103 mph",
          "Acceleration": "7.8s 0-60 mph",
          "Drive": "Front-Wheel Drive",
          "Seating": "7 adults",
          "Cargo": "32.3 cu ft"
        },
        "keyDifferences": [
          "More spacious with 7 seats",
          "Higher price but more cargo room",
          "Less fuel-efficient than Prius Prime"
        ]
      }
    ]
  },
  // Beauty Category
  {
    id: '9',
    name: 'Luxury Face Serum',
    category: 'beauty',
    subCategory: 'skincare',
    rating: 4.8,
    image: '/luxury_face_cream.jpeg',
    description: 'Advanced anti-aging serum with vitamin C, hyaluronic acid, and peptides for radiant, youthful skin.',
    price: '$89',
    brand: 'LuxeSkin',
    features: [
      '20% Vitamin C concentration',
      'Hyaluronic acid complex',
      'Peptide blend',
      'Fragrance-free',
      'Dermatologist tested'
    ],
    pros: [
      'Visible results in 2 weeks',
      'Non-irritating formula',
      'Suitable for all skin types',
      'Clean ingredients'
    ],
    cons: [
      'Premium price point',
      'May oxidize if not stored properly',
      'Takes time to see full results'
    ],
    specifications: {
      'Size': '30ml',
      'pH Level': '5.5',
      'Texture': 'Lightweight',
      'Shelf Life': '12 months',
      'Application': 'AM/PM'
    },
    new: true,
    purchaseLink: 'https://www.sephora.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$89',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.8,
        reviews: 1250
      },
      {
        platform: 'Ulta Beauty',
        price: '$79',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$89',
          percentage: 11
        },
        rating: 4.7,
        reviews: 890
      },
      {
        platform: 'Amazon',
        price: '$85',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.6,
        reviews: 2100
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.6 },
      { month: 'Feb', rating: 4.7 },
      { month: 'Mar', rating: 4.8 }
    ],
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Emma Davis',
        rating: 5,
        comment: 'This serum transformed my skin! Fine lines are visibly reduced and my complexion is glowing.',
        date: '2024-03-12',
        helpful: 67,
        images: [
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Premium Vitamin C Serum',
        price: '$95',
        rating: 4.7,
        specifications: {
          'Size': '30ml',
          'pH Level': '5.8',
          'Texture': 'Lightweight',
          'Shelf Life': '12 months',
          'Application': 'AM only'
        },
        keyDifferences: [
          'Higher vitamin C concentration (25%)',
          'More expensive',
          'Shorter shelf life',
          'Morning-only application'
        ]
      },
      {
        name: 'Advanced Peptide Complex',
        price: '$79',
        rating: 4.6,
        specifications: {
          'Size': '30ml',
          'pH Level': '5.3',
          'Texture': 'Medium',
          'Shelf Life': '18 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Focus on peptides over vitamin C',
          'Lower price point',
          'Longer shelf life',
          'Richer texture'
        ]
      }
    ]
  },
  {
    id: '10',
    name: 'Radiance Retinol Serum',
    category: 'beauty',
    subCategory: 'skincare',
    rating: 4.7,
    image: '/radiance_retinol_serum.jpg',
    description: 'Powerful retinol serum to target fine lines, wrinkles, and dark spots for smoother, more youthful skin.',
    price: '$75',
    brand: 'GlowSkin',
    features: [
      '0.5% Retinol',
      'Niacinamide for brightening',
      'Hyaluronic acid for hydration',
      'Fragrance-free',
      'Dermatologist approved'
    ],
    pros: [
      'Visible improvement in skin texture',
      'Non-comedogenic',
      'Hydrates while treating signs of aging',
      'Clinically tested for sensitive skin'
    ],
    cons: [
      'Requires gradual introduction to avoid irritation',
      'Not suitable for pregnant women',
      'Can make skin sensitive to sunlight'
    ],
    specifications: {
      'Size': '30ml',
      'pH Level': '5.6',
      'Texture': 'Silky',
      'Shelf Life': '12 months',
      'Application': 'PM only'
    },
    new: true,
    purchaseLink: 'https://www.glowskin.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$75',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.7,
        reviews: 1050
      },
      {
        platform: 'Ulta Beauty',
        price: '$70',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$75',
          percentage: 7
        },
        rating: 4.6,
        reviews: 800
      },
      {
        platform: 'Amazon',
        price: '$72',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.5,
        reviews: 1200
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.5 },
      { month: 'Feb', rating: 4.6 },
      { month: 'Mar', rating: 4.7 }
    ],
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Sophia Mitchell',
        rating: 5,
        comment: 'This retinol serum has made my skin smoother and more even-toned. I saw results in just a few weeks!',
        date: '2024-03-10',
        helpful: 52,
        images: [
          'https://images.unsplash.com/photo-1592562117-211f40a6d540?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Deep Retinol Repair Serum',
        price: '$95',
        rating: 4.8,
        specifications: {
          'Size': '30ml',
          'pH Level': '5.5',
          'Texture': 'Rich',
          'Shelf Life': '12 months',
          'Application': 'PM only'
        },
        keyDifferences: [
          'Higher concentration of retinol (1%)',
          'More expensive',
          'Richer texture',
          'Takes longer to adjust to sensitive skin'
        ]
      },
      {
        name: 'Gentle Retinol Complex',
        price: '$60',
        rating: 4.5,
        specifications: {
          'Size': '30ml',
          'pH Level': '5.7',
          'Texture': 'Lightweight',
          'Shelf Life': '18 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Lower retinol concentration (0.25%)',
          'Cheaper',
          'Longer shelf life',
          'Can be used both morning and night'
        ]
      }
    ]
  },
  {
    id: '11',
    name: 'Nourishing Hair Oil',
    category: 'beauty',
    subCategory: 'haircare',
    rating: 4.9,
    image: '/nourishing_hair_oil.jpeg',
    description: 'Revitalizing hair oil infused with argan oil and vitamin E to hydrate and repair dry, damaged hair.',
    price: '$45',
    brand: 'PureGlow',
    features: [
      '100% Organic Argan Oil',
      'Enriched with Vitamin E',
      'Non-greasy formula',
      'Lightweight and fast-absorbing',
      'Suitable for all hair types'
    ],
    pros: [
      'Restores moisture and shine',
      'Reduces frizz and split ends',
      'Promotes hair growth',
      'Great for both scalp and hair'
    ],
    cons: [
      'May require several applications for noticeable results',
      'Premium price point',
      'Strong scent that may not be for everyone'
    ],
    specifications: {
      'Size': '50ml',
      'Texture': 'Oil',
      'Shelf Life': '18 months',
      'Application': 'AM/PM, as needed'
    },
    new: true,
    purchaseLink: 'https://www.pureglow.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$45',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.9,
        reviews: 750
      },
      {
        platform: 'Ulta Beauty',
        price: '$42',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$45',
          percentage: 7
        },
        rating: 4.8,
        reviews: 500
      },
      {
        platform: 'Amazon',
        price: '$43',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.7,
        reviews: 1100
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.7 },
      { month: 'Feb', rating: 4.8 },
      { month: 'Mar', rating: 4.9 }
    ],
    reviews: [
      {
        id: 'r5',
        userId: 'u5',
        userName: 'Lily Rogers',
        rating: 5,
        comment: 'This hair oil is a game changer! It made my hair smoother, shinier, and more manageable.',
        date: '2024-03-15',
        helpful: 50,
        images: [
          'https://images.unsplash.com/photo-1606112216392-98a4f9d43b61?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Luxurious Argan Oil Elixir',
        price: '$50',
        rating: 4.8,
        specifications: {
          'Size': '50ml',
          'Texture': 'Oil',
          'Shelf Life': '12 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Higher price',
          'Slightly richer texture',
          'Shorter shelf life'
        ]
      },
      {
        name: 'Hydrating Hair Serum',
        price: '$39',
        rating: 4.6,
        specifications: {
          'Size': '50ml',
          'Texture': 'Serum',
          'Shelf Life': '18 months',
          'Application': 'AM only'
        },
        keyDifferences: [
          'Non-oily serum texture',
          'More affordable',
          'Morning-only application'
        ]
      }
    ]
  },
  {
    id: '12',
    name: 'Strengthening Shampoo',
    category: 'beauty',
    subCategory: 'haircare',
    rating: 4.7,
    image: '/strengthening_shampoo.jpeg',
    description: 'Strengthening shampoo formulated with biotin and keratin to reduce hair breakage and promote healthier hair growth.',
    price: '$25',
    brand: 'StrengthenX',
    features: [
      'Contains Biotin and Keratin',
      'Free from sulfates and parabens',
      'Gentle cleansing formula',
      'For all hair types',
      'Restores hair elasticity'
    ],
    pros: [
      'Helps with thinning hair and breakage',
      'Cleanses without stripping moisture',
      'Works well with colored hair',
      'Pleasant, mild fragrance'
    ],
    cons: [
      'May not create a lot of lather',
      'Takes time to see significant results',
      'Not ideal for oily hair'
    ],
    specifications: {
      'Size': '250ml',
      'Texture': 'Creamy',
      'Shelf Life': '12 months',
      'Application': 'AM/PM, as needed'
    },
    new: true,
    purchaseLink: 'https://www.strengthenx.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$25',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.7,
        reviews: 900
      },
      {
        platform: 'Ulta Beauty',
        price: '$23',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$25',
          percentage: 8
        },
        rating: 4.6,
        reviews: 750
      },
      {
        platform: 'Amazon',
        price: '$24',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.5,
        reviews: 1400
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.5 },
      { month: 'Feb', rating: 4.6 },
      { month: 'Mar', rating: 4.7 }
    ],
    reviews: [
      {
        id: 'r6',
        userId: 'u6',
        userName: 'Grace Parker',
        rating: 5,
        comment: 'This shampoo has helped strengthen my hair. My hair feels fuller, and I’ve seen less breakage!',
        date: '2024-03-10',
        helpful: 60,
        images: [
          'https://images.unsplash.com/photo-1532643580423-c3466e1db4cc?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Keratin Strengthening Shampoo',
        price: '$30',
        rating: 4.8,
        specifications: {
          'Size': '250ml',
          'Texture': 'Creamy',
          'Shelf Life': '12 months',
          'Application': 'AM only'
        },
        keyDifferences: [
          'Higher price',
          'Contains additional keratin proteins',
          'Morning-only application'
        ]
      },
      {
        name: 'Volumizing Biotin Shampoo',
        price: '$22',
        rating: 4.5,
        specifications: {
          'Size': '250ml',
          'Texture': 'Lightweight',
          'Shelf Life': '18 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'More affordable',
          'Focuses on volume rather than strength',
          'Lighter texture'
        ]
      }
    ]
  },
  {
    id: '13',
    name: 'Long-Wear Foundation',
    category: 'beauty',
    subCategory: 'makeup',
    rating: 4.8,
    image: '/long_wear_foundation.JPG',
    description: 'Full-coverage foundation with a matte finish that lasts up to 24 hours, providing a flawless complexion.',
    price: '$42',
    brand: 'FlawlessFace',
    features: [
      'Full coverage',
      'Matte finish',
      '24-hour wear',
      'Oil-free formula',
      'Suitable for sensitive skin'
    ],
    pros: [
      'Long-lasting and transfer-proof',
      'Controls oil and shine throughout the day',
      'Great for oily and combination skin types',
      'Wide range of shades available'
    ],
    cons: [
      'Can be drying for dry skin',
      'Requires good blending for a natural look',
      'May need touch-ups for extreme humidity'
    ],
    specifications: {
      'Size': '30ml',
      'Texture': 'Creamy',
      'Shelf Life': '12 months',
      'Application': 'AM, as needed'
    },
    new: true,
    purchaseLink: 'https://www.flawlessface.com',
    trending: true,
    sales: [
      {
        platform: 'Sephora',
        price: '$42',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.8,
        reviews: 2000
      },
      {
        platform: 'Ulta Beauty',
        price: '$40',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$42',
          percentage: 5
        },
        rating: 4.7,
        reviews: 1500
      },
      {
        platform: 'Amazon',
        price: '$41',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.6,
        reviews: 2200
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.7 },
      { month: 'Feb', rating: 4.8 },
      { month: 'Mar', rating: 4.8 }
    ],
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Mia Thompson',
        rating: 5,
        comment: 'Best foundation I’ve ever used! It covers everything and doesn’t feel heavy on my skin.',
        date: '2024-03-14',
        helpful: 80,
        images: [
          'https://images.unsplash.com/photo-1584473173317-d06f8408b3ff?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: '24-Hour Matte Foundation',
        price: '$45',
        rating: 4.9,
        specifications: {
          'Size': '30ml',
          'Texture': 'Creamy',
          'Shelf Life': '12 months',
          'Application': 'AM only'
        },
        keyDifferences: [
          'Slightly higher price',
          'Slightly longer wear time',
          'Better for drier skin with added hydration'
        ]
      },
      {
        name: 'Flawless Coverage Foundation',
        price: '$38',
        rating: 4.7,
        specifications: {
          'Size': '30ml',
          'Texture': 'Velvety',
          'Shelf Life': '12 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Slightly more affordable',
          'Softer, more velvety texture',
          'Longer shelf life'
        ]
      }
    ]
  },
  {
    id: '14',
    name: 'Volumizing Mascara',
    category: 'beauty',
    subCategory: 'makeup',
    rating: 4.7,
    image: '/volumizing_mascara.webp',
    description: 'Dramatic volumizing mascara that lifts and thickens lashes for a bold, full-lash look without clumping.',
    price: '$28',
    brand: 'LuxeLash',
    features: [
      'Buildable volume',
      'Smudge-proof',
      'Water-resistant',
      'Long-lasting formula',
      'Suitable for sensitive eyes'
    ],
    pros: [
      'Adds instant volume and length',
      'Non-clumping formula',
      'Perfect for dramatic lashes',
      'Long-lasting without flaking'
    ],
    cons: [
      'May be difficult to remove without makeup remover',
      'Water-resistant, but not fully waterproof',
      'Slightly heavy formula'
    ],
    specifications: {
      'Size': '10g',
      'Texture': 'Thick',
      'Shelf Life': '12 months',
      'Application': 'AM, as needed'
    },
    new: true,
    purchaseLink: 'https://www.luxelash.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$28',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.7,
        reviews: 1800
      },
      {
        platform: 'Ulta Beauty',
        price: '$26',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$28',
          percentage: 7
        },
        rating: 4.6,
        reviews: 1200
      },
      {
        platform: 'Amazon',
        price: '$27',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.5,
        reviews: 2500
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.5 },
      { month: 'Feb', rating: 4.6 },
      { month: 'Mar', rating: 4.7 }
    ],
    reviews: [
      {
        id: 'r8',
        userId: 'u8',
        userName: 'Olivia Carter',
        rating: 5,
        comment: 'This mascara gives my lashes such volume! It doesn’t smudge and lasts all day.',
        date: '2024-03-10',
        helpful: 90,
        images: [
          'https://images.unsplash.com/photo-1600312923740-9498fd016cb7?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Max Volume Mascara',
        price: '$32',
        rating: 4.8,
        specifications: {
          'Size': '10g',
          'Texture': 'Thick',
          'Shelf Life': '12 months',
          'Application': 'AM only'
        },
        keyDifferences: [
          'Higher price',
          'More intense volume',
          'Requires more time to dry'
        ]
      },
      {
        name: 'Lengthening Mascara',
        price: '$24',
        rating: 4.6,
        specifications: {
          'Size': '10g',
          'Texture': 'Light',
          'Shelf Life': '12 months',
          'Application': 'AM only'
        },
        keyDifferences: [
          'More affordable',
          'Focuses on lengthening rather than volume',
          'Lighter texture'
        ]
      }
    ]
  },
  {
    id: '15',
    name: 'Matte Lipstick',
    category: 'beauty',
    subCategory: 'makeup',
    rating: 4.9,
    image: '/matte_lipstick.jpeg',
    description: 'Long-lasting matte lipstick with rich pigment and a smooth finish, available in various bold shades.',
    price: '$22',
    brand: 'LuxeLips',
    features: [
      'Matte finish',
      'Highly pigmented',
      'Transfer-resistant',
      'Hydrating formula',
      'Available in 12 shades'
    ],
    pros: [
      'Intense color payoff',
      'Non-drying formula',
      'Perfect for all-day wear',
      'Smooth and comfortable on lips'
    ],
    cons: [
      'May require touch-ups after eating or drinking',
      'Takes time to fully dry',
      'Not ideal for chapped lips'
    ],
    specifications: {
      'Size': '4g',
      'Texture': 'Matte',
      'Shelf Life': '18 months',
      'Application': 'AM/PM, as needed'
    },
    new: true,
    purchaseLink: 'https://www.luxelips.com',
    trending: true,
    sales: [
      {
        platform: 'Sephora',
        price: '$22',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.9,
        reviews: 2200
      },
      {
        platform: 'Ulta Beauty',
        price: '$20',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$22',
          percentage: 9
        },
        rating: 4.8,
        reviews: 1800
      },
      {
        platform: 'Amazon',
        price: '$21',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.7,
        reviews: 3000
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.8 },
      { month: 'Feb', rating: 4.8 },
      { month: 'Mar', rating: 4.9 }
    ],
    reviews: [
      {
        id: 'r9',
        userId: 'u9',
        userName: 'Ava Miller',
        rating: 5,
        comment: 'This matte lipstick is perfect! The color is vibrant and it lasts all day without drying my lips.',
        date: '2024-03-08',
        helpful: 100,
        images: [
          'https://images.unsplash.com/photo-1600372907866-0b582ff3b8c4?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Bold Matte Lipstick',
        price: '$25',
        rating: 4.9,
        specifications: {
          'Size': '4g',
          'Texture': 'Matte',
          'Shelf Life': '18 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Higher price',
          'More shades available',
          'Slightly creamier finish'
        ]
      },
      {
        name: 'Matte Lip Creme',
        price: '$18',
        rating: 4.7,
        specifications: {
          'Size': '4g',
          'Texture': 'Matte',
          'Shelf Life': '18 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'More affordable',
          'Less pigmented',
          'Creamier texture'
        ]
      }
    ]
  },
  {
    id: '16',
    name: 'Eau de Parfum - Luxe Essence',
    category: 'beauty',
    subCategory: 'fragrance',
    rating: 4.9,
    image: '/eau_de_parfum_luxe_essence.webp',
    description: 'A luxurious and sophisticated fragrance featuring notes of jasmine, sandalwood, and vanilla for a warm, inviting scent.',
    price: '$95',
    brand: 'EssenceLuxury',
    features: [
      'Long-lasting fragrance',
      'Top notes of jasmine and bergamot',
      'Heart notes of sandalwood and rose',
      'Base notes of vanilla and amber',
      'No parabens or phthalates'
    ],
    pros: [
      'Elegant and timeless scent',
      'Perfect for evening and special occasions',
      'Unisex fragrance',
      'High-quality ingredients'
    ],
    cons: [
      'Premium price point',
      'May be too strong for some',
      'Not suitable for daily wear for some users'
    ],
    specifications: {
      'Size': '50ml',
      'Type': 'Eau de Parfum',
      'Shelf Life': '36 months',
      'Application': 'AM/PM, as desired'
    },
    new: true,
    purchaseLink: 'https://www.essenceluxury.com',
    trending: true,
    sales: [
      {
        platform: 'Sephora',
        price: '$95',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.9,
        reviews: 500
      },
      {
        platform: 'Ulta Beauty',
        price: '$90',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$95',
          percentage: 5
        },
        rating: 4.8,
        reviews: 350
      },
      {
        platform: 'Amazon',
        price: '$92',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.8,
        reviews: 800
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.8 },
      { month: 'Feb', rating: 4.8 },
      { month: 'Mar', rating: 4.9 }
    ],
    reviews: [
      {
        id: 'r10',
        userId: 'u10',
        userName: 'Sophia Martinez',
        rating: 5,
        comment: 'A beautiful, elegant fragrance. Perfect for evening wear, it lasts for hours without fading.',
        date: '2024-03-18',
        helpful: 90,
        images: [
          'https://images.unsplash.com/photo-1574688234731-f2a98ea97434?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Luxe Jasmine Fragrance',
        price: '$110',
        rating: 4.9,
        specifications: {
          'Size': '50ml',
          'Type': 'Eau de Parfum',
          'Shelf Life': '36 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Higher price point',
          'Focuses more on jasmine notes',
          'More sophisticated blend of florals'
        ]
      },
      {
        name: 'Amber Sandalwood Perfume',
        price: '$85',
        rating: 4.7,
        specifications: {
          'Size': '50ml',
          'Type': 'Eau de Parfum',
          'Shelf Life': '24 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'More affordable',
          'Focus on amber and sandalwood notes',
          'Shorter shelf life'
        ]
      }
    ]
  }, 
  {
    id: '17',
    name: 'Eau de Toilette - Fresh Bloom',
    category: 'beauty',
    subCategory: 'fragrance',
    rating: 4.6,
    image: '/eau_de_toilette_fresh_bloom.jpg',
    description: 'A fresh, floral fragrance with notes of peony, freesia, and citrus that provides a light, refreshing scent perfect for everyday wear.',
    price: '$48',
    brand: 'BloomEssence',
    features: [
      'Light and refreshing',
      'Top notes of peony and citrus',
      'Heart notes of freesia and lily',
      'Base notes of musk and sandalwood',
      'Dermatologist tested'
    ],
    pros: [
      'Great for daytime wear',
      'Subtle and not overpowering',
      'Perfect for spring and summer',
      'Affordable price'
    ],
    cons: [
      'Not as long-lasting as eau de parfum',
      'Fragrance may be too light for some users',
      'Requires reapplication during the day'
    ],
    specifications: {
      'Size': '100ml',
      'Type': 'Eau de Toilette',
      'Shelf Life': '24 months',
      'Application': 'AM, as needed'
    },
    new: true,
    purchaseLink: 'https://www.bloomessence.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$48',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.6,
        reviews: 1200
      },
      {
        platform: 'Ulta Beauty',
        price: '$45',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$48',
          percentage: 6
        },
        rating: 4.5,
        reviews: 800
      },
      {
        platform: 'Amazon',
        price: '$47',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.6,
        reviews: 1000
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.5 },
      { month: 'Feb', rating: 4.6 },
      { month: 'Mar', rating: 4.6 }
    ],
    reviews: [
      {
        id: 'r11',
        userId: 'u11',
        userName: 'Chloe Wilson',
        rating: 5,
        comment: 'A fresh and light scent that’s perfect for everyday wear. It’s not overpowering, but lasts for a good amount of time.',
        date: '2024-03-12',
        helpful: 80,
        images: [
          'https://images.unsplash.com/photo-1585534151952-29578b67b2bc?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Citrus Bloom Fragrance',
        price: '$55',
        rating: 4.7,
        specifications: {
          'Size': '100ml',
          'Type': 'Eau de Toilette',
          'Shelf Life': '24 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Slightly higher price',
          'Stronger citrus notes',
          'Longer lasting fragrance'
        ]
      },
      {
        name: 'Floral Breeze Perfume',
        price: '$40',
        rating: 4.5,
        specifications: {
          'Size': '100ml',
          'Type': 'Eau de Toilette',
          'Shelf Life': '12 months',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'More affordable',
          'Focuses more on floral notes',
          'Shorter shelf life'
        ]
      }
    ]
  },
  {
    id: '18',
    name: 'Professional Hair Straightener',
    category: 'beauty',
    subCategory: 'tools',
    rating: 4.7,
    image: '/straightener.jpg',
    description: 'Ceramic-coated hair straightener with adjustable heat settings for sleek, frizz-free hair in minutes.',
    price: '$99',
    brand: 'SleekHair',
    features: [
      'Ceramic-coated plates',
      'Adjustable heat settings (250°F - 450°F)',
      'Quick heat-up time',
      'Temperature lock feature',
      'Worldwide voltage for travel'
    ],
    pros: [
      'Heats up quickly',
      'Leaves hair smooth and shiny',
      'Adjustable temperature for different hair types',
      'Durable and long-lasting'
    ],
    cons: [
      'Can be too hot for fine hair',
      'Requires careful handling due to heat',
      'Not as lightweight as other models'
    ],
    specifications: {
      'Size': 'Standard',
      'Heat Settings': '250°F - 450°F',
      'Cord Length': '8ft',
      'Application': 'AM, as needed'
    },
    new: true,
    purchaseLink: 'https://www.sleekhair.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$99',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.7,
        reviews: 1100
      },
      {
        platform: 'Ulta Beauty',
        price: '$95',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$99',
          percentage: 4
        },
        rating: 4.6,
        reviews: 750
      },
      {
        platform: 'Amazon',
        price: '$98',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.8,
        reviews: 2000
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.6 },
      { month: 'Feb', rating: 4.7 },
      { month: 'Mar', rating: 4.7 }
    ],
    reviews: [
      {
        id: 'r13',
        userId: 'u13',
        userName: 'Charlotte Brown',
        rating: 5,
        comment: 'This straightener works wonders for my thick hair! It gets super hot and leaves my hair perfectly straight.',
        date: '2024-03-11',
        helpful: 90,
        images: [
          'https://images.unsplash.com/photo-1596504928103-bac2b9b3ca70?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Pro Straightening Iron',
        price: '$129',
        rating: 4.9,
        specifications: {
          'Size': 'Standard',
          'Heat Settings': '220°F - 450°F',
          'Cord Length': '9ft',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Higher price point',
          'Slightly more heat range',
          'Longer cord length'
        ]
      },
      {
        name: 'Mini Hair Straightener',
        price: '$69',
        rating: 4.5,
        specifications: {
          'Size': 'Compact',
          'Heat Settings': '180°F - 400°F',
          'Cord Length': '6ft',
          'Application': 'AM only'
        },
        keyDifferences: [
          'More affordable',
          'Compact design for travel',
          'Lower heat range'
        ]
      }
    ]
  },
  {
    id: '19',
    name: 'Electric Facial Massager',
    category: 'beauty',
    subCategory: 'tools',
    rating: 4.7,
    image: '/facial_massager.jpg',
    description: 'Facial massager that uses gentle vibrations to stimulate circulation and promote a youthful glow.',
    price: '$59',
    brand: 'RadianceGlow',
    features: [
      'Gentle vibration technology',
      '3 speed settings',
      'Rechargeable battery',
      'Ergonomic design',
      'Portable and lightweight'
    ],
    pros: [
      'Improves blood circulation',
      'Promotes collagen production',
      'Gentle enough for daily use',
      'Compact and travel-friendly'
    ],
    cons: [
      'Requires regular charging',
      'May not be suitable for very sensitive skin',
      'Not as effective as professional treatments'
    ],
    specifications: {
      'Size': 'Compact',
      'Battery Life': '2 hours of continuous use',
      'Charging Time': '3 hours',
      'Application': 'AM, as needed'
    },
    new: true,
    purchaseLink: 'https://www.radianceglow.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$59',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.7,
        reviews: 800
      },
      {
        platform: 'Ulta Beauty',
        price: '$55',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$59',
          percentage: 7
        },
        rating: 4.6,
        reviews: 600
      },
      {
        platform: 'Amazon',
        price: '$58',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.8,
        reviews: 1500
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.6 },
      { month: 'Feb', rating: 4.7 },
      { month: 'Mar', rating: 4.7 }
    ],
    reviews: [
      {
        id: 'r14',
        userId: 'u14',
        userName: 'Ava Taylor',
        rating: 5,
        comment: 'I love using this massager in the morning! It helps my face feel refreshed and glowing.',
        date: '2024-03-09',
        helpful: 85,
        images: [
          'https://images.unsplash.com/photo-1595370802830-6f55e93ed31f?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Advanced Facial Massager',
        price: '$89',
        rating: 4.9,
        specifications: {
          'Size': 'Standard',
          'Battery Life': '3 hours of continuous use',
          'Charging Time': '2 hours',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Higher price point',
          'Longer battery life',
          'Additional features like heat therapy'
        ]
      },
      {
        name: 'Mini Facial Massager',
        price: '$39',
        rating: 4.5,
        specifications: {
          'Size': 'Compact',
          'Battery Life': '1 hour of continuous use',
          'Charging Time': '3 hours',
          'Application': 'AM only'
        },
        keyDifferences: [
          'Lower price point',
          'Smaller size for easy travel',
          'Shorter battery life'
        ]
      }
    ]
  },
  {
    id: '20',
    name: 'Sonic Facial Cleansing Brush',
    category: 'beauty',
    subCategory: 'tools',
    rating: 4.8,
    image: '/brush.webp',
    description: 'Advanced sonic technology for deep pore cleansing, removing dirt, oil, and makeup residue for smoother, more radiant skin.',
    price: '$149',
    brand: 'GlowTech',
    features: [
      'Sonic vibration technology',
      'Waterproof design',
      'Multiple speed settings',
      'Soft silicone brush head',
      'Rechargeable battery'
    ],
    pros: [
      'Provides deep cleansing',
      'Gentle on skin',
      'Reduces pore size and blemishes',
      'Waterproof for use in the shower'
    ],
    cons: [
      'Premium price point',
      'Requires regular charging',
      'Brush head needs replacing after a few months'
    ],
    specifications: {
      'Size': 'Compact',
      'Battery Life': '1 hour of continuous use',
      'Charging Time': '3 hours',
      'Application': 'Daily, AM/PM'
    },
    new: true,
    purchaseLink: 'https://www.glowtech.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$149',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.8,
        reviews: 1200
      },
      {
        platform: 'Ulta Beauty',
        price: '$140',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$149',
          percentage: 6
        },
        rating: 4.7,
        reviews: 800
      },
      {
        platform: 'Amazon',
        price: '$145',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.9,
        reviews: 2500
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.7 },
      { month: 'Feb', rating: 4.8 },
      { month: 'Mar', rating: 4.8 }
    ],
    reviews: [
      {
        id: 'r12',
        userId: 'u12',
        userName: 'Isabella Green',
        rating: 5,
        comment: 'This brush has changed my skincare routine! My skin has never been smoother and more radiant.',
        date: '2024-03-10',
        helpful: 100,
        images: [
          'https://images.unsplash.com/photo-1587740209567-3d06bc6d215e?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'Luxury Facial Brush Pro',
        price: '$179',
        rating: 4.9,
        specifications: {
          'Size': 'Compact',
          'Battery Life': '1.5 hours of continuous use',
          'Charging Time': '3 hours',
          'Application': 'AM/PM'
        },
        keyDifferences: [
          'Higher price point',
          'More advanced settings',
          'Longer battery life'
        ]
      },
      {
        name: 'Facial Cleanser Brush Mini',
        price: '$119',
        rating: 4.7,
        specifications: {
          'Size': 'Compact',
          'Battery Life': '1 hour of continuous use',
          'Charging Time': '2 hours',
          'Application': 'AM only'
        },
        keyDifferences: [
          'More affordable',
          'Smaller design',
          'Fewer speed settings'
        ]
      }
    ]
  },
  {
    id: '21',
    name: 'LED Light Therapy Mask',
    category: 'beauty',
    subCategory: 'tools',
    rating: 4.8,
    image: '/face_mask.webp',
    description: 'Red, blue, and yellow LED lights to address various skin concerns such as acne, wrinkles, and uneven skin tone.',
    price: '$169',
    brand: 'GlowTherapy',
    features: [
      'Red, blue, and yellow LED lights',
      'Anti-aging and acne treatment',
      'Adjustable straps for comfortable fit',
      'Portable and rechargeable',
      'Non-invasive and safe'
    ],
    pros: [
      'Promotes collagen production',
      'Helps with acne and blemishes',
      'Non-invasive skin treatment',
      'Adjustable for different face sizes'
    ],
    cons: [
      'Expensive compared to other tools',
      'Requires consistent use for best results',
      'Can be bulky for travel'
    ],
    specifications: {
      'Size': 'Full face mask',
      'Battery Life': '45 minutes of use',
      'Charging Time': '2 hours',
      'Application': '3-5 times a week'
    },
    new: true,
    purchaseLink: 'https://www.glowtherapy.com',
    sales: [
      {
        platform: 'Sephora',
        price: '$169',
        url: 'https://www.sephora.com',
        inStock: true,
        rating: 4.8,
        reviews: 900
      },
      {
        platform: 'Ulta Beauty',
        price: '$159',
        url: 'https://www.ulta.com',
        inStock: true,
        discount: {
          original: '$169',
          percentage: 6
        },
        rating: 4.7,
        reviews: 650
      },
      {
        platform: 'Amazon',
        price: '$165',
        url: 'https://www.amazon.com',
        inStock: true,
        shipping: 'Prime Delivery',
        rating: 4.8,
        reviews: 2000
      }
    ],
    monthlyRatings: [
      { month: 'Jan', rating: 4.7 },
      { month: 'Feb', rating: 4.8 },
      { month: 'Mar', rating: 4.8 }
    ],
    reviews: [
      {
        id: 'r15',
        userId: 'u15',
        userName: 'Mia Johnson',
        rating: 5,
        comment: 'This LED mask is amazing! My skin feels smoother, and I’ve noticed fewer breakouts.',
        date: '2024-03-05',
        helpful: 110,
        images: [
          'https://images.unsplash.com/photo-1593715151685-f6d4daff5d3a?auto=format&fit=crop&w=800'
        ]
      }
    ],
    comparableProducts: [
      {
        name: 'LED Skin Rejuvenation Mask',
        price: '$199',
        rating: 4.9,
        specifications: {
          'Size': 'Full face mask',
          'Battery Life': '60 minutes of use',
          'Charging Time': '2 hours',
          'Application': 'Daily'
        },
        keyDifferences: [
          'Higher price point',
          'Longer battery life',
          'More LED color options'
        ]
      },
      {
        name: 'Mini LED Light Mask',
        price: '$129',
        rating: 4.6,
        specifications: {
          'Size': 'Mini face mask',
          'Battery Life': '30 minutes of use',
          'Charging Time': '1 hour',
          'Application': '2-3 times a week'
        },
        keyDifferences: [
          'More affordable',
          'Smaller design',
          'Shorter battery life'
        ]
      }
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Future of Electric Vehicles: Tesla Model 3 Price Trends',
    excerpt: 'An analysis of Tesla Model 3 pricing across different platforms and what it means for buyers.',
    content: `The Tesla Model 3 continues to dominate the electric vehicle market, with prices showing interesting trends across various platforms.

    Price Analysis
    We've tracked Model 3 prices across multiple platforms, revealing significant variations and potential savings opportunities.
    Tesla Direct offers the most competitive pricing, while third-party sellers often include additional benefits like extended warranties.
    
    Market Impact
    The recent price adjustments have made the Model 3 more accessible than ever, contributing to its growing popularity.
    Competition from other manufacturers has pushed Tesla to maintain competitive pricing while continuing to improve features.
    
    Buying Recommendations
    The best time to buy often coincides with end-of-quarter sales pushes.
    Consider certified pre-owned options from authorized dealers for additional savings.
    Compare prices across multiple platforms to find the best deal, factoring in delivery costs and available incentives.`,
    author: 'Alex Thompson',
    date: '2024-03-10',
    category: 'cars',
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800',
    readTime: '8 min',
    salesTrends: {
      title: 'Tesla Model 3 Price Trends',
      description: 'Price comparison across major platforms over the last 3 months',
      data: [
        {
          platform: 'Tesla Direct',
          values: [
            { date: '2024-01', price: 40990 },
            { date: '2024-02', price: 39990 },
            { date: '2024-03', price: 38990 }
          ]
        },
        {
          platform: 'CarMax',
          values: [
            { date: '2024-01', price: 43990 },
            { date: '2024-02', price: 42990 },
            { date: '2024-03', price: 41990 }
          ]
        },
        {
          platform: 'Carvana',
          values: [
            { date: '2024-01', price: 42590 },
            { date: '2024-02', price: 41590 },
            { date: '2024-03', price: 40590 }
          ]
        }
      ]
    }
  },
  {
    id: 'c5',
    title: 'Lucid Air: Redefining Luxury EVs',
    excerpt: 'How Lucid is pushing the boundaries of electric vehicle technology.',
    content: `The Lucid Air represents the pinnacle of electric vehicle technology.

    Range Innovation
    Industry-leading range up to 516 miles.
    Efficient powertrain design sets new standards.

    Luxury Redefined
    Spacious interior with premium materials.
    Advanced technology integration throughout.`,
    author: 'Emily Wong',
    date: '2024-03-16',
    category: 'cars',
    image: '/lucid_air_blog.webp',
    readTime: '8 min'
  },
  {
    id: 'c3',
    title: 'Porsche Taycan: The Future of Performance',
    excerpt: 'How Porsche is redefining electric performance and luxury.',
    content: `The Porsche Taycan represents a watershed moment in the evolution of electric vehicles.

    Performance Legacy
    Porsche has successfully translated its performance heritage to the electric era.
    The Taycan offers unmatched driving dynamics in the EV segment.

    Technology Innovation
    800V architecture enables faster charging and better performance.
    The interior blends traditional Porsche design with cutting-edge tech.`,
    author: 'Sarah Miller',
    date: '2024-03-14',
    category: 'cars',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800',
    readTime: '7 min'
  },
  {
    id: 'c4',
    title: 'Electric SUV Revolution: Rivian R1S Review',
    excerpt: 'A comprehensive look at the groundbreaking Rivian R1S electric SUV.',
    content: `The Rivian R1S is changing how we think about electric SUVs.

    Off-road Capability
    Quad-motor setup provides unmatched off-road performance.
    Advanced terrain management system handles any condition.

    Family Friendly
    Spacious interior with three-row seating.
    Impressive storage solutions throughout.`,
    author: 'David Park',
    date: '2024-03-15',
    category: 'cars',
    image: '/blog_rivian.avif',
    readTime: '9 min'
  },
  {
    id: 'c2',
    title: 'BMW i4 vs Tesla Model 3: The Ultimate EV Showdown',
    excerpt: 'A detailed comparison of two leading electric sedans and their value propositions.',
    content: `Comparing the BMW i4 and Tesla Model 3 reveals fascinating insights into the current state of luxury electric vehicles.

    Performance Comparison
    Both vehicles offer exceptional performance, with the i4 M50 matching the Model 3 Performance in acceleration.
    The BMW offers a more traditional luxury car feel, while the Tesla emphasizes tech and innovation.

    Price Analysis
    The i4 commands a premium price but offers traditional luxury brand value.
    Tesla's direct-to-consumer model often results in better initial pricing.
    
    Long-term Value
    Both vehicles show strong resale value potential.
    Consider warranty coverage and service network availability in your area.`,
    author: 'Michael Chen',
    date: '2024-03-12',
    category: 'cars',
    image: '/i4_vs_3.png',
    readTime: '10 min'
  },
  {
    id: 'b2',
    title: 'Luxury Skincare Market Analysis: Price Trends and Best Deals',
    excerpt: 'A comprehensive look at luxury skincare pricing and where to find the best deals.',
    content: `The luxury skincare market has seen significant changes in pricing and availability across major retailers.
    
    Price Comparison
    We've analyzed prices across Sephora, Ulta Beauty, and Amazon to help you find the best deals.
    Many retailers now offer price matching and membership benefits for additional savings.
    
    Market Trends
    The rise of clean beauty has influenced pricing strategies.
    Direct-to-consumer brands are disrupting traditional retail pricing models.
    
    Shopping Tips
    Look for bundle deals and gift sets for better value.
    Sign up for retailer loyalty programs to access exclusive discounts.
    Consider shopping during major sales events for significant savings.`,
    author: 'Dr. Sarah Williams',
    date: '2024-03-12',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800',
    readTime: '6 min',
    salesTrends: {
      title: 'Luxury Face Serum Price Trends',
      description: 'Price comparison across major beauty retailers',
      data: [
        {
          platform: 'Sephora',
          values: [
            { date: '2024-01', price: 89 },
            { date: '2024-02', price: 89 },
            { date: '2024-03', price: 89 }
          ]
        },
        {
          platform: 'Ulta Beauty',
          values: [
            { date: '2024-01', price: 89 },
            { date: '2024-02', price: 84 },
            { date: '2024-03', price: 79 }
          ]
        },
        {
          platform: 'Amazon',
          values: [
            { date: '2024-01', price: 89 },
            { date: '2024-02', price: 87 },
            { date: '2024-03', price: 85 }
          ]
        }
      ]
    }
  },
  {
    id: 'b6',
    title: 'The Science Behind Advanced Night Repair',
    excerpt: 'Understanding the revolutionary technology in modern night serums.',
    content: `Night repair serums have evolved significantly with advanced formulations.

    Key Ingredients
    Hyaluronic acid for deep hydration.
    Peptides for collagen production.
    Antioxidants for protection.

    Clinical Results
    Studies show significant improvement in skin texture.
    Long-term benefits for skin health.`,
    author: 'Dr. Jennifer Lee',
    date: '2024-03-17',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800',
    readTime: '7 min'
  },
  {
    id: 'b7',
    title: 'Retinol Revolution: The Gold Standard in Anti-aging',
    excerpt: 'Everything you need to know about retinol products and their benefits.',
    content: `Retinol remains the most studied and effective anti-aging ingredient.

    Understanding Retinol
    Different forms and concentrations.
    How to incorporate it into your routine.

    Product Selection
    Choosing the right concentration.
    Best formulations for different skin types.`,
    author: 'Lisa Chen',
    date: '2024-03-18',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800',
    readTime: '9 min'
  },
  {
    id: 'b8',
    title: 'Vitamin C: The Brightening Powerhouse',
    excerpt: 'A deep dive into vitamin C skincare products and their effectiveness.',
    content: `Vitamin C is essential for bright, healthy skin.

    Benefits
    Powerful antioxidant protection.
    Collagen production support.
    Brightening effects.

    Choosing Products
    Stability considerations.
    Best combinations with other ingredients.`,
    author: 'Maria Rodriguez',
    date: '2024-03-19',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800',
    readTime: '6 min'
  },
  {
    id: 'b9',
    title: 'The Art of Essence: Asian Beauty Secrets',
    excerpt: 'Exploring the science and tradition behind Asian beauty essences.',
    content: `Essences are the heart of Asian skincare routines.

    Traditional Ingredients
    Fermented extracts.
    Natural botanicals.
    
    Modern Formulations
    Scientific advancements.
    Hybrid products.`,
    author: 'Yuki Tanaka',
    date: '2024-03-20',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&w=800',
    readTime: '8 min'
  }
];
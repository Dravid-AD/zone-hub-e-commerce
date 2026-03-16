export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
  description: string;
  specs?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  image: string;
}

export const categories: Category[] = [
  { id: "electronics", name: "Electronics", icon: "Cpu", count: 234, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" },
  { id: "gaming", name: "Gaming", icon: "Gamepad2", count: 156, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80" },
  { id: "fashion", name: "Fashion", icon: "Shirt", count: 312, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80" },
  { id: "accessories", name: "Accessories", icon: "Watch", count: 189, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
  { id: "home", name: "Home & Living", icon: "Home", count: 278, image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80" },
  { id: "audio", name: "Audio", icon: "Headphones", count: 97, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" },
];

export const products: Product[] = [
  { id: "1", name: "Quantum Pro Headphones", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", category: "audio", rating: 4.8, reviews: 234, badge: "Best Seller", inStock: true, description: "Precision-engineered wireless headphones with spatial audio and 40-hour battery life.", specs: { "Driver": "50mm Titanium", "Battery": "40 hours", "Connectivity": "Bluetooth 5.3", "Weight": "265g" } },
  { id: "2", name: "Nebula Smartwatch X1", price: 449, originalPrice: 549, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", category: "accessories", rating: 4.6, reviews: 189, badge: "New", inStock: true, description: "Next-generation smartwatch with AMOLED display, health monitoring, and 5-day battery.", specs: { "Display": "1.9\" AMOLED", "Battery": "5 days", "Water Resistance": "5ATM", "Weight": "45g" } },
  { id: "3", name: "Stealth Gaming Mouse", price: 89, originalPrice: 129, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80", category: "gaming", rating: 4.9, reviews: 567, badge: "Hot", inStock: true, description: "Ultra-lightweight gaming mouse with 25K DPI sensor and zero-latency wireless.", specs: { "Sensor": "25,600 DPI", "Weight": "58g", "Battery": "80 hours", "Switches": "Optical" } },
  { id: "4", name: "ProBook Ultra 16\"", price: 1899, originalPrice: 2199, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80", category: "electronics", rating: 4.7, reviews: 312, badge: "Premium", inStock: true, description: "Professional-grade laptop with M3 chip, 32GB RAM, and stunning Liquid Retina display.", specs: { "Processor": "M3 Pro", "RAM": "32GB", "Storage": "1TB SSD", "Display": "16\" Liquid Retina" } },
  { id: "5", name: "Aura Speaker System", price: 599, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80", category: "audio", rating: 4.5, reviews: 145, inStock: true, description: "Room-filling 360° sound with adaptive EQ and multi-room connectivity.", specs: { "Drivers": "6 custom", "Connectivity": "WiFi + BT", "Power": "120W", "Format": "Dolby Atmos" } },
  { id: "6", name: "Velocity Running Shoes", price: 179, originalPrice: 219, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", category: "fashion", rating: 4.4, reviews: 890, badge: "Trending", inStock: true, description: "Carbon-plated performance running shoes with energy-return foam technology.", specs: { "Weight": "198g", "Drop": "8mm", "Upper": "Engineered mesh", "Sole": "Carbon plate" } },
  { id: "7", name: "Pixel 4K Action Cam", price: 349, originalPrice: 449, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80", category: "electronics", rating: 4.6, reviews: 423, inStock: true, description: "Waterproof 4K/120fps action camera with horizon lock and live streaming.", specs: { "Resolution": "4K/120fps", "Stabilization": "HyperSmooth 5", "Waterproof": "33ft", "Battery": "2hrs" } },
  { id: "8", name: "Ergo Desk Pro", price: 799, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80", category: "home", rating: 4.8, reviews: 167, badge: "Editor's Pick", inStock: true, description: "Motorized standing desk with memory presets and cable management system.", specs: { "Height": "24-50\"", "Load": "300lbs", "Width": "60\"", "Motor": "Dual" } },
  { id: "9", name: "Cloud Controller X", price: 69, originalPrice: 89, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&q=80", category: "gaming", rating: 4.7, reviews: 1023, inStock: true, description: "Hall-effect controller with zero drift, adjustable triggers, and RGB lighting.", specs: { "Sticks": "Hall-effect", "Battery": "30 hours", "Connectivity": "USB-C/BT", "Weight": "220g" } },
  { id: "10", name: "Minimal Backpack", price: 129, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80", category: "accessories", rating: 4.3, reviews: 234, inStock: true, description: "Water-resistant daypack with dedicated laptop compartment and hidden pockets.", specs: { "Volume": "22L", "Laptop": "16\" max", "Material": "Recycled nylon", "Weight": "680g" } },
  { id: "11", name: "Studio Monitor 27\"", price: 699, originalPrice: 849, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80", category: "electronics", rating: 4.9, reviews: 87, badge: "Pro", inStock: true, description: "4K color-accurate monitor for creative professionals with USB-C docking.", specs: { "Resolution": "4K UHD", "Panel": "IPS", "Color": "99% DCI-P3", "Ports": "USB-C 90W" } },
  { id: "12", name: "Smart Home Hub", price: 149, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", category: "home", rating: 4.2, reviews: 345, inStock: true, description: "Centralized smart home controller with Thread, Matter, and Zigbee support.", specs: { "Protocols": "Thread/Matter/Zigbee", "Display": "7\" Touch", "Speaker": "Built-in", "Voice": "Multi-assistant" } },
];

export const testimonials = [
  { name: "Sarah Chen", role: "Product Designer", text: "Zone Hub transformed how I shop for tech. The curation is impeccable.", avatar: "SC" },
  { name: "Marcus Rivera", role: "Software Engineer", text: "Fast delivery, premium quality. Every product feels hand-picked.", avatar: "MR" },
  { name: "Aisha Patel", role: "Content Creator", text: "The best online shopping experience I've ever had. Period.", avatar: "AP" },
  { name: "James Kim", role: "Architect", text: "Clean design, intuitive UX, and products that match the presentation.", avatar: "JK" },
];

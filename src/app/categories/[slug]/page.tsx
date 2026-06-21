"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const categoryData: Record<string, any> = {
  "commercial-kitchen-laundry": {
    title: "Commercial Kitchen",
    subtitle: "& Laundry",
    bannerImage: "/images/categories/commercial-kitchen.jpg",
    heroImage: "/images/categories/commercial-kitchen-1.jpg",
    introTitle: "Innovative Solutions for the Gulf Region",
    description1: "Across the Gulf region, businesses trust Agromech Hospitality for reliable and innovative commercial kitchen and laundry solutions. Our Commercial Kitchens & Laundry division partners with leading hotels, restaurants, industrial catering facilities, hospitals, clubs, and other organisations to deliver high-performance equipment tailored to operational needs.",
    description2: "Combining advanced technology with functional, industry-driven design, we create efficient and practical environments that enable culinary and hospitality professionals to perform at their best. From planning and installation to after-sales support and maintenance, we provide end-to-end solutions customised to your business requirements.",
    solutionsTitle: "Our Solutions Include",
    solutions: [
      { name: "Turnkey Projects", desc: "Complete supply, installation, testing & commissioning of kitchen equipment." },
      { name: "Cold Room Solutions", desc: "Design, supply & installation of customized cold storage systems." },
      { name: "Stainless Steel Fabrication", desc: "Custom-made kitchen fixtures, counters & furniture." },
      { name: "Modular Kitchens", desc: "Flexible, scalable systems for optimal workflow." },
      { name: "Ventilation & Exhaust", desc: "High-performance systems ensuring safety & efficiency." },
      { name: "Dishwashing & Stewarding", desc: "Comprehensive solutions for clean and efficient operations." }
    ],
    brands: [
      { name: "MKN", logo: "/images/brands/logo_44.jpeg" },
      { name: "Bonnet", logo: "/images/brands/logo_45.jpeg" },
      { name: "Ambach", logo: "/images/brands/logo_46.png" },
      { name: "Electrolux Professional", logo: "/images/brands/logo_47.png" },
      { name: "Fagor", logo: "/images/brands/logo_48.png" },
      { name: "Moffat", logo: "/images/brands/logo_49.jpeg" },
      { name: "Rational", logo: "/images/brands/logo_50.png" },
      { name: "Unox", logo: "/images/brands/logo_51.png" },
      { name: "Convotherm", logo: "/images/brands/logo_52.png" },
      { name: "Precision", logo: "/images/brands/logo_53.png" },
      { name: "Williams Refrigeration", logo: "/images/brands/logo_54.png" },
      { name: "Ginox", logo: "/images/brands/logo_55.png" },
      { name: "Foster", logo: "/images/brands/logo_56.jpeg" },
      { name: "Irinox", logo: "/images/brands/logo_57.jpeg" },
      { name: "Ciam", logo: "/images/brands/logo_58.png" },
      { name: "Halton", logo: "/images/brands/logo_59.png" },
      { name: "Vianen", logo: "/images/brands/logo_60.png" },
      { name: "Ecoair", logo: "/images/brands/logo_61.jpeg" },
      { name: "Meiko", logo: "/images/brands/logo_62.jpeg" },
      { name: "Winterhalter", logo: "/images/brands/logo_63.jpeg" },
      { name: "Hobart", logo: "/images/brands/logo_97.jpg" },
      { name: "Scotsman", logo: "/images/brands/logo_64.jpeg" },
      { name: "B.Pro", logo: "/images/brands/logo_65.jpeg" },
      { name: "Rieber", logo: "/images/brands/logo_66.jpeg" },
      { name: "Hupfer", logo: "/images/brands/logo_67.png" },
      { name: "Tournus Equipement", logo: "/images/brands/logo_68.jpeg" },
      { name: "ScanBox", logo: "/images/brands/logo_69.jpeg" },
      { name: "Alto-Shaam", logo: "/images/brands/logo_70.png" },
      { name: "Salva", logo: "/images/brands/logo_71.jpeg" },
      { name: "Kolb", logo: "/images/brands/logo_72.png" },
      { name: "Miwe", logo: "/images/brands/logo_73.png" },
      { name: "Roller Grill", logo: "/images/brands/logo_74.jpeg" },
      { name: "Robot Coupe", logo: "/images/brands/logo_75.png" },
      { name: "Frymaster", logo: "/images/brands/logo_76.jpeg" },
      { name: "Merrychef", logo: "/images/brands/logo_77.jpeg" },
      { name: "Infrico", logo: "/images/brands/logo_78.jpeg" },
      { name: "Sammic", logo: "/images/brands/logo_79.jpeg" },
      { name: "Carpigiani", logo: "/images/brands/logo_80.jpeg" },
      { name: "Silko", logo: "/images/brands/logo_81.png" },
      { name: "Waring Commercial", logo: "/images/brands/logo_82.png" },
      { name: "Cosmos", logo: "/images/brands/logo_83.png" },
      { name: "Santos", logo: "/images/brands/logo_84.png" },
      { name: "Hamilton Beach", logo: "/images/brands/logo_85.png" },
      { name: "Menumaster", logo: "/images/brands/logo_86.png" },
      { name: "Sirman", logo: "/images/brands/logo_87.png" },
      { name: "Cofrimell", logo: "/images/brands/logo_88.jpeg" },
      { name: "Lincat", logo: "/images/brands/logo_89.jpeg" },
      { name: "Bravilor Bonamat", logo: "/images/brands/logo_90.jpeg" },
      { name: "La Monferrina", logo: "/images/brands/logo_91.jpeg" },
      { name: "Berto's", logo: "/images/brands/logo_92.png" },
      { name: "Brema", logo: "/images/brands/logo_93.jpeg" }
    ]
  },
  "laundry-hygiene": {
    title: "Laundry",
    subtitle: "& Hygiene",
    heroImage: "/images/categories/laundry-hygiene.jpg",
    introTitle: "High-Performance Laundry Solutions",
    description1: "Agromech Hospitality provides comprehensive laundry and hygiene solutions designed for the rigorous demands of the hospitality and healthcare sectors. We offer a range of industrial-grade equipment that ensures maximum efficiency and superior cleanliness.",
    description2: "Our integrated laundry and hygiene systems are engineered to meet the highest international standards, providing energy-efficient performance and uncompromising sanitation.",
    solutionsTitle: "Our Solutions Include",
    solutions: [
      { name: "Integrated Solutions", desc: "Complete laundry and hygiene systems tailored for the hospitality industry." },
      { name: "End-to-End Service", desc: "Supply, installation, testing, and commissioning of advanced equipment." },
      { name: "Laundry Systems", desc: "Energy-efficient and cost-effective equipment ensuring smooth performance." },
      { name: "Hygiene Solutions", desc: "Comprehensive range of cleaning systems, sanitation products, and dispensers." },
      { name: "Quality & Compliance", desc: "Ensuring the highest hygiene standards in line with international regulations." }
    ]
  },
  "table-top": {
    title: "Table",
    subtitle: "Top",
    bannerImage: "/images/categories/table-top.jpg",
    heroImage: "/images/categories/table-top-banner-1.jpg",
    introTitle: "Elegance for Every Table",
    description1: "Elevate your dining experience with Agromech's premium tabletop collections. We provide a wide range of dinnerware, glassware, and cutlery that combine aesthetic appeal with industrial durability.",
    description2: "Whether for a fine-dining restaurant or a busy hotel banquet, our tabletop solutions are curated to leave a lasting impression on your guests.",
    solutionsTitle: "Our Collections Include",
    solutions: [
      { name: "Chinaware", desc: "Premium collections including bespoke designs to enhance every dining experience." },
      { name: "Glassware", desc: "Crystal-clear, durable options for wine, spirits, water, and specialty beverages." },
      { name: "Flatware", desc: "Elegant cutlery crafted for both functionality and style." },
      { name: "Bespoke", desc: "Custom-designed settings tailored to your brand and dining concept." },
      { name: "Table Accessories", desc: "Elegant service pieces including salt & pepper sets, sauce boats, and more." },
      { name: "Placemats & Table Linen", desc: "Stylish, durable, and customizable designs to complement every table setting." },
      { name: "Dinnerware & Serving Sets", desc: "Complete ranges for fine dining, banquets, and casual service." }
    ],
    brands: [
      { name: "Nikko", logo: "/images/brands/logo_0.png" },
      { name: "Cosy & Trendy", logo: "/images/brands/logo_1.jpeg" },
      { name: "Stylepoint", logo: "/images/brands/logo_2.jpeg" },
      { name: "Patra", logo: "/images/brands/logo_3.jpeg" },
      { name: "Luigi Bormioli", logo: "/images/brands/logo_4.png" },
      { name: "Dartington Crystal", logo: "/images/brands/logo_5.png" },
      { name: "Italesse", logo: "/images/brands/logo_6.png" },
      { name: "Nude Glass", logo: "/images/brands/logo_7.png" },
      { name: "Bormioli Rocco", logo: "/images/brands/logo_8.jpeg" },
      { name: "Nipco", logo: "/images/brands/logo_9.jpeg" },
      { name: "Sola", logo: "/images/brands/logo_10.png" },
      { name: "Robert Welch", logo: "/images/brands/logo_11.png" },
      { name: "Cutipol", logo: "/images/brands/logo_12.png" },
      { name: "Belo Inox", logo: "/images/brands/logo_13.png" },
      { name: "Abert", logo: "/images/brands/logo_14.jpeg" },
      { name: "Iris", logo: "/images/brands/logo_15.jpeg" },
      { name: "Neeti Udyog", logo: "/images/brands/logo_16.jpeg" },
      { name: "Skyra", logo: "/images/brands/logo_17.png" },
      { name: "Tablecraft", logo: "/images/brands/logo_18.jpeg" },
      { name: "Lava", logo: "/images/brands/logo_19.jpeg" },
      { name: "Browne Foodservice", logo: "/images/brands/logo_20.png" },
      { name: "Tiger Hotel", logo: "/images/brands/logo_21.png" }
    ]
  },
  "buffetware": {
    title: "Buffet",
    subtitle: "ware",
    bannerImage: "/images/categories/buffetware.jpg",
    heroImage: "/images/categories/buffetware-banner.png",
    introTitle: "Sophisticated Buffet Presentations",
    description1: "Our buffetware solutions are designed to showcase your culinary creations in the best possible light. From chafing dishes to display stands, we offer products that combine style with functionality.",
    description2: "Whether for a luxury hotel or a corporate event, our buffet systems are engineered for both aesthetic impact and operational efficiency.",
    solutionsTitle: "Our Solutions Include",
    solutions: [
      { name: "Chafing Dishes & Food Warmers", desc: "Elegant and durable designs for professional presentation." },
      { name: "Juice, Cereal & Beverage Dispensers", desc: "Functional and stylish solutions for breakfast and brunch setups." },
      { name: "Risers & Display Systems", desc: "Modular and creative arrangements to enhance visual appeal." },
      { name: "Serving Trolleys & Tea Stands", desc: "Mobile and refined service options for premium hospitality." },
      { name: "Coloured Glass, Metal & Wooden Concepts", desc: "Diverse material options for unique buffet themes." },
      { name: "Bespoke Buffet Designs", desc: "Tailor-made setups that align with your property’s aesthetics and service style." },
      { name: "Complete Buffet Presentation Systems", desc: "From concept to creation, designed to elevate every dining experience." }
    ],
    brands: [
      { name: "Abert", logo: "/images/brands/logo_14.jpeg" },
      { name: "Iris", logo: "/images/brands/logo_15.jpeg" },
      { name: "Neeti Udyog", logo: "/images/brands/logo_16.jpeg" },
      { name: "Skyra", logo: "/images/brands/logo_17.png" },
      { name: "Tablecraft", logo: "/images/brands/logo_18.jpeg" },
      { name: "Lava", logo: "/images/brands/logo_19.jpeg" },
      { name: "Browne Foodservice", logo: "/images/brands/logo_20.png" },
      { name: "Tiger Hotel", logo: "/images/brands/logo_21.png" }
    ]
  },
  "barware": {
    title: "Bar",
    subtitle: "ware",
    bannerImage: "/images/categories/barware.jpg",
    heroImage: "/images/categories/barware-banner-1.jpg",
    introTitle: "Professional Bar & Lounge Equipment",
    description1: "Equip your bar with the finest tools of the trade. Our barware collection includes everything from precision pourers to elegant cocktail shakers.",
    description2: "Our range is designed for professional mixology, combining ergonomic design with premium materials to ensure high performance in busy lounge environments.",
    solutionsTitle: "Our Solutions Include",
    solutions: [
      { name: "Bar Tools & Accessories", desc: "Cocktail shakers, strainers, muddlers, and jiggers for professional mixology." },
      { name: "Champagne Buckets & Bowls", desc: "Stylish options for chilling and serving in elegance." },
      { name: "Glassware", desc: "Premium crystal and tempered glass collections for wine, spirits, and cocktails." },
      { name: "Bar Utensils & Garnishing Tools", desc: "Essential equipment for flawless presentation and service." },
      { name: "Serving Trays & Display Stands", desc: "Designed for efficiency and aesthetic appeal in bar settings." },
      { name: "Wine & Beverage Accessories", desc: "Decanters, ice buckets, coasters, and openers to complement every setup." },
      { name: "Custom & Branded Barware", desc: "Personalized designs to reflect your property’s unique identity." }
    ],
    brands: [
      { name: "Bar Professional", logo: "/images/brands/logo_95.jpg" },
      { name: "Cocktail Kingdom", logo: "/images/brands/logo_96.jpg" }
    ]
  },
  "linen": {
    title: "Premium",
    subtitle: "Linen",
    bannerImage: "/images/categories/linen.jpg",
    heroImage: "/images/categories/linen-banner.webp",
    introTitle: "High-Quality Textiles for Hospitality",
    description1: "Soft, durable, and luxurious linens for your hotel or restaurant. Our collection includes bed linens, table linens, and bath towels designed for comfort and longevity.",
    description2: "We specialize in high-thread-count textiles and bespoke soft goods that combine superior tactile comfort with the durability required for industrial laundering.",
    solutionsTitle: "Our Solutions Include",
    solutions: [
      { name: "Premium Bed Linen", desc: "Sheets, duvet covers, pillowcases, and protectors crafted for exceptional comfort and durability." },
      { name: "Bath Linen", desc: "Plush towels, bathrobes, and mats designed to deliver a luxurious guest experience." },
      { name: "Table Linen", desc: "Elegant napkins, tablecloths, and skirtings tailored for fine dining and banquet settings." },
      { name: "Soft Goods", desc: "Cushions, throws, and runners available in bespoke fabrics and finishes." },
      { name: "Bespoke Design & Customization", desc: "Tailor-made linen solutions to match your brand identity and interior aesthetics." },
      { name: "Sustainable & Easy-Care Fabrics", desc: "High-quality textiles with eco-friendly and long-lasting properties for operational efficiency." }
    ],
    brands: [
      { name: "Fili D'oro", logo: "/images/brands/logo_22.png" },
      { name: "Sonolys", logo: "/images/brands/logo_23.png" }
    ]
  },
  "in-room": {
    title: "In-Room",
    subtitle: "Amenities",
    bannerImage: "/images/categories/in-room.jpg",
    heroImage: "/images/categories/in-room-banner.jpg",
    introTitle: "Enhancing the Guest Experience",
    description1: "Small details that make a big difference. Our in-room solutions include everything from mini-bars to high-quality guest amenities.",
    description2: "We provide a curated selection of in-room equipment that balances modern technology with intuitive design, ensuring a seamless and comfortable stay for every guest.",
    solutionsTitle: "Our Solutions Include",
    solutions: [
      { name: "Guestroom Accessories", desc: "Complete range of guestroom amenities and accessories designed for comfort and functionality." },
      { name: "Mini Bars & Safes", desc: "Mini bars and digital safes combining elegant design with advanced technology." },
      { name: "Coffee & Tea Stations", desc: "Electric kettles, hospitality trays, and coffee sets tailored for premium guest convenience." },
      { name: "Garment Care", desc: "Hairdryers, ironing centers, and garment care solutions for a seamless guest experience." },
      { name: "Bathroom Solutions", desc: "Magnifying mirrors, scales, and waste bins with refined aesthetics." },
      { name: "Room Organization", desc: "Luggage racks, coat stands, and organizational solutions that blend practicality with style." },
      { name: "Custom Packages", desc: "Customizable in-room equipment packages to suit various hotel categories and design concepts." }
    ]
  },
  "kitchen-smallware-stewarding": {
    title: "Kitchen Smallware",
    subtitle: "& Stewarding",
    bannerImage: "/images/categories/kitchen-smallware.jpg",
    heroImage: "/images/categories/kitchen-smallware-banner.png",
    introTitle: "Essential Tools for the Modern Chef",
    description1: "Every great kitchen needs the right tools. Our smallware collection includes professional knives, cookware, and prep tools.",
    description2: "We provide a comprehensive range of professional-grade smallware and stewarding essentials designed to optimize back-of-house efficiency and culinary precision.",
    solutionsTitle: "Our Solutions Include",
    solutions: [
      { name: "Professional Smallware", desc: "Comprehensive range of professional kitchen smallware for efficient culinary operations." },
      { name: "Kitchen Gadgets & Utensils", desc: "High-performance kitchen gadgets and utensils designed for durability and precision." },
      { name: "Pastry & Baking Accessories", desc: "Premium pastry and baking accessories for pastry chefs and dessert kitchens." },
      { name: "Knives & Cutting Tools", desc: "Complete selection of professional knives and cutting tools for every kitchen requirement." },
      { name: "Storage & Organization", desc: "Food-grade storage containers and organization systems for safe and hygienic storage." },
      { name: "Cookware & Bakeware", desc: "Cookware, bakeware, and serving accessories tailored for commercial kitchen use." },
      { name: "Bar & Beverage Tools", desc: "Bar tools and beverage accessories to support restaurant and banquet operations." },
      { name: "Stewarding Essentials", desc: "Racks, trolleys, and dishwashing accessories for back-of-house efficiency." },
      { name: "Dishwashers", desc: "" },
      { name: "Storage Racks", desc: "" },
      { name: "Waste Management", desc: "" },
      { name: "Floor Cleaning Equipment", desc: "" }
    ],
    brands: [
      { name: "Pujadas", logo: "/images/brands/logo_27.jpeg" },
      { name: "Kapp", logo: "/images/brands/logo_28.jpeg" },
      { name: "Louis Tellier", logo: "/images/brands/logo_29.png" },
      { name: "Arcos", logo: "/images/brands/logo_25.png" },
      { name: "Icel", logo: "/images/brands/logo_26.jpeg" },
      { name: "Cambro", logo: "/images/brands/logo_30.jpeg" },
      { name: "Carlisle", logo: "/images/brands/logo_31.jpeg" },
      { name: "San Jamar", logo: "/images/brands/logo_32.png" },
      { name: "Italmodular", logo: "/images/brands/logo_33.jpeg" },
      { name: "Tonon", logo: "/images/brands/logo_34.jpeg" },
      { name: "Peugeot Saveurs", logo: "/images/brands/logo_35.jpeg" },
      { name: "Bisetti", logo: "/images/brands/logo_36.png" },
      { name: "Trust Commercial", logo: "/images/brands/logo_37.jpeg" },
      { name: "Cal-Mil", logo: "/images/brands/logo_38.png" },
      { name: "Zown", logo: "/images/brands/logo_39.png" },
      { name: "Hatco", logo: "/images/brands/logo_40.jpeg" },
      { name: "Schneider", logo: "/images/brands/logo_41.jpeg" },
      { name: "Mauviel 1830", logo: "/images/brands/logo_42.png" },
      { name: "Tramontina", logo: "/images/brands/logo_43.jpeg" },
      { name: "Solia", logo: "/images/brands/logo_24.jpeg" }
    ]
  },
  "outdoor-banquet-furniture": {
    title: "Outdoor &",
    subtitle: "Banquet Furniture",
    bannerImage: "/images/categories/outdoor-banquet-furniture.jpg",
    heroImage: "/images/categories/outdoor-banquet-furniture-banner.jpg",
    introTitle: "Stylish & Durable Event Furniture",
    description1: "Versatile furniture solutions for banquets, events, and outdoor spaces. Built for comfort and frequent use.",
    description2: "Our collections are engineered to withstand the elements while maintaining a high-end aesthetic, ensuring long-lasting performance for both guest and staff environments.",
    solutionsTitle: "Our Solutions Include",
    solutions: [
      { name: "Outdoor Seating", desc: "Lounge chairs, armchairs, daybeds, cabanas, and sun loungers." },
      { name: "Tables", desc: "Dining tables, coffee tables, and side tables in weather-resistant finishes." },
      { name: "Shade Solutions", desc: "Parasols, gazebos, pergolas, and shade sails." },
      { name: "Materials & Finishes", desc: "Weather-resistant aluminum, teak, rattan, rope weave, and high-performance outdoor fabrics." },
      { name: "Banquet Furniture", desc: "Custom-designed banquet chairs, tables, and accessories that combine elegance and functionality." },
      { name: "Staff Accommodation", desc: "Complete furnishing solutions for staff and executive accommodations, focused on ergonomic design." }
    ]
  }
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = categoryData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Link href="/" className="text-[#D4AF37] hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] mt-5 flex items-center justify-center overflow-hidden bg-[#221F51]">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover"
            style={{
              objectPosition:
                slug === "barware" ? "center 65%" :
                  slug === "linen" ? "center 65%" :
                    slug === "in-room" ? "center 65%" :
                      slug === "kitchen-smallware-stewarding" ? "center 60%" :
                        slug === "outdoor-banquet-furniture" ? "center 40%" :
                          "center"
            }}
            priority
          />
          <div className="absolute inset-0 bg-[#221F51]/60"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-14 rounded-[2.5rem] text-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">
              {data.title} <span className="text-[#D4AF37]">{data.subtitle}</span>
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-zinc-900 leading-tight">
                {data.introTitle}
              </h2>
              <p className="text-zinc-600 leading-relaxed text-lg font-light">
                {data.description1}
              </p>
              {data.description2 && (
                <p className="text-zinc-600 leading-relaxed text-lg font-light">
                  {data.description2}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square"
            >
              <Image
                src={data.bannerImage}
                alt={data.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight mb-4">
              {data.solutionsTitle.split(' ').map((word: string, i: number) =>
                word.toLowerCase() === 'solutions' ? <span key={i} className="text-[#D4AF37]">{word} </span> : word + ' '
              )}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.solutions.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col gap-4 group hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#221F51] group-hover:text-white transition-all">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div className="space-y-2">
                  <h3 className="text-zinc-900 font-bold uppercase tracking-widest text-sm">
                    {typeof item === 'string' ? item : item.name}
                  </h3>
                  {typeof item !== 'string' && item.desc && (
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      {data.brands && data.brands.length > 0 && (
        <section className="py-24 bg-white border-t border-zinc-100 overflow-hidden">
          <style jsx>{`
            @keyframes marquee-brands {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .marquee-track-brands {
              display: flex;
              gap: 2rem;
              white-space: nowrap;
              animation: marquee-brands 220s linear infinite;
            }
            .marquee-track-brands:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className={`${data.brands.length > 6 ? "container-fluid px-5" : "container mx-auto px-6 max-w-6xl"}`}>
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] block mb-3">Our Partners</span>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight mb-4">
                Trusted <span className="text-[#D4AF37]">Brands</span>
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>

            {data.brands.length > 6 ? (
              /* Infinite Slider Wrapper */
              <div className="relative w-full flex overflow-x-hidden py-2">
                {/* Gradient Overlays for smooth fading effect */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                <div className="marquee-track-brands shrink-0">
                  {/* Quadruple the list to ensure it covers viewport width and loops perfectly */}
                  {[...data.brands, ...data.brands, ...data.brands, ...data.brands].map((brand: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white border border-zinc-100 rounded-2xl p-4 h-24 w-36 sm:w-44 flex items-center justify-center shadow-xs shrink-0"
                      title={brand.name}
                    >
                      <img
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        className="max-h-12 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Static Flex Layout */
              <div className="flex flex-wrap gap-6 md:gap-8 items-center justify-center">
                {data.brands.map((brand: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white border border-zinc-100 rounded-2xl p-4 h-24 w-36 sm:w-44 flex items-center justify-center shadow-xs"
                    title={brand.name}
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-16 bg-[#221F51] text-white">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest mb-0">Need a Custom Solution?</h2>
          <button
            onClick={() => window.dispatchEvent(new Event("open-enquiry-drawer"))}
            className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:!bg-white hover:!text-[#221F51] transition-all no-underline shadow-xl whitespace-nowrap text-xs md:text-sm"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </main>
  );
}

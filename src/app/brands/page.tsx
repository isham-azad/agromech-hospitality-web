"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Brand {
  name: string;
  category: string;
  country: string;
  logoImg: string;
  specialty: string;
  est: string;
  detailedBio: string;
}

const brandsList: Brand[] = [
  // ROW 1: Tableware & Glassware
  {
    name: "Nikko",
    category: "Tableware",
    country: "Japan",
    logoImg: "/images/brands/logo_0.png",
    specialty: "Fine Bone China, Dining Ceramics",
    est: "1908",
    detailedBio: "Nikko is world-renowned for exquisite fine bone china, combining historic Japanese craftsmanship with sophisticated contemporary designs."
  },
  {
    name: "Cosy & Trendy",
    category: "Tableware",
    country: "Belgium",
    logoImg: "/images/brands/logo_1.jpeg",
    specialty: "Casual Tableware & Stoneware",
    est: "2006",
    detailedBio: "Delivering modern, trendy, and highly functional kitchenware and tableware designed to bring style and efficiency to casual dining setups."
  },
  {
    name: "Stylepoint",
    category: "Tableware",
    country: "Netherlands",
    logoImg: "/images/brands/logo_2.jpeg",
    specialty: "Artisanal Tabletop Designs",
    est: "2002",
    detailedBio: "Providing unique, contemporary tableware and buffet articles designed to elevate hotel and restaurant food service experiences."
  },
  {
    name: "Patra",
    category: "Tableware",
    country: "Thailand",
    logoImg: "/images/brands/logo_3.jpeg",
    specialty: "Fine Porcelain Tableware",
    est: "1983",
    detailedBio: "Leading manufacturer of high-quality porcelain tableware that balances durability with delicate aesthetics for the hotel industry."
  },
  {
    name: "Luigi Bormioli",
    category: "Glassware",
    country: "Italy",
    logoImg: "/images/brands/logo_4.png",
    specialty: "Crystal Glassware & Barware",
    est: "1946",
    detailedBio: "Classic Italian glassmaking legacy. Pioneers of SON.hyx ultra-clear and break-resistant crystal glass for fine dining."
  },
  {
    name: "Dartington Crystal",
    category: "Glassware",
    country: "United Kingdom",
    logoImg: "/images/brands/logo_5.png",
    specialty: "Handcrafted English Crystal",
    est: "1967",
    detailedBio: "The leading UK manufacturer of hand-blown crystal glassware, offering clean, contemporary shapes and premium luxury."
  },
  {
    name: "Italesse",
    category: "Glassware",
    country: "Italy",
    logoImg: "/images/brands/logo_6.png",
    specialty: "Professional Tasting Glassware",
    est: "1989",
    detailedBio: "Designing high-end glassware, decanters, and beverage presentation items focused on professional wine tasting and mixology."
  },
  {
    name: "Nude Glass",
    category: "Glassware",
    country: "Turkey",
    logoImg: "/images/brands/logo_7.png",
    specialty: "Lead-free Crystal Glassware",
    est: "2014",
    detailedBio: "Turkish design-led brand offering minimalist lead-free crystal glassware collections crafted for premium hotels and residences."
  },
  {
    name: "Bormioli Rocco",
    category: "Glassware",
    country: "Italy",
    logoImg: "/images/brands/logo_8.jpeg",
    specialty: "Classic Italian Glassware",
    est: "1825",
    detailedBio: "One of Italy's oldest glass manufacturers, creating versatile dinnerware and glass storage solutions for food service globally."
  },
  {
    name: "Nipco",
    category: "Glassware",
    country: "Japan",
    logoImg: "/images/brands/logo_9.jpeg",
    specialty: "Premium Plastic Drinkware",
    est: "1971",
    detailedBio: "Innovative Japanese brand creating glass-like high-durability polycarbonate and acrylic drinkware for poolside and banquets."
  },
  {
    name: "Sola",
    category: "Cutlery",
    country: "Netherlands",
    logoImg: "/images/brands/logo_10.png",
    specialty: "Stainless Steel Cutlery & Flatware",
    est: "1922",
    detailedBio: "Crafting beautiful flatware for over a century. Known for premium stainless steel cutlery that matches ergonomic balance with enduring shine."
  },

  // ROW 2: Cutlery & Tabletop
  {
    name: "Robert Welch",
    category: "Cutlery",
    country: "United Kingdom",
    logoImg: "/images/brands/logo_11.png",
    specialty: "British Designer Flatware",
    est: "1955",
    detailedBio: "Renowned British design studio producing award-winning cutlery and kitchen utensils built for style and lifetime resilience."
  },
  {
    name: "Cutipol",
    category: "Cutlery",
    country: "Portugal",
    logoImg: "/images/brands/logo_12.png",
    specialty: "Artisanal Luxury Flatware",
    est: "1963",
    detailedBio: "Renowned Portuguese cutlery brand combining traditional handmade processes with elegant modern profiles and gold/matte colors."
  },
  {
    name: "Belo Inox",
    category: "Cutlery",
    country: "Portugal",
    logoImg: "/images/brands/logo_13.png",
    specialty: "Luxury Cutlery, PVD Finishes",
    est: "1953",
    detailedBio: "Exquisite Portuguese design meets modern metallurgy, producing high-end cutlery with striking colored finishes and unique silhouettes."
  },
  {
    name: "Abert",
    category: "Cutlery",
    country: "Italy",
    logoImg: "/images/brands/logo_14.jpeg",
    specialty: "Italian Cutlery & Holloware",
    est: "1929",
    detailedBio: "An Italian leader in cutlery manufacturing, producing high-quality stainless steel flatware for modern dining environments."
  },
  {
    name: "Iris",
    category: "Tableware",
    country: "Italy",
    logoImg: "/images/brands/logo_15.jpeg",
    specialty: "Premium Tabletop Accessories",
    est: "1970",
    detailedBio: "Specializing in high-end serving platters and tableware accessories made with durability and styling in mind."
  },
  {
    name: "Neeti Udyog",
    category: "Tableware",
    country: "India",
    logoImg: "/images/brands/logo_16.jpeg",
    specialty: "Hospitality Food Presentation",
    est: "1978",
    detailedBio: "Providing a vast selection of copper-ware, brass serving bowls, and traditional tabletop presentation units."
  },
  {
    name: "Skyra",
    category: "Buffet & Serveware",
    country: "India",
    logoImg: "/images/brands/logo_17.png",
    specialty: "Premium Buffet Systems & Tabletop",
    est: "2013",
    detailedBio: "Designing high-end modular buffet systems, platters, and design-forward risers for luxury banquets."
  },
  {
    name: "Tablecraft",
    category: "Buffet & Serveware",
    country: "USA",
    logoImg: "/images/brands/logo_18.jpeg",
    specialty: "Buffet Dispensers & Accessories",
    est: "1946",
    detailedBio: "A premier global provider of dining accessories, buffet display collections, and commercial kitchen squeeze bottles."
  },
  {
    name: "Lava",
    category: "Tableware",
    country: "Turkey",
    logoImg: "/images/brands/logo_19.jpeg",
    specialty: "Cast Iron Cookware, Hot Plates",
    est: "1997",
    detailedBio: "Pioneering premium enameled cast iron cookware and hot serving platters that offer unmatched heat retention and vibrant designs."
  },
  {
    name: "Browne Foodservice",
    category: "Buffet & Serveware",
    country: "Canada",
    logoImg: "/images/brands/logo_20.png",
    specialty: "Commercial Kitchen Smallwares",
    est: "1949",
    detailedBio: "Distributing highly reliable stainless steel kitchenware, table organization products, and buffet utensils."
  },
  {
    name: "Tiger Hotel",
    category: "Buffet & Serveware",
    country: "Thailand",
    logoImg: "/images/brands/logo_21.png",
    specialty: "Buffet Chafing Dishes & Warmers",
    est: "1997",
    detailedBio: "Leading designer and manufacturer of high-quality chafing dishes, induction buffet systems, and trolley servers."
  },

  // ROW 3: Buffet & Tabletop
  {
    name: "Fili Doro",
    category: "Tableware",
    country: "Italy",
    logoImg: "/images/brands/logo_22.png",
    specialty: "Luxury Table Linens",
    est: "1893",
    detailedBio: "Producing premium woven linens, napkins, and tablecloths for elite hotels using finest cotton and flax."
  },
  {
    name: "Sonolys",
    category: "Tableware",
    country: "France",
    logoImg: "/images/brands/logo_23.png",
    specialty: "Bespoke Dining Textiles",
    est: "1972",
    detailedBio: "French specialist in customized table linens, place mats, and skirtings tailored for gastronomy professionals."
  },
  {
    name: "Solia",
    category: "Buffet & Serveware",
    country: "France",
    logoImg: "/images/brands/logo_24.jpeg",
    specialty: "Eco-friendly Catering Disposables",
    est: "1995",
    detailedBio: "Pioneering creative disposable packaging, mini-skewers, and eco-friendly buffet serving containers."
  },
  {
    name: "Arcos",
    category: "Cutlery",
    country: "Spain",
    logoImg: "/images/brands/logo_25.png",
    specialty: "Professional Kitchen Knives",
    est: "1734",
    detailedBio: "One of the oldest knife manufacturers in the world, crafting professional chef knives and kitchen shears in Albacete, Spain."
  },
  {
    name: "Icel",
    category: "Cutlery",
    country: "Portugal",
    logoImg: "/images/brands/logo_26.jpeg",
    specialty: "Chef Knives & Cleavers",
    est: "1945",
    detailedBio: "High-quality Portuguese cutlery focusing on heavy-duty butcher knives, chef blades, and industrial kitchen shears."
  },
  {
    name: "Pujadas",
    category: "Kitchen Equipment",
    country: "Spain",
    logoImg: "/images/brands/logo_27.jpeg",
    specialty: "Cookware & Catering Smallwares",
    est: "1921",
    detailedBio: "A Spanish leader in producing premium pots, pans, buffet containers, and heavy-duty kitchen utensils."
  },
  {
    name: "Kapp",
    category: "Kitchen Equipment",
    country: "Turkey",
    logoImg: "/images/brands/logo_28.jpeg",
    specialty: "Professional Stainless Cookware",
    est: "1989",
    detailedBio: "Creating robust multi-ply stainless steel cookware, baking sheets, and kitchen organization gear."
  },
  {
    name: "Louis Tellier",
    category: "Kitchen Equipment",
    country: "France",
    logoImg: "/images/brands/logo_29.png",
    specialty: "Traditional French Prep Tools",
    est: "1947",
    detailedBio: "Inventors of the manual food mill. Creating specialized French culinary tools, graters, and vegetable slicers."
  },
  {
    name: "Cambro",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_30.jpeg",
    specialty: "Food Storage & Shelving",
    est: "1951",
    detailedBio: "The global industry standard for commercial food storage, shelving, transport insulations, and high-durability kitchenware."
  },
  {
    name: "Carlisle",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_31.jpeg",
    specialty: "Plastic Caterware & Utility",
    est: "1954",
    detailedBio: "Providing food service trays, high-durability storage boxes, cleaning carts, and institutional smallwares."
  },

  // ROW 4: Food Service & Small Equipment
  {
    name: "San Jamar",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_32.png",
    specialty: "Dispensing & Food Safety",
    est: "1984",
    detailedBio: "Focusing on smart dispensing systems, cutting boards, food allergen safety kits, and bar organization items."
  },
  {
    name: "Italmodular",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_33.jpeg",
    specialty: "Modular Overhead Railings & Shelves",
    est: "1967",
    detailedBio: "Italian high-tech manufacturer of modular aluminum shelving systems and overhead tracks for cold rooms."
  },
  {
    name: "Tonon",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_34.jpeg",
    specialty: "Butcher Blocks & Prep Tables",
    est: "1946",
    detailedBio: "Manufacturing food-grade wood and steel tables, butcher blocks, and heavy duty commercial kitchen surfaces."
  },
  {
    name: "Peugeot Saveurs",
    category: "Kitchen Equipment",
    country: "France",
    logoImg: "/images/brands/logo_35.jpeg",
    specialty: "Pepper & Salt Spice Mills",
    est: "1840",
    detailedBio: "The gold standard for spice and pepper mills. World-famous mechanism designed for grind consistency and elegance."
  },
  {
    name: "Bisetti",
    category: "Glassware",
    country: "Italy",
    logoImg: "/images/brands/logo_36.png",
    specialty: "Wooden Mills & Table Glass",
    est: "1945",
    detailedBio: "Italian manufacturer of wooden mills, cutting boards, and glass table accessories matching history and quality."
  },
  {
    name: "Trust Commercial",
    category: "Kitchen Equipment",
    country: "China",
    logoImg: "/images/brands/logo_37.jpeg",
    specialty: "Waste Management & Storage",
    est: "2010",
    detailedBio: "Providing durable commercial trash cans, storage containers, utility carts, and kitchen organization supplies."
  },
  {
    name: "Cal-Mil",
    category: "Buffet & Serveware",
    country: "USA",
    logoImg: "/images/brands/logo_38.png",
    specialty: "Acrylic Buffet Display Units",
    est: "1965",
    detailedBio: "Creating innovative food display solutions, dry food dispensers, and bespoke buffet presentation risers."
  },
  {
    name: "Zown",
    category: "Buffet & Serveware",
    country: "Spain",
    logoImg: "/images/brands/logo_39.png",
    specialty: "Banqueting Furniture & Tables",
    est: "2005",
    detailedBio: "Providing lightweight, high-strength folding tables and chairs designed for heavy banqueting use."
  },
  {
    name: "Hatco",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_40.jpeg",
    specialty: "Warmers & Holding Cabinets",
    est: "1950",
    detailedBio: "Designing high-efficiency food warmers, strip heaters, and display cabinets ensuring fresh foods stay hot."
  },
  {
    name: "Schneider",
    category: "Kitchen Equipment",
    country: "Germany",
    logoImg: "/images/brands/logo_41.jpeg",
    specialty: "Professional Baking Utensils",
    est: "1975",
    detailedBio: "German specialist in baking molds, piping bags, and bread display baskets for professional patisserie."
  },

  // ROW 5: Heavy Kitchen & Cooking Equipment
  {
    name: "Mauviel 1830",
    category: "Kitchen Equipment",
    country: "France",
    logoImg: "/images/brands/logo_42.png",
    specialty: "Copper Cookware & Pots",
    est: "1830",
    detailedBio: "The world's premium copper cookware manufacturer from Normandy, France. Used by top Michelin chefs."
  },
  {
    name: "Tramontina",
    category: "Kitchen Equipment",
    country: "Brazil",
    logoImg: "/images/brands/logo_43.jpeg",
    specialty: "Steak Knives & Cookware",
    est: "1911",
    detailedBio: "A Brazilian manufacturer creating professional cutlery, steak knives, cookware, and kitchen appliances."
  },
  {
    name: "KN Industry",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_44.jpeg",
    specialty: "Designer Italian Cookware",
    est: "2011",
    detailedBio: "Italian luxury design studio creating stunning pots, pans, and tableware with architectural silhouettes."
  },
  {
    name: "Bonnet",
    category: "Kitchen Equipment",
    country: "France",
    logoImg: "/images/brands/logo_45.jpeg",
    specialty: "Heavy Duty Cooking Suites",
    est: "1830",
    detailedBio: "Providing high-performance commercial ranges, cooking suites, and industrial induction appliances."
  },
  {
    name: "Ambach",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_46.png",
    specialty: "High-end Modular Kitchens",
    est: "1953",
    detailedBio: "Crafting specialized heavy-duty cooking suites and modular kitchens in South Tyrol for luxury hotels."
  },
  {
    name: "Electrolux Professional",
    category: "Kitchen Equipment",
    country: "Sweden",
    logoImg: "/images/brands/logo_47.png",
    specialty: "Complete Kitchen Systems",
    est: "1919",
    detailedBio: "Leading global provider of commercial food preparation, beverage systems, and commercial laundry gear."
  },
  {
    name: "Fagor",
    category: "Kitchen Equipment",
    country: "Spain",
    logoImg: "/images/brands/logo_48.png",
    specialty: "Ovens & Cooking Ranges",
    est: "1956",
    detailedBio: "Spanish leader in producing smart combi ovens, commercial ranges, and commercial cooling cabinets."
  },
  {
    name: "Moffat",
    category: "Kitchen Equipment",
    country: "New Zealand",
    logoImg: "/images/brands/logo_49.jpeg",
    specialty: "Convection & Bakery Ovens",
    est: "1920",
    detailedBio: "Global specialist in convection baking ovens, proofers, and modular heavy duty cook lines."
  },
  {
    name: "Rational",
    category: "Kitchen Equipment",
    country: "Germany",
    logoImg: "/images/brands/logo_50.png",
    specialty: "Combi Steamer Ovens",
    est: "1973",
    detailedBio: "The undisputed global market leader in combi ovens. Creators of the SelfCookingCenter and iCombi Pro."
  },

  // ROW 6: Cooking & Refrigeration
  {
    name: "Unox",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_51.png",
    specialty: "Smart Commercial Ovens",
    est: "1990",
    detailedBio: "Innovative Italian brand creating smart, energy-efficient combi ovens and bakery ovens."
  },
  {
    name: "Convotherm",
    category: "Kitchen Equipment",
    country: "Germany",
    logoImg: "/images/brands/logo_52.png",
    specialty: "Combi Ovens & Steamers",
    est: "1976",
    detailedBio: "German developer of state-of-the-art combi ovens focusing on clean steam generation and ease of use."
  },
  {
    name: "Precision",
    category: "Kitchen Equipment",
    country: "United Kingdom",
    logoImg: "/images/brands/logo_53.png",
    specialty: "Commercial Refrigeration",
    est: "2008",
    detailedBio: "Designing high-efficiency stainless steel counters, prep stations, and upright storage freezers."
  },
  {
    name: "Williams Refrigeration",
    category: "Kitchen Equipment",
    country: "United Kingdom",
    logoImg: "/images/brands/logo_54.png",
    specialty: "Blast Chillers & Coldrooms",
    est: "1980",
    detailedBio: "A premier manufacturer of commercial refrigerators, blast chillers, bakery cabinets, and cold room displays."
  },
  {
    name: "Ginox",
    category: "Kitchen Equipment",
    country: "Switzerland",
    logoImg: "/images/brands/logo_55.png",
    specialty: "Swiss Custom Stainless Fabrication",
    est: "1874",
    detailedBio: "Famous Swiss fabrication firm creating modular counters, chef tables, and premium exhaust hoods."
  },
  {
    name: "Foster",
    category: "Kitchen Equipment",
    country: "United Kingdom",
    logoImg: "/images/brands/logo_56.jpeg",
    specialty: "Energy-saving Refrigerators",
    est: "1968",
    detailedBio: "Europe's leading commercial refrigeration brand. Famous for upright storage cabinets and chillers."
  },
  {
    name: "Irinox",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_57.jpeg",
    specialty: "Blast Chilling & Shock Freezing",
    est: "1989",
    detailedBio: "Pioneers of blast chillers and shock freezers. Creators of advanced temperature holding and thawing cycles."
  },
  {
    name: "Ciam",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_58.png",
    specialty: "Pastry & Gelato Display Cases",
    est: "1977",
    detailedBio: "Italian manufacturer of luxury showcase cabinets, pastry counters, and custom gelato displays."
  },
  {
    name: "Halton",
    category: "Kitchen Equipment",
    country: "Finland",
    logoImg: "/images/brands/logo_59.png",
    specialty: "Kitchen Ventilation & Hoods",
    est: "1969",
    detailedBio: "Leading global company for commercial kitchen ventilation systems, exhaust hoods, and fire safety systems."
  },
  {
    name: "Vianen",
    category: "Kitchen Equipment",
    country: "Netherlands",
    logoImg: "/images/brands/logo_60.png",
    specialty: "Air Filtration Ventilation",
    est: "1978",
    detailedBio: "Providing custom air-wash hoods, UV filtration systems, and exhaust systems for hotels."
  },
  {
    name: "Ecoair",
    category: "Kitchen Equipment",
    country: "United Kingdom",
    logoImg: "/images/brands/logo_61.jpeg",
    specialty: "Kitchen Odor Control Systems",
    est: "2003",
    detailedBio: "Designing high efficiency carbon filters and UV-C scrubbers to neutralize commercial kitchen exhaust."
  },

  // ROW 7: Warewashing & Prep
  {
    name: "Meiko",
    category: "Stewarding & Hygiene",
    country: "Germany",
    logoImg: "/images/brands/logo_62.jpeg",
    specialty: "Commercial Dishwashers & Washers",
    est: "1927",
    detailedBio: "High-tech cleaning and commercial dishwashing systems ensuring absolute hygiene, energy efficiency, and low water consumption."
  },
  {
    name: "Winterhalter",
    category: "Stewarding & Hygiene",
    country: "Germany",
    logoImg: "/images/brands/logo_63.jpeg",
    specialty: "Commercial Glass & Warewashers",
    est: "1947",
    detailedBio: "The leading specialist in commercial warewashing. Renowned for undercounter glasswashers and water softeners."
  },
  {
    name: "Scotsman",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_64.jpeg",
    specialty: "Ice Machines & Dispensers",
    est: "1950",
    detailedBio: "The pioneer of commercial ice makers, producing crystal clear gourmet ice cubes, flakes, and nuggets."
  },
  {
    name: "B.Pro",
    category: "Kitchen Equipment",
    country: "Germany",
    logoImg: "/images/brands/logo_65.jpeg",
    specialty: "Catering trolleys & Dispensers",
    est: "1925",
    detailedBio: "Formerly Blanco Professional. Manufacturing high-quality food transport trolleys, tray dispensers, and buffets."
  },
  {
    name: "Rieber",
    category: "Buffet & Serveware",
    country: "Germany",
    logoImg: "/images/brands/logo_66.jpeg",
    specialty: "Food Transport Box systems",
    est: "1925",
    detailedBio: "German developer of smart food transport containers (Thermoport) and mobile front-cooking stations."
  },
  {
    name: "Hupfer",
    category: "Buffet & Serveware",
    country: "Germany",
    logoImg: "/images/brands/logo_67.png",
    specialty: "Kitchen Logistics & Racks",
    est: "1870",
    detailedBio: "German specialist in logistical systems, tray transport trolleys, plate stackers, and shelving."
  },
  {
    name: "Tournus Equipement",
    category: "Kitchen Equipment",
    country: "France",
    logoImg: "/images/brands/logo_68.jpeg",
    specialty: "Stainless Steel Prep Furniture",
    est: "1910",
    detailedBio: "France's largest manufacturer of stainless steel sinks, prep tables, self-service lines, and trolleys."
  },
  {
    name: "ScanBox",
    category: "Buffet & Serveware",
    country: "Sweden",
    logoImg: "/images/brands/logo_69.jpeg",
    specialty: "Insulated Food holding carts",
    est: "1992",
    detailedBio: "Swedish manufacturer of insulated hot/cold holding carts designed for catering and institutional distribution."
  },
  {
    name: "Alto-Shaam",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_70.png",
    specialty: "Cook & Hold Halo Heat Ovens",
    est: "1955",
    detailedBio: "Inventors of Halo Heat technology, offering low-temperature cook and hold ovens, and heated display shelves."
  },
  {
    name: "Salva",
    category: "Kitchen Equipment",
    country: "Spain",
    logoImg: "/images/brands/logo_71.jpeg",
    specialty: "Deck Ovens & Bakery Proofers",
    est: "1943",
    detailedBio: "Spanish manufacturer creating deck ovens, modular bakery lines, and proofers for pastry shops."
  },

  // ROW 8: Bakery & Processing
  {
    name: "Kolb",
    category: "Kitchen Equipment",
    country: "Switzerland",
    logoImg: "/images/brands/logo_72.png",
    specialty: "Baking Ovens & Dough Sheeters",
    est: "1954",
    detailedBio: "Swiss baking equipment provider supplying deck ovens, rack ovens, and specialized dough mixers."
  },
  {
    name: "Miwe",
    category: "Kitchen Equipment",
    country: "Germany",
    logoImg: "/images/brands/logo_73.png",
    specialty: "In-store baking ovens",
    est: "1919",
    detailedBio: "Renowned German bakery equipment manufacturer specializing in deck ovens and rack ovens."
  },
  {
    name: "Roller Grill",
    category: "Kitchen Equipment",
    country: "France",
    logoImg: "/images/brands/logo_74.jpeg",
    specialty: "Conveyor Toasters & Contact Grills",
    est: "1947",
    detailedBio: "French manufacturer of small cooking gear, waffle makers, fryers, and contact panini grills."
  },
  {
    name: "Robot Coupe",
    category: "Kitchen Equipment",
    country: "France",
    logoImg: "/images/brands/logo_75.png",
    specialty: "Food Processors & Immersion Blenders",
    est: "1961",
    detailedBio: "The undisputed global leader in commercial food processors, vegetable preparation machines, and heavy-duty immersion blenders."
  },
  {
    name: "Frymaster",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_76.jpeg",
    specialty: "High-output Deep Fryers",
    est: "1935",
    detailedBio: "Leading manufacturer of commercial open fryers, filtration systems, and oil management technology."
  },
  {
    name: "Merrychef",
    category: "Kitchen Equipment",
    country: "United Kingdom",
    logoImg: "/images/brands/logo_77.jpeg",
    specialty: "High-speed Accelerated Ovens",
    est: "1950",
    detailedBio: "Pioneering accelerated cooking technology. Ovens combine microwave, convection, and impingement heat."
  },
  {
    name: "Infrico",
    category: "Kitchen Equipment",
    country: "Spain",
    logoImg: "/images/brands/logo_78.jpeg",
    specialty: "Display Cases & Prep Cabinets",
    est: "1986",
    detailedBio: "Leading Spanish manufacturer of commercial display cabinets, refrigeration tables, and blast chillers."
  },
  {
    name: "Sammic",
    category: "Kitchen Equipment",
    country: "Spain",
    logoImg: "/images/brands/logo_79.jpeg",
    specialty: "Sous Vide & Vacuum Packers",
    est: "1961",
    detailedBio: "Spanish developer of commercial vacuum packers, sous-vide cookers, and potato peelers."
  },
  {
    name: "Carpigiani",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_80.jpeg",
    specialty: "Gelato & Ice Cream Machines",
    est: "1946",
    detailedBio: "The undisputed world leader in soft-serve and artisan gelato pasteurizers and batch freezers."
  },

  // ROW 9: Food Prep & Coffee
  {
    name: "Silko",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_81.png",
    specialty: "Heavy Duty Cooking Equipment",
    est: "1980",
    detailedBio: "Italian cooking manufacturer supplying modular 700/900 ranges, fryers, and griddles."
  },
  {
    name: "Waring Commercial",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_82.png",
    specialty: "Heavy Duty Food Blenders",
    est: "1937",
    detailedBio: "American pioneer of food blenders, food processors, immersion mixers, and small kitchen appliances."
  },
  {
    name: "Cosmos",
    category: "Kitchen Equipment",
    country: "India",
    logoImg: "/images/brands/logo_83.png",
    specialty: "Bulk Vegetable processors",
    est: "1992",
    detailedBio: "Indian brand providing robust automated peelers, cutters, and processing machinery for bulk catering."
  },
  {
    name: "Santos",
    category: "Kitchen Equipment",
    country: "France",
    logoImg: "/images/brands/logo_84.png",
    specialty: "Juice Extractors & Espresso Grinders",
    est: "1954",
    detailedBio: "French specialist in heavy duty commercial juice extractors, citrus juicers, and coffee grinders."
  },
  {
    name: "Hamilton Beach",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_85.png",
    specialty: "Commercial Blenders & Drink Mixers",
    est: "1910",
    detailedBio: "Globally trusted brand for high-performance cocktail blenders, food blenders, and milk-shake mixers."
  },
  {
    name: "Menumaster",
    category: "Kitchen Equipment",
    country: "USA",
    logoImg: "/images/brands/logo_86.png",
    specialty: "Heavy Duty Microwaves",
    est: "1969",
    detailedBio: "The commercial standard for high-speed, heavy-duty microwaves used in busy restaurant kitchens."
  },
  {
    name: "Sirman",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_87.png",
    specialty: "Meat Slicers & Panini Grills",
    est: "1969",
    detailedBio: "Renowned Italian manufacturer of meat slicers, meat grinders, panini grills, and vacuum packers."
  },
  {
    name: "Cofrimell",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_88.jpeg",
    specialty: "Juice & Slush Dispensers",
    est: "1981",
    detailedBio: "Italian manufacturer of beverage cooling dispensers, slush machines, and buffet juice holders."
  },
  {
    name: "Lincat",
    category: "Kitchen Equipment",
    country: "United Kingdom",
    logoImg: "/images/brands/logo_89.jpeg",
    specialty: "Medium Duty Griddles & Fryers",
    est: "1971",
    detailedBio: "Providing a complete line of medium-duty cooking ranges, griddles, water boilers, and warmers."
  },
  {
    name: "Bravilor Bonamat",
    category: "Kitchen Equipment",
    country: "Netherlands",
    logoImg: "/images/brands/logo_90.jpeg",
    specialty: "Filter Coffee & Espresso Systems",
    est: "1948",
    detailedBio: "European leader in manufacturing filter coffee makers, thermal brewers, and automatic espresso machines."
  },

  // ROW 10: Special Prep & Ice
  {
    name: "La Monferrina",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_91.jpeg",
    specialty: "Industrial Pasta Extruders",
    est: "1978",
    detailedBio: "Italian engineering firm specializing in automated fresh pasta extruders, ravioli, and gnocchi machines."
  },
  {
    name: "Berto's",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_92.png",
    specialty: "Heavy Duty Ranges & Induction",
    est: "1973",
    detailedBio: "Italian provider of premium cooking suites, high-power gas ranges, and induction cookers."
  },
  {
    name: "Brema",
    category: "Kitchen Equipment",
    country: "Italy",
    logoImg: "/images/brands/logo_93.jpeg",
    specialty: "Ice makers & Flakers",
    est: "1984",
    detailedBio: "Italian manufacturer of high-reliability ice makers, storage bins, and scale ice machines."
  },
  {
    name: "Bar Professional",
    category: "Glassware",
    country: "Netherlands",
    logoImg: "/images/brands/logo_95.jpg",
    specialty: "Professional Barware & Cocktail Tools",
    est: "1994",
    detailedBio: "Providing a complete range of professional-grade barware, cocktail shakers, strainers, and mixology accessories designed for hospitality professionals."
  },
  {
    name: "Cocktail Kingdom",
    category: "Glassware",
    country: "USA",
    logoImg: "/images/brands/logo_96.jpg",
    specialty: "High-End Mixology & Bar Essentials",
    est: "2009",
    detailedBio: "The premier manufacturer and distributor of professional barware, offering design-forward, functional tools with historical accuracy for mixologists worldwide."
  }
];

const categories = ["All", "Tableware", "Cutlery", "Glassware", "Buffet & Serveware", "Kitchen Equipment", "Stewarding & Hygiene"];

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const filteredBrands = useMemo(() => {
    return brandsList.filter((brand) => {
      const matchesCategory =
        selectedCategory === "All" || brand.category === selectedCategory;
      const matchesSearch =
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="bg-[#FCFCFC] min-h-screen pt-32 pb-40 selection:bg-[#D4AF37] selection:text-white font-sans">
      {/* CSS overrides for absolute scrollbar hiding and mobile responsiveness */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        @media (max-width: 639px) {
          .brands-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1rem !important;
          }
          .brand-card {
            padding: 0.75rem !important;
            border-radius: 1rem !important;
          }
          .brand-logo-box {
            height: 5rem !important;
            margin-bottom: 0px !important;
            padding: 0.5rem !important;
          }
          .brand-logo-box span {
            font-size: 6px !important;
            top: 6px !important;
          }
          .brand-logo-box span:first-child {
            left: 8px !important;
          }
          .brand-logo-box span:last-child {
            right: 8px !important;
          }
          .brand-logo-img {
            max-height: 28px !important;
          }
          .brand-desktop-details,
          .brand-desktop-actions {
            display: none !important;
          }
          .brand-mobile-footer {
            display: flex !important;
          }
        }
      `}</style>

      {/* Background Ornaments */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Block */}
        <header className="text-center space-y-6 mb-24">
          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] block">
            Partner Portfolio
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-zinc-900 italic">
            Global <br />
            <span className="not-italic text-zinc-300">Brands.</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Partnering with over 90 world-class manufacturers from Europe, USA, and Asia to bring certified commercial quality to your hospitality projects.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-8"></div>
        </header>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
              <i className="fas fa-search text-xs"></i>
            </span>
            <input
              type="text"
              placeholder="Search by brand, country or craft..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-zinc-100 rounded-full py-3.5 pl-12 pr-4 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#D4AF37] focus:shadow-md transition-all duration-300"
            />
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${selectedCategory === cat
                    ? "bg-[#221F51] text-white shadow-sm"
                    : "bg-white border border-zinc-100 text-zinc-500 hover:bg-zinc-50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Brands Grid (Clean and Balanced Cards) */}
        <motion.section
          layout
          className="brands-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredBrands.map((brand) => (
              <motion.div
                key={brand.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedBrand(brand)}
                className="brand-card group bg-white rounded-[2rem] border border-zinc-100 p-7 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-[#D4AF37]/30 transition-all duration-400 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Brand Card Logo Box with Extracted Image */}
                  <div className="brand-logo-box w-full h-28 rounded-xl bg-white flex items-center justify-center border border-zinc-100/60 mb-5 relative overflow-hidden p-4 transition-all duration-400">
                    <span className="text-zinc-400/50 font-bold text-[7px] tracking-[0.2em] absolute top-2.5 left-3.5">
                      {brand.est}
                    </span>
                    <span className="text-zinc-400/50 font-bold text-[7px] tracking-[0.1em] uppercase absolute top-2.5 right-3.5">
                      {brand.country}
                    </span>

                    <img
                      src={brand.logoImg}
                      alt={`${brand.name} Logo`}
                      className="brand-logo-img max-w-full max-h-[50px] object-contain group-hover:scale-105 transition-all duration-400"
                      loading="lazy"
                    />
                  </div>

                  {/* Desktop-only details */}
                  <div className="brand-desktop-details">
                    {/* Metadata tags */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-[#D4AF37]/10 text-[7px] font-black uppercase tracking-widest text-[#D4AF37]">
                        {brand.category}
                      </span>
                      <span className="text-[8px] text-zinc-400 italic">
                        {brand.country}
                      </span>
                    </div>

                    {/* Specialty & Craft */}
                    <span className="text-[9px] font-extrabold text-zinc-800 uppercase tracking-widest block mb-2">
                      {brand.specialty}
                    </span>

                    {/* Description */}
                    <p className="text-zinc-400 text-[11px] leading-relaxed font-light mb-4 line-clamp-3">
                      {brand.detailedBio}
                    </p>
                  </div>
                </div>

                {/* Desktop-only bottom actions */}
                <div className="brand-desktop-actions pt-4 border-t border-zinc-50 flex items-center justify-between mt-auto">
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#221F51] group-hover:text-[#D4AF37] transition-all flex items-center gap-1">
                    <span>Brand Story</span>
                    <i className="fas fa-plus text-[6px]"></i>
                  </span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400">
                    Request Info
                  </span>
                </div>

                {/* Mobile-only bottom minimal indicator */}
                <div className="brand-mobile-footer hidden justify-between items-center mt-2.5 pt-2 border-t border-zinc-100/50 text-[8px] font-bold text-zinc-500">
                  <span className="text-[#221F51] truncate max-w-[70%] uppercase tracking-wider">{brand.name}</span>
                  <span className="text-[#D4AF37] flex items-center gap-0.5 text-[7px]">
                    <span>Story</span>
                    <i className="fas fa-plus text-[5px]"></i>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>

        {/* Empty State */}
        {filteredBrands.length === 0 && (
          <div className="text-center py-20 bg-white border border-zinc-100 rounded-[2rem] shadow-sm max-w-sm mx-auto">
            <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 mx-auto mb-3">
              <i className="fas fa-search text-sm"></i>
            </div>
            <h3 className="text-sm font-bold text-zinc-800 uppercase tracking-widest mb-1">No Brands Found</h3>
            <p className="text-zinc-400 text-[10px] font-light px-6">Modify your search query or clear the active category filter.</p>
          </div>
        )}
      </div>

      {/* Brand Detailed Drawer */}
      <AnimatePresence>
        {selectedBrand && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBrand(null)}
              className="fixed inset-0 bg-black z-[110]"
            />

            {/* Right Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[460px] bg-[#221F51] text-white z-[120] shadow-2xl p-8 sm:p-10 flex flex-col justify-between overflow-y-auto no-scrollbar"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-5">
                  <div>
                    <span className="text-[#D4AF37] text-[8px] font-black uppercase tracking-[0.4em] block mb-2">
                      Partner Profile &mdash; Est. {selectedBrand.est}
                    </span>
                    <div className="bg-white/95 rounded-xl p-4 inline-flex items-center justify-center shadow-md">
                      <img
                        src={selectedBrand.logoImg}
                        alt={`${selectedBrand.name} Logo`}
                        className="max-h-[50px] max-w-[150px] object-contain"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="text-white/50 hover:text-white p-1.5 focus:outline-none transition-colors"
                  >
                    <i className="fas fa-times text-lg"></i>
                  </button>
                </div>

                {/* Details Section */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#D4AF37] block mb-1">Country</span>
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <i className="fas fa-globe-europe text-xs text-white/40"></i>
                        {selectedBrand.country}
                      </span>
                    </div>
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#D4AF37] block mb-1">Segment</span>
                      <span className="text-xs font-bold text-white">{selectedBrand.category}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[8px] font-black uppercase tracking-widest text-[#D4AF37]">Primary Specialization</h4>
                    <p className="text-white text-sm font-semibold">{selectedBrand.specialty}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[8px] font-black uppercase tracking-widest text-white/40">Brand Heritage</h4>
                    <p className="text-white/70 text-xs leading-relaxed font-light">
                      {selectedBrand.detailedBio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Drawer Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-white/10 mt-8">
                <Link
                  href="/catalogues"
                  onClick={() => setSelectedBrand(null)}
                  className="w-full bg-[#D4AF37] hover:bg-[#b8962d] text-white py-3 rounded-lg font-bold uppercase tracking-widest text-[9px] transition-all active:scale-[0.98] focus:outline-none flex justify-center items-center gap-1.5 text-center no-underline shadow-md"
                >
                  <i className="fas fa-book-open"></i>
                  <span>Go to Catalogues Vault</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setSelectedBrand(null)}
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-lg font-bold uppercase tracking-widest text-[9px] transition-all active:scale-[0.98] focus:outline-none flex justify-center items-center gap-1.5 text-center no-underline"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Request Corporate Consultation</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

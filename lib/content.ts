/**
 * Single-page site content.
 * Every image referenced here is a genuine Palmtree photograph supplied by the
 * business — nothing is stock, AI-generated or invented.
 */

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Lucide icon name, resolved in components/sections/services.tsx */
  icon: "sun" | "packages" | "cctv" | "fence" | "graduation";
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "solar-installation",
    title: "Solar Installation",
    description:
      "Complete solar power systems for homes and businesses — panels, mounting, wiring and a clean handover.",
    image: "/images/company/service-solar-installation.jpg",
    imageAlt:
      "Palmtree technicians fixing solar panels onto a rooftop array while a team looks on",
    icon: "sun",
  },
  {
    slug: "sales-of-solar-products",
    title: "Sales of Solar Products",
    description:
      "Panels, inverters, batteries, fans, fridges and freezers supplied from our Ibadan showroom.",
    image: "/images/company/service-products.jpg",
    imageAlt:
      "Solar home system with panel, lithium battery box, fan, refrigerator, freezer and television",
    icon: "packages",
  },
  {
    slug: "cctv",
    title: "CCTV",
    description:
      "Camera and security installations for homes and businesses — alongside your solar setup or on its own.",
    image: "/images/company/service-cctv.jpg",
    imageAlt:
      "White dome CCTV security camera photographed in the studio",
    icon: "cctv",
  },
  {
    slug: "electric-fence-wire",
    title: "Electric Fence Wire",
    description:
      "Electric fence wire supplied and installed to protect your perimeter.",
    image: "/images/company/service-battery.jpg",
    imageAlt:
      "Tubular battery installed on a stand beneath an intelligent power inverter",
    icon: "fence",
  },
  {
    slug: "training",
    title: "Training",
    description:
      "Practical solar training at Palmtree Solar Master — hands-on sessions with the equipment.",
    image: "/images/company/service-training.jpg",
    imageAlt:
      "Trainees holding solar panels and wiring equipment at a Palmtree training session",
    icon: "graduation",
  },
];

export const products: Product[] = [
  {
    slug: "solar-panels",
    name: "Solar Panels",
    category: "Solar",
    description: "Panels for new installations and for expanding an existing array.",
    image: "/images/company/product-solar-panels.jpg",
    imageAlt: "Technician mounting solar panels on a rooftop array",
  },
  {
    slug: "inverters",
    name: "Inverters",
    category: "Power",
    description: "Inverters for solar, hybrid and battery backup systems.",
    image: "/images/company/product-inverters.jpg",
    imageAlt: "Inverter unit stacked on a tall tubular battery",
  },
  {
    slug: "lithium-batteries",
    name: "Lithium Batteries",
    category: "Storage",
    description: "Lithium storage for longer runtime and a smaller footprint.",
    image: "/images/company/product-lithium-batteries.jpg",
    imageAlt: "Lithium solar home system and matching appliances",
  },
  {
    slug: "deep-cycle-batteries",
    name: "Deep-Cycle Batteries",
    category: "Storage",
    description: "Tubular deep-cycle batteries for inverter and solar backup.",
    image: "/images/company/product-deep-cycle-batteries.jpg",
    imageAlt: "Tall tubular battery on a steel stand with an intelligent power inverter above it",
  },
  {
    slug: "solar-fans",
    name: "Solar Fans",
    category: "Appliances",
    description: "Solar-powered fans that keep running when the grid does not.",
    image: "/images/company/product-solar-fans.jpg",
    imageAlt: "Solar standing fan beside a solar panel",
  },
  {
    slug: "solar-freezers",
    name: "Solar Freezers",
    category: "Appliances",
    description: "Chest freezers that hold temperature through long outages.",
    image: "/images/company/product-freezers.jpg",
    imageAlt: "Solar chest freezer with its lid open in the Palmtree showroom",
  },
  {
    slug: "solar-refrigerators",
    name: "Solar Refrigerators",
    category: "Appliances",
    description: "Refrigerators built to run directly from solar power.",
    image: "/images/company/product-refrigerators.jpg",
    imageAlt: "Solar refrigerator with its door open in the Palmtree showroom",
  },
  {
    slug: "cctv-cameras",
    name: "CCTV Cameras",
    category: "Security",
    description: "Camera systems supplied and installed for homes and businesses.",
    image: "/images/company/product-cctv-cameras.jpg",
    imageAlt: "White dome CCTV security camera",
  },
];

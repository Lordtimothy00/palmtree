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
  /** Shown on /services and at the top of the service's own page. */
  summary: string;
  /** What the work involves, in the order it usually happens. */
  steps: { title: string; body: string }[];
  /** What we can cover under this service. */
  includes: string[];
  /** True when the work is delivered nationwide rather than in Ibadan only. */
  nationwide?: boolean;
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
    summary:
      "A solar system sized to what you actually run, installed on your roof and wired in properly, so the switch-over is automatic.",
    nationwide: true,
    steps: [
      {
        title: "Tell us what you need to power",
        body: "Send us the appliances you want to keep running — lights, fridge, freezer, fans, TV, pump — and roughly how long you need them to run. A photo of the space helps.",
      },
      {
        title: "We size the system",
        body: "We work out the panel, inverter and battery capacity that matches that load, so you are not sold a system that is too small to carry it or larger than you need.",
      },
      {
        title: "Survey and installation",
        body: "We check the roof or mounting area, then install the panels, mounting rails, cabling and protection, and wire the system to your distribution board.",
      },
      {
        title: "Test and handover",
        body: "We test the whole system under load, walk you through what it does and what it will not do, and leave you with the changeover set up correctly.",
      },
    ],
    includes: [
      "Rooftop and ground-mounted panel arrays",
      "Hybrid and off-grid systems",
      "Inverter, battery and changeover wiring",
      "Cabling, breakers and surge protection",
      "Load assessment before anything is bought",
      "Residential, shop and office installations",
    ],
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
    summary:
      "Solar equipment supplied from our own showroom, with honest advice on what suits your system — and installation if you want it.",
    nationwide: true,
    steps: [
      {
        title: "Tell us what you are looking for",
        body: "Message us with the item and what you want to power. If you already have a system, tell us what inverter or battery you are running so the new part matches.",
      },
      {
        title: "We confirm what is in stock",
        body: "We do not list prices on the website because stock and prices move. We confirm availability and the current price directly with you.",
      },
      {
        title: "Collect or arrange delivery",
        body: "Collect from the showroom on Academy–Monatan Road, or we can arrange delivery to you. Panels and batteries are bulky, so let us know the destination.",
      },
      {
        title: "Installation if you need it",
        body: "We can install anything we sell — panels, inverters, batteries, cameras and fence wire — rather than leaving you to find an installer.",
      },
    ],
    includes: [
      "Solar panels",
      "Inverters — solar, hybrid and battery backup",
      "Lithium batteries",
      "Deep-cycle and tubular batteries",
      "Solar fans",
      "Solar refrigerators and freezers",
      "CCTV cameras",
    ],
  },
  {
    slug: "cctv",
    title: "CCTV",
    description:
      "Camera and security installations for homes and businesses — alongside your solar setup or on its own.",
    image: "/images/company/service-cctv.jpg",
    imageAlt: "White dome CCTV security camera photographed in the studio",
    icon: "cctv",
    summary:
      "Cameras placed where they actually cover something, wired and set up so you can see the footage from your phone.",
    nationwide: true,
    steps: [
      {
        title: "Walk the space with us",
        body: "Tell us what you want to keep an eye on — the gate, the yard, the shop floor, a corridor — and we suggest camera positions that cover it without blind spots.",
      },
      {
        title: "Agree the camera setup",
        body: "We agree how many cameras, which type suits each position, and how the recording is stored, before any cabling is run.",
      },
      {
        title: "Install and cable",
        body: "Cameras are mounted, cabled and connected to the recorder, with the cabling run neatly rather than left across the wall.",
      },
      {
        title: "Set up viewing",
        body: "We configure the recorder and show you how to view the cameras on your phone, and how to pull footage back when you need it.",
      },
    ],
    includes: [
      "Dome and bullet cameras",
      "Indoor and outdoor coverage",
      "Recorder setup and storage",
      "Phone viewing configuration",
      "Cabling and power",
      "Combined with a solar installation",
    ],
  },
  {
    slug: "electric-fence-wire",
    title: "Electric Fence Wire",
    description:
      "Electric fence wire supplied and installed to protect your perimeter.",
    image: "/images/company/service-electric-fence-wire.jpg",
    imageAlt:
      "Electric fence wires on ceramic insulators above a perimeter wall, with a yellow DANGER ELECTRIC FENCE sign",
    icon: "fence",
    summary:
      "Perimeter fence wire run on insulators and energised properly, so the boundary is actually protected.",
    nationwide: true,
    steps: [
      {
        title: "Measure the perimeter",
        body: "We look at the wall, fence line or boundary you want to protect and how many runs of wire it needs.",
      },
      {
        title: "Supply the wire and fittings",
        body: "Galvanised fence wire, ceramic insulators, tension springs, strainers and the energiser, sized to the length of the run.",
      },
      {
        title: "Install and tension",
        body: "Wire is run on insulators, tensioned so it stays taut and does not sag, and terminated at the energiser with the sign in place.",
      },
      {
        title: "Test the run",
        body: "We test the fence, check the voltage along the line, and show you how to isolate a section if you ever need to.",
      },
    ],
    includes: [
      "Galvanised electric fence wire",
      "Ceramic insulators and tension springs",
      "Wire strainers",
      "Energiser supply and connection",
      "DANGER ELECTRIC FENCE signage",
      "Perimeter walls and fence lines",
    ],
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
    summary:
      "Hands-on solar training with real panels, inverters and batteries — for people who want to install, not just read about it.",
    steps: [
      {
        title: "Ask about the next session",
        body: "Message us for the next available dates, the current fee and what the session covers. We do not publish dates that may already have passed.",
      },
      {
        title: "Attend the practical session",
        body: "Training is built around the equipment — panels, inverters, batteries and wiring — so you handle the parts rather than only hearing about them.",
      },
      {
        title: "Work through the system",
        body: "You go through how a solar system is sized, connected and tested, and the mistakes that cause installations to fail.",
      },
      {
        title: "Ask us afterwards",
        body: "We are on WhatsApp after the session for the questions that only come up when you are standing in front of a real installation.",
      },
    ],
    includes: [
      "Panels, inverters and batteries",
      "System sizing and load assessment",
      "Wiring and connection practice",
      "Testing and fault-finding",
      "Hands-on sessions with real equipment",
      "Held at Palmtree Solar Master, Ibadan",
    ],
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

/** Look up a service by its URL slug. */
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Every service URL, for generateStaticParams and the sitemap. */
export const serviceSlugs = services.map((s) => s.slug);

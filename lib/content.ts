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

/** One kind within a product category, e.g. "hybrid inverter". */
export type ProductVariant = {
  label: string;
  /** What it actually does, in plain language. */
  summary: string;
  /** Who it suits. */
  suits: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Explained on /products and at the top of the product's own page. */
  summary: string;
  /** What this kind of product is for, in plain language. */
  detail: string[];
  /** Things to know before choosing. No model names, specs or prices invented. */
  chooseBecause: string[];
  /** Optional: the distinct kinds of this product, explained one by one. */
  variants?: ProductVariant[];
  /** Optional intro shown above the variants. */
  variantsIntro?: string;
  /** Optional second axis worth knowing about, rendered as a note. */
  aside?: { title: string; body: string };
  /** Which service page covers installing it. */
  installService: string;
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
    summary:
      "The panels that turn daylight into the power your inverter and batteries run on.",
    detail: [
      "Solar panels are the part of the system that actually generates power. They produce direct current whenever there is daylight, and the inverter converts it into the alternating current your appliances use.",
      "We supply panels for new installations and for expanding an existing array when you need more capacity than you originally planned for.",
      "Panel output depends on how much direct sun the mounting position gets, so where they are placed matters as much as what is on the label.",
    ],
    chooseBecause: [
      "You are starting a new solar installation",
      "Your existing array cannot keep up with your load",
      "You are adding capacity before buying a larger battery",
      "You want panels supplied and mounted by the same team",
    ],
    installService: "solar-installation",
  },
  {
    slug: "inverters",
    name: "Inverters",
    category: "Power",
    description: "Inverters for solar, hybrid and battery backup systems.",
    image: "/images/company/product-inverters.jpg",
    imageAlt: "Inverter unit stacked on a tall tubular battery",
    summary:
      "The unit that converts stored and generated power into usable electricity for your building.",
    detail: [
      "An inverter takes the direct current from your panels or batteries and converts it into the alternating current your lights, fans, fridge and sockets run on.",
      "We supply inverters for solar systems, hybrid systems that combine solar with the grid, and battery backup systems charged from the grid.",
      "The size of inverter you need is set by the total load you expect to run at once, not by the size of your battery bank — getting that backwards is a common and expensive mistake.",
    ],
    chooseBecause: [
      "You are building a solar or hybrid system",
      "You want battery backup while the grid is down",
      "Your current inverter has failed or is undersized",
      "You need the changeover wired in properly",
    ],
    variantsIntro:
      "Inverters are not one thing. Which kind you need depends on whether you have panels, whether you want to feed power back, and how much load you expect to run at once.",
    variants: [
      {
        label: "Square wave / modified sine wave",
        summary:
          "The cheapest and most basic output. The waveform is a rough approximation of mains power rather than a smooth copy of it.",
        suits:
          "Simple loads only — basic lighting, fans and similar. Motors and anything with a sensitive power supply can run hot, buzz, or fail early on this output.",
      },
      {
        label: "Pure sine wave",
        summary:
          "Output that closely matches what the grid supplies, so appliances behave the way they do on mains power.",
        suits:
          "Nearly everything people actually want to run — fridges, freezers, TVs, computers, medical equipment, anything with a motor or a circuit board in it.",
      },
      {
        label: "Off-grid inverter",
        summary:
          "Takes its power from panels and batteries only. It has no relationship with the grid at all, so it keeps running when the area has no supply.",
        suits:
          "Buildings with no grid connection, or where the grid is too unreliable to be worth designing around.",
      },
      {
        label: "Hybrid inverter",
        summary:
          "Connects to panels, batteries and the grid together, and decides which source to draw from. Some models can also charge batteries from the grid when solar is low.",
        suits:
          "Most homes and businesses in Nigeria — you keep the grid as a backup rather than choosing between grid and solar.",
      },
      {
        label: "Grid-tie inverter",
        summary:
          "Runs in step with the grid and can send surplus power back into it. It normally has no battery bank, so it stops when the grid goes down.",
        suits:
          "Sites where the grid is steady and the aim is to cut the bill rather than to have backup. It is not a solution to outages.",
      },
    ],
    aside: {
      title: "Size is set by load, not by battery",
      body: "Pick the inverter by the total you expect to run at the same time — not by the size of your battery bank. An inverter that is too small trips out every time the fridge and the freezer start together; one that is far too large wastes money. List the appliances you want to run, add up what they draw, and size from that.",
    },
    installService: "solar-installation",
  },
  {
    slug: "lithium-batteries",
    name: "Lithium Batteries",
    category: "Storage",
    description: "Lithium storage for longer runtime and a smaller footprint.",
    image: "/images/company/product-lithium-batteries.jpg",
    imageAlt: "Lithium solar home system and matching appliances",
    summary:
      "Storage that holds more usable power in less space, and lasts more cycles than lead-acid.",
    detail: [
      "Batteries store the power your system generates so you can use it at night or during an outage. Lithium batteries store more usable capacity for their size and weight than tubular batteries.",
      "They also tolerate deeper discharge without the damage that shortens the life of a lead-acid battery, which means more of the stated capacity is actually available to you.",
      "They cost more up front. Whether that pays off depends on how deeply and how often you will cycle them.",
    ],
    chooseBecause: [
      "You want the most runtime in the smallest space",
      "Your system cycles deeply every day",
      "You are short of room for a battery bank",
      "You want fewer replacements over the life of the system",
    ],
    installService: "solar-installation",
  },
  {
    slug: "deep-cycle-batteries",
    name: "Deep-Cycle Batteries",
    category: "Storage",
    description: "Tubular deep-cycle batteries for inverter and solar backup.",
    image: "/images/company/product-deep-cycle-batteries.jpg",
    imageAlt: "Tall tubular battery on a steel stand with an intelligent power inverter above it",
    summary:
      "Proven tubular storage that is cheaper to buy and easier to service than lithium.",
    detail: [
      "Tubular deep-cycle batteries are built to be discharged and recharged repeatedly, which is what a backup system asks of them. They are the common choice for inverter systems in Nigeria.",
      "They cost less to buy than lithium for the same nominal capacity, and they can be serviced — water levels topped up — rather than simply replaced.",
      "They are heavier, take up more floor space, and give fewer usable cycles, so they suit a budget or a location where space is not the constraint.",
    ],
    chooseBecause: [
      "You want a lower up-front cost",
      "You have floor space for a battery bank",
      "You want batteries that can be serviced",
      "You are replacing an existing tubular bank",
    ],
    installService: "solar-installation",
  },
  {
    slug: "solar-fans",
    name: "Solar Fans",
    category: "Appliances",
    description: "Solar-powered fans that keep running when the grid does not.",
    image: "/images/company/product-solar-fans.jpg",
    imageAlt: "Solar standing fan beside a solar panel",
    summary:
      "Fans designed to run directly from solar power, so cooling does not depend on the grid.",
    detail: [
      "Solar fans are built to run efficiently from a solar system or directly from a panel, drawing far less power than a conventional fan on an inverter.",
      "Because they draw less, a modest system can keep a room comfortable through the night without draining the battery bank.",
      "They are a practical starting point for anyone who wants to see what a small solar setup can carry before committing to a whole-house system.",
    ],
    chooseBecause: [
      "You want cooling that survives an outage",
      "You want to reduce the load on your battery bank",
      "You are putting together a first, small solar setup",
      "You are fitting out a shop or room on limited power",
    ],
    installService: "sales-of-solar-products",
  },
  {
    slug: "solar-freezers",
    name: "Solar Freezers",
    category: "Appliances",
    description: "Chest freezers that hold temperature through long outages.",
    image: "/images/company/product-freezers.jpg",
    imageAlt: "Solar chest freezer with its lid open in the Palmtree showroom",
    summary:
      "Chest freezers built to run from solar, and to stay cold while the power is off.",
    detail: [
      "A standard freezer is one of the heaviest loads in a home, and on an ordinary inverter it will flatten a battery bank quickly. Freezers built for solar draw less and hold temperature longer when the supply stops.",
      "Chest design helps: cold air stays inside when the lid is opened, so it loses less every time someone goes in.",
      "This matters most for businesses that sell cold goods, where a few hours of thawing is stock lost.",
    ],
    chooseBecause: [
      "You sell frozen goods and cannot afford a thaw",
      "You want cold storage that runs off solar",
      "Your current freezer overloads your inverter",
      "You need backup that holds temperature through outages",
    ],
    installService: "sales-of-solar-products",
  },
  {
    slug: "solar-refrigerators",
    name: "Solar Refrigerators",
    category: "Appliances",
    description: "Refrigerators built to run directly from solar power.",
    image: "/images/company/product-refrigerators.jpg",
    imageAlt: "Solar refrigerator with its door open in the Palmtree showroom",
    summary:
      "Refrigerators built to run directly from solar power rather than strain an inverter.",
    detail: [
      "Solar refrigerators are designed around a lower, more efficient power draw, so they can run from a solar system without dominating the load.",
      "That makes them useful where the grid is unreliable but a full household solar system is not yet affordable or necessary.",
      "As with freezers, how well it holds temperature during an outage matters as much as how cold it gets when running.",
    ],
    chooseBecause: [
      "You want reliable cold storage off solar",
      "You need a fridge that will not drain your batteries",
      "You are equipping a shop, clinic or home",
      "You want to add solar without rebuilding the whole system",
    ],
    installService: "sales-of-solar-products",
  },
  {
    slug: "cctv-cameras",
    name: "CCTV Cameras",
    category: "Security",
    description: "Camera systems supplied and installed for homes and businesses.",
    image: "/images/company/product-cctv-cameras.jpg",
    imageAlt: "White dome CCTV security camera",
    summary:
      "Cameras that cover the areas that matter, with footage you can view from your phone.",
    detail: [
      "CCTV covers what is happening while nobody is watching: the gate, the yard, the shop floor, a corridor.",
      "What separates a useful system from a useless one is placement. A camera aimed at a blank wall or pointed into the sun records nothing worth having, however good the unit is.",
      "We supply dome and bullet cameras and set up the recorder so you can view footage remotely, rather than leaving you with a box of parts.",
    ],
    chooseBecause: [
      "You want to see who comes onto the property",
      "You need a record of activity in a shop or office",
      "You want cameras and solar installed by one team",
      "You want to check footage from your phone",
    ],
    installService: "cctv",
  },
];

/** Look up a product by its URL slug. */
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Every product URL, for generateStaticParams and the sitemap. */
export const productSlugs = products.map((p) => p.slug);

/** Look up a service by its URL slug. */
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Every service URL, for generateStaticParams and the sitemap. */
export const serviceSlugs = services.map((s) => s.slug);

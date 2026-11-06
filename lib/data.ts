import { serviceEnquiryMessage, productEnquiryMessage } from "./site";

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  paragraphs: string[];
  benefits: string[];
  image: string;
  imageAlt: string;
  icon:
    | "sun"
    | "inverter"
    | "battery"
    | "panels"
    | "truck"
    | "cctv"
    | "wrench"
    | "graduation";
};

export const services: Service[] = [
  {
    slug: "solar-system-installation",
    title: "Solar System Installation",
    short: "Complete solar power systems designed, sized and installed for homes and businesses.",
    summary:
      "End-to-end solar installation — from load assessment and system sizing to mounting, wiring, commissioning and handover.",
    paragraphs: [
      "We design and install complete solar power systems for homes, shops, offices, schools, clinics and commercial facilities. Every installation begins with a proper assessment of what you need to power, so the system is sized around your real daily load instead of guesswork.",
      "Our team handles the full process: panel mounting and orientation, cable routing, inverter and battery installation, protective devices, earthing and final testing. We explain how the system works before we leave your site, and we stay reachable afterwards for support.",
    ],
    benefits: [
      "Load assessment before any equipment is recommended",
      "Roof, ground-mount and hybrid installation options",
      "Neat cable management and safe, protected wiring",
      "Commissioning, testing and a practical handover",
    ],
    image: "/images/gallery/residential-roof-array.jpg",
    imageAlt: "Solar panels installed on the roof of a residential building in Nigeria",
    icon: "panels",
  },
  {
    slug: "solar-inverter-installation",
    title: "Solar Inverter Installation",
    short: "Hybrid and off-grid inverter systems installed for dependable, quiet power.",
    summary:
      "Professional inverter installation, configuration and changeover wiring for a seamless switch from grid to solar.",
    paragraphs: [
      "A solar system is only as reliable as its inverter setup. We install and configure solar and hybrid inverters, then wire a clean changeover so your building moves between grid, solar and battery power without disruption.",
      "We match inverter capacity to your appliances and battery bank, verify charging profiles and protective settings, and test the system under load. If you already own an inverter, we can also review, reconfigure or repair an existing installation.",
    ],
    benefits: [
      "Correct inverter sizing for your appliance load",
      "Clean changeover and distribution board wiring",
      "Battery charging profiles configured properly",
      "Support for upgrades and existing systems",
    ],
    image: "/images/gallery/inverter-battery-bank.jpg",
    imageAlt: "Solar inverter and battery bank installed in a utility room",
    icon: "inverter",
  },
  {
    slug: "battery-supply-and-installation",
    title: "Battery Supply and Installation",
    short: "Lithium and deep-cycle battery supply, installation and safe battery bank builds.",
    summary:
      "The right storage for your system — supplied, installed and configured for safety and lifespan.",
    paragraphs: [
      "We supply and install lithium and deep-cycle batteries for solar and inverter systems, including the racks, cabling, fusing and terminations that keep a battery bank safe and stable.",
      "Battery chemistry, capacity and placement all affect performance. We help you choose storage that matches your backup expectations, then install it with proper ventilation, protection and labelling so it can be maintained with confidence.",
    ],
    benefits: [
      "Guidance on lithium versus deep-cycle storage",
      "Safe battery bank assembly with fusing and protection",
      "Correct cable sizing and termination",
      "Replacement and expansion of existing banks",
    ],
    image: "/images/gallery/lithium-battery-rack.jpg",
    imageAlt: "Lithium battery modules mounted on a rack as part of a solar installation",
    icon: "battery",
  },
  {
    slug: "solar-energy-solutions",
    title: "Solar Energy Solutions",
    short: "Solutions shaped around your property, budget and backup expectations.",
    summary:
      "Consultation-led solar planning for residential, commercial and institutional needs.",
    paragraphs: [
      "Not every property needs the same system. We start with a conversation about what you want to power, for how long, and what you want to spend — then propose a solution built around those answers.",
      "That might be a small lighting and fan backup, a full home solar system, or a commercial installation designed for working hours. We are transparent about what a given budget can realistically achieve, and we never promise capacity a system cannot deliver.",
    ],
    benefits: [
      "Straight answers on what your budget can power",
      "Systems scaled for homes, shops, offices and facilities",
      "Grid-tied, off-grid and hybrid options",
      "Room to expand as your needs grow",
    ],
    image: "/images/about-team.jpg",
    imageAlt: "Palmtree solar engineers reviewing an installation plan on site",
    icon: "sun",
  },
  {
    slug: "solar-equipment-supply",
    title: "Solar Equipment Supply",
    short: "Panels, inverters, batteries, appliances and accessories from one trusted source.",
    summary:
      "Genuine solar equipment and components supplied for your own installation or for your project.",
    paragraphs: [
      "We supply solar panels, inverters, batteries, solar lighting, solar appliances and the accessories that hold a system together — mounting rails, cables, breakers, charge controllers and connectors.",
      "Whether you are a homeowner replacing a component, an installer sourcing equipment, or an organisation equipping a site, we help you get the right items for the job and advise on compatibility before you buy.",
    ],
    benefits: [
      "Equipment matched to your system requirements",
      "Advice on compatibility before purchase",
      "Supply for individual components or full projects",
      "Delivery coordinated nationwide",
    ],
    image: "/images/products/solar-panels.jpg",
    imageAlt: "Solar panel supplied by Palmtree Technology Services",
    icon: "truck",
  },
  {
    slug: "cctv-and-security-equipment",
    title: "CCTV and Security Equipment",
    short: "Surveillance cameras, solar cameras and security technology, supplied and installed.",
    summary:
      "CCTV and solar-powered surveillance systems for homes, shops, offices and estates.",
    paragraphs: [
      "Beyond energy, we supply and install CCTV cameras, solar-powered surveillance cameras and related security equipment — including the recording, storage and viewing setup that makes a camera system actually useful.",
      "We plan camera positions around entrances, perimeters and blind spots, install cleanly, and show you how to view your footage from your phone. For sites without stable power, solar-powered cameras keep surveillance running where wired power is unreliable.",
    ],
    benefits: [
      "Camera planning for entrances, perimeters and blind spots",
      "Solar-powered options for sites with unstable power",
      "Recorder, storage and mobile viewing configured",
      "Neat installation with minimal disruption",
    ],
    image: "/images/products/cctv-camera.jpg",
    imageAlt: "CCTV surveillance camera installed by Palmtree Technology Services",
    icon: "cctv",
  },
  {
    slug: "solar-system-maintenance",
    title: "Solar System Maintenance",
    short: "Inspection, cleaning, testing and repair to keep your system performing.",
    summary:
      "Scheduled and on-demand maintenance for existing solar and inverter installations.",
    paragraphs: [
      "Solar systems are low-maintenance, not no-maintenance. Dust on panels, loose terminations, degraded batteries and drifting settings all quietly reduce output. Our maintenance service checks the parts of your system that are easy to ignore.",
      "We inspect and clean panels, test connections and protective devices, review battery health and inverter settings, and report clearly on anything that needs attention — whether or not it is work we would carry out.",
    ],
    benefits: [
      "Panel cleaning and visual inspection",
      "Connection, breaker and earthing checks",
      "Battery health and inverter setting review",
      "Fault finding and repair for existing systems",
    ],
    image: "/images/gallery/maintenance-check.jpg",
    imageAlt: "Technician carrying out maintenance checks on a solar installation",
    icon: "wrench",
  },
  {
    slug: "solar-technology-training",
    title: "Solar Technology Training",
    short: "Hands-on training through Palmtree Solar Master, our practical solar academy.",
    summary:
      "Practical, hands-on solar training for people who want to install and maintain real systems.",
    paragraphs: [
      "Through Palmtree Solar Master we train people who want to work with solar — beginners moving into the industry, technicians formalising what they already do, and entrepreneurs building a solar business.",
      "Training is practical first. Trainees work with panels, inverters, batteries and wiring, and learn the reasoning behind system sizing, safety and commissioning rather than memorising a single setup.",
      "Programme dates, fees and any certification details are confirmed directly by our team before you register.",
    ],
    benefits: [
      "Hands-on work with real solar components",
      "System sizing, safety and commissioning explained",
      "Training for beginners and practising technicians",
      "Pathways into installation and maintenance work",
    ],
    image: "/images/training/training-workshop.jpg",
    imageAlt: "Trainees at a Palmtree Solar Master practical training workshop",
    icon: "graduation",
  },
];

export type Category =
  | "Solar Energy"
  | "Inverters & Power Storage"
  | "Solar Appliances"
  | "Security Technology";

export const productCategories: Category[] = [
  "Solar Energy",
  "Inverters & Power Storage",
  "Solar Appliances",
  "Security Technology",
];

export type Product = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  detail: string;
  highlights: string[];
  idealFor: string[];
  image: string;
  imageAlt: string;
  keywords: string[];
};

export const products: Product[] = [
  {
    slug: "solar-panels",
    name: "Solar Panels",
    category: "Solar Energy",
    tagline: "The generation side of your solar system.",
    description:
      "Monocrystalline solar panels that convert daylight into usable power for your home or business.",
    detail:
      "Solar panels are the heart of any solar installation. We supply and install panels suited to your roof space, energy requirement and mounting setup — whether you are building a new system or expanding an existing one. Our team advises on orientation, tilt and array size so the panels you buy actually match your load.",
    highlights: [
      "Monocrystalline panels for residential and commercial arrays",
      "Supply only, or supply with professional installation",
      "Roof and ground-mount mounting options",
      "Guidance on array sizing and orientation",
    ],
    idealFor: ["Homes replacing generator dependence", "Commercial buildings with daytime load"],
    image: "/images/products/solar-panels.jpg",
    imageAlt: "Monocrystalline solar panel",
    keywords: ["solar panels in Nigeria", "buy solar panel Ibadan"],
  },
  {
    slug: "solar-generators-and-power-systems",
    name: "Solar Generators & Power Systems",
    category: "Solar Energy",
    tagline: "Compact, ready-to-use solar power.",
    description:
      "Self-contained solar power systems for lighting, fans, phones, laptops and small appliances.",
    detail:
      "Solar generators and packaged power systems give you dependable power without a full building installation. They are a practical starting point for small apartments and shops, for travel and fieldwork, and as backup where wiring a full system is not yet an option. We help you choose a unit that matches the appliances you actually intend to run.",
    highlights: [
      "Portable and semi-portable solar power units",
      "Suited to small apartments, shops and field work",
      "Usable alongside an existing inverter setup",
      "Practical guidance on runtime and appliance load",
    ],
    idealFor: ["Small apartments and studios", "Traders and small businesses"],
    image: "/images/products/solar-generator.jpg",
    imageAlt: "Portable solar power station",
    keywords: ["solar generator Nigeria", "portable solar power system"],
  },
  {
    slug: "solar-lighting",
    name: "Solar Lighting",
    category: "Solar Energy",
    tagline: "Light without wiring or running costs.",
    description:
      "Solar floodlights, street lights and outdoor lighting that switch on automatically at dusk.",
    detail:
      "Solar lighting is one of the simplest ways to improve safety and visibility without extending your electrical wiring. We supply solar floodlights, street lights, security lights and garden lighting, with the mounting and installation support to place them where they actually do their job.",
    highlights: [
      "Floodlights, street lights and security lighting",
      "Dusk-to-dawn automatic operation",
      "No trenching or mains wiring required",
      "Installation and mounting available",
    ],
    idealFor: ["Compound and perimeter lighting", "Streets, gates and entrances"],
    image: "/images/products/solar-lighting.jpg",
    imageAlt: "Solar powered LED floodlight",
    keywords: ["solar street light Nigeria", "solar floodlight"],
  },
  {
    slug: "solar-inverters",
    name: "Solar Inverters",
    category: "Inverters & Power Storage",
    tagline: "The control centre of your system.",
    description:
      "Hybrid and off-grid solar inverters that convert and manage power between panels, batteries and your building.",
    detail:
      "The inverter decides how well the rest of your system performs. We supply hybrid and off-grid inverters sized to your load, and configure them with the correct charging profile, changeover behaviour and protection settings. If you are unsure which capacity you need, our team will assess your appliances before recommending anything.",
    highlights: [
      "Hybrid and off-grid inverter options",
      "Proper configuration after installation",
      "Correct changeover and protection wiring",
      "Upgrade support for existing systems",
    ],
    idealFor: ["New solar installations", "Replacing a failed or undersized inverter"],
    image: "/images/products/solar-inverter.jpg",
    imageAlt: "Solar hybrid inverter",
    keywords: ["solar inverter installation", "hybrid inverter Nigeria"],
  },
  {
    slug: "lithium-batteries",
    name: "Lithium Batteries",
    category: "Inverters & Power Storage",
    tagline: "Deep storage, lighter footprint.",
    description:
      "Lithium battery modules for solar and inverter systems, with the racks and protection they need.",
    detail:
      "Lithium storage offers deeper usable capacity and a longer service life than traditional lead-acid batteries, and takes up far less space. We supply lithium batteries for new installations and upgrades, and install them with correct fusing, cabling and ventilation so the bank performs as intended.",
    highlights: [
      "Lithium storage for solar and inverter systems",
      "Rack-mounted installation with protection",
      "Suitable for new builds and battery upgrades",
      "Guidance on usable capacity for your load",
    ],
    idealFor: ["Homes wanting longer backup hours", "Businesses replacing lead-acid banks"],
    image: "/images/products/lithium-battery.jpg",
    imageAlt: "Lithium solar battery module",
    keywords: ["solar batteries Nigeria", "lithium battery for inverter"],
  },
  {
    slug: "deep-cycle-batteries",
    name: "Deep-Cycle Batteries",
    category: "Inverters & Power Storage",
    tagline: "Proven, dependable backup storage.",
    description:
      "Deep-cycle batteries for inverter and solar systems, installed as safe, properly protected banks.",
    detail:
      "Deep-cycle batteries remain a dependable and cost-effective choice for inverter backup when they are properly sized and maintained. We supply and install them as complete banks, with the cabling, fusing and ventilation needed for safe operation and a reasonable service life.",
    highlights: [
      "Deep-cycle storage for inverter and solar systems",
      "Installed as a complete, protected battery bank",
      "Replacement of individual batteries or full banks",
      "Maintenance guidance to extend service life",
    ],
    idealFor: ["Budget-conscious backup systems", "Replacing existing lead-acid batteries"],
    image: "/images/products/deep-cycle-battery.jpg",
    imageAlt: "Deep-cycle solar battery",
    keywords: ["deep cycle battery Nigeria", "inverter battery Ibadan"],
  },
  {
    slug: "battery-accessories",
    name: "Battery Accessories",
    category: "Inverters & Power Storage",
    tagline: "The parts that make a bank safe.",
    description:
      "Battery racks, cables, lugs, fuses, breakers and connectors for a correctly built battery bank.",
    detail:
      "A battery bank is only as good as its terminations. We supply the accessories that make an installation safe and serviceable: racks and enclosures, correctly sized battery cables, lugs, fuses, DC breakers, busbars and connectors. If you are building or repairing a bank, we can help you get the values right.",
    highlights: [
      "Racks, enclosures and mounting hardware",
      "Battery cables, lugs and connectors",
      "DC breakers, fuses and busbars",
      "Advice on matching accessories to your bank",
    ],
    idealFor: ["Installers sourcing components", "Anyone rebuilding a battery bank"],
    image: "/images/products/battery-accessories.jpg",
    imageAlt: "Battery cables, lugs and protection accessories",
    keywords: ["battery cables Nigeria", "solar accessories Ibadan"],
  },
  {
    slug: "solar-fans",
    name: "Solar Fans",
    category: "Solar Appliances",
    tagline: "Cooling that keeps working when the grid doesn't.",
    description:
      "Energy-efficient fans designed to run from solar or battery power through hot afternoons and nights.",
    detail:
      "Fans are among the lowest-draw appliances you can run on a solar system, which makes them a practical first step into solar living. We supply efficient standing, ceiling and rechargeable fans that run comfortably from a solar or inverter supply, and can advise on how they affect your system's runtime.",
    highlights: [
      "Energy-efficient fans suited to solar supply",
      "Standing, ceiling and rechargeable options",
      "Low draw — extends your available backup hours",
      "Supply with installation guidance",
    ],
    idealFor: ["Bedrooms and living areas", "Shops and waiting areas"],
    image: "/images/products/solar-fan.jpg",
    imageAlt: "Solar-powered fan",
    keywords: ["solar fan Nigeria", "rechargeable fan"],
  },
  {
    slug: "solar-refrigerators",
    name: "Solar Refrigerators",
    category: "Solar Appliances",
    tagline: "Cold storage without generator noise.",
    description:
      "Solar-compatible refrigerators that keep food and drinks cold on a well-sized solar system.",
    detail:
      "Refrigeration is one of the heaviest loads on a solar system, so the appliance itself matters as much as the panels. We supply solar-compatible refrigerators designed to run efficiently on solar and battery power, and we will size the system realistically around the cooling load you need.",
    highlights: [
      "Solar-compatible refrigeration",
      "Efficient cooling designed for off-grid use",
      "Load assessment before you commit",
      "Delivery and installation support",
    ],
    idealFor: ["Homes and kitchens", "Shops, bars and food vendors"],
    image: "/images/products/solar-refrigerator.jpg",
    imageAlt: "Solar-powered refrigerator",
    keywords: ["solar refrigerator Nigeria", "solar fridge Ibadan"],
  },
  {
    slug: "solar-freezers",
    name: "Solar Freezers",
    category: "Solar Appliances",
    tagline: "Reliable freezing for business and home.",
    description:
      "Solar-powered freezers for frozen goods, drinks and food storage where power is unreliable.",
    detail:
      "For frozen food vendors, caterers and households that store in bulk, a solar freezer protects stock when the grid goes down. We supply freezers suited to solar power and help you understand the storage and panel capacity required to keep them running through the day and night.",
    highlights: [
      "Solar-powered chest freezers",
      "Suited to frozen food and drink businesses",
      "Sizing support for continuous cooling load",
      "Installation and system integration",
    ],
    idealFor: ["Frozen food vendors", "Caterers and event businesses"],
    image: "/images/products/solar-freezer.jpg",
    imageAlt: "Solar-powered chest freezer",
    keywords: ["solar freezer Nigeria", "solar deep freezer Ibadan"],
  },
  {
    slug: "solar-home-lighting",
    name: "Solar Lighting Products",
    category: "Solar Appliances",
    tagline: "Lighting for every room, off the grid.",
    description:
      "Solar bulbs, lamps and indoor lighting kits for homes, shops and workspaces.",
    detail:
      "From individual solar bulbs to complete indoor lighting kits, these products bring light to rooms without adding to your inverter load. They are useful in new buildings, extensions, shops and any space where running wiring is difficult or expensive.",
    highlights: [
      "Solar bulbs, lamps and complete lighting kits",
      "Easy installation without rewiring",
      "Ideal for shops, extensions and outbuildings",
      "Supply for homes and small businesses",
    ],
    idealFor: ["Shops and kiosks", "Rooms without mains wiring"],
    image: "/images/products/solar-home-lighting.jpg",
    imageAlt: "Solar indoor lighting kit",
    keywords: ["solar lighting Nigeria", "solar bulb"],
  },
  {
    slug: "cctv-cameras",
    name: "CCTV Cameras",
    category: "Security Technology",
    tagline: "See what matters, day and night.",
    description:
      "CCTV cameras, recorders and storage, supplied and professionally installed with mobile viewing.",
    detail:
      "We supply and install CCTV cameras for homes, shops, offices, schools and estates, along with the recorder, storage and network setup that makes the footage accessible when you need it. Camera placement is planned around entrances, perimeters and blind spots rather than simply where a cable will reach.",
    highlights: [
      "Indoor and outdoor CCTV cameras",
      "Recorder, storage and mobile viewing configured",
      "Camera placement planned around blind spots",
      "Maintenance and expansion of existing systems",
    ],
    idealFor: ["Homes and estates", "Shops, offices and schools"],
    image: "/images/products/cctv-camera.jpg",
    imageAlt: "CCTV surveillance camera",
    keywords: ["CCTV installation Ibadan", "security cameras Nigeria"],
  },
  {
    slug: "solar-security-cameras",
    name: "Solar-Powered Security Cameras",
    category: "Security Technology",
    tagline: "Surveillance that doesn't wait for the grid.",
    description:
      "Solar-powered surveillance cameras for sites where mains power is unreliable or unavailable.",
    detail:
      "Solar-powered cameras generate their own power, which makes them ideal for perimeters, remote buildings, construction sites and areas where extending mains wiring would be costly. We supply and install these units with the mounting and network configuration needed for reliable remote viewing.",
    highlights: [
      "Self-powered cameras for off-grid locations",
      "Suited to perimeters, sites and remote buildings",
      "Mobile viewing setup included",
      "No mains wiring required",
    ],
    idealFor: ["Construction and remote sites", "Farms, estates and perimeters"],
    image: "/images/products/solar-security-camera.jpg",
    imageAlt: "Solar-powered security camera with an integrated solar panel",
    keywords: ["solar CCTV camera Nigeria", "wireless security camera"],
  },
  {
    slug: "surveillance-equipment",
    name: "Surveillance Equipment",
    category: "Security Technology",
    tagline: "The infrastructure behind the cameras.",
    description:
      "Recorders, hard drives, monitors, cabling and accessories for a complete surveillance system.",
    detail:
      "A camera is only one part of a working security system. We supply digital video recorders, storage drives, monitors, network equipment, cabling and power accessories, and we can specify what is needed to extend or repair an existing installation.",
    highlights: [
      "DVRs, NVRs and storage drives",
      "Monitors and viewing accessories",
      "Cabling, connectors and power supplies",
      "Support for extending existing systems",
    ],
    idealFor: ["System upgrades and repairs", "Installers sourcing components"],
    image: "/images/products/surveillance-equipment.jpg",
    imageAlt: "Surveillance recorder and monitoring equipment",
    keywords: ["CCTV accessories Nigeria", "DVR NVR Ibadan"],
  },
];

export type ProjectCategory =
  | "Residential Installations"
  | "Commercial Installations"
  | "Solar Panel Installations"
  | "Inverter & Battery Installations"
  | "Training & Demonstrations";

export const projectCategories: ProjectCategory[] = [
  "Residential Installations",
  "Commercial Installations",
  "Solar Panel Installations",
  "Inverter & Battery Installations",
  "Training & Demonstrations",
];

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  caption: string;
  image: string;
  imageAlt: string;
  span?: "tall" | "wide" | "normal";
};

export const projects: Project[] = [
  {
    id: "residential-rooftop-array",
    title: "Residential rooftop array",
    category: "Residential Installations",
    location: "Ibadan, Oyo State",
    caption:
      "Roof-mounted panel array installed to power household lighting, fans and entertainment.",
    image: "/images/gallery/residential-roof-array.jpg",
    imageAlt: "Solar panels installed on a residential rooftop",
    span: "tall",
  },
  {
    id: "commercial-solar-array",
    title: "Commercial rooftop system",
    category: "Commercial Installations",
    location: "Ibadan, Oyo State",
    caption:
      "Daytime solar supply for a commercial premises, reducing reliance on generator runtime.",
    image: "/images/gallery/commercial-rooftop.jpg",
    imageAlt: "Commercial rooftop solar installation",
    span: "wide",
  },
  {
    id: "panel-mounting",
    title: "Panel mounting and alignment",
    category: "Solar Panel Installations",
    location: "Oyo State",
    caption:
      "Panels mounted and aligned on a pitched roof, with cable routing and weatherproofing completed.",
    image: "/images/gallery/panel-mounting.jpg",
    imageAlt: "Technician mounting solar panels on a roof",
  },
  {
    id: "inverter-battery-bank",
    title: "Inverter and battery bank",
    category: "Inverter & Battery Installations",
    location: "Ibadan, Oyo State",
    caption:
      "Hybrid inverter with a lithium battery bank, installed with fusing, labelling and ventilation.",
    image: "/images/gallery/inverter-battery-bank.jpg",
    imageAlt: "Installed inverter and lithium battery bank",
    span: "tall",
  },
  {
    id: "lithium-rack",
    title: "Lithium storage rack",
    category: "Inverter & Battery Installations",
    location: "Oyo State",
    caption: "Rack-mounted lithium storage assembled as a protected, serviceable battery bank.",
    image: "/images/gallery/lithium-battery-rack.jpg",
    imageAlt: "Rack-mounted lithium solar batteries",
  },
  {
    id: "training-workshop",
    title: "Practical training workshop",
    category: "Training & Demonstrations",
    location: "Palmtree Solar Master",
    caption:
      "Trainees working through system wiring and component identification in a practical session.",
    image: "/images/training/training-workshop.jpg",
    imageAlt: "Practical solar training workshop",
    span: "wide",
  },
  {
    id: "training-demo",
    title: "Inverter demonstration",
    category: "Training & Demonstrations",
    location: "Palmtree Solar Master",
    caption: "Instructor explaining inverter configuration and battery charging during a demonstration.",
    image: "/images/training/training-demonstration.jpg",
    imageAlt: "Inverter demonstration during solar training",
  },
  {
    id: "ground-mount",
    title: "Ground-mounted array",
    category: "Solar Panel Installations",
    location: "South-West Nigeria",
    caption: "Ground-mounted panels on a fabricated frame for a site with limited roof space.",
    image: "/images/gallery/ground-mount.jpg",
    imageAlt: "Ground-mounted solar panel array",
  },
  {
    id: "commercial-inverter-room",
    title: "Commercial power room",
    category: "Commercial Installations",
    location: "Ibadan, Oyo State",
    caption:
      "Inverter and battery room for a commercial facility, with distribution and protection installed.",
    image: "/images/gallery/commercial-power-room.jpg",
    imageAlt: "Commercial solar inverter room",
  },
  {
    id: "home-lighting",
    title: "Home solar lighting",
    category: "Residential Installations",
    location: "Ibadan, Oyo State",
    caption: "Solar lighting and fan supply installed for a family home.",
    image: "/images/gallery/home-lighting.jpg",
    imageAlt: "Home interior powered by a solar installation",
  },
  {
    id: "maintenance-check",
    title: "Maintenance and inspection",
    category: "Solar Panel Installations",
    location: "Oyo State",
    caption: "Routine panel cleaning and connection inspection on an existing installation.",
    image: "/images/gallery/maintenance-check.jpg",
    imageAlt: "Technician inspecting a solar installation",
  },
  {
    id: "trainees-on-site",
    title: "Trainees on site",
    category: "Training & Demonstrations",
    location: "Palmtree Solar Master",
    caption: "Trainees observing a live installation as part of practical field learning.",
    image: "/images/training/trainees-on-site.jpg",
    imageAlt: "Trainees observing a live solar installation",
  },
];

export type Programme = {
  slug: string;
  title: string;
  level: string;
  summary: string;
  description: string;
  learn: string[];
  bestFor: string;
  icon: "sun" | "inverter" | "battery" | "cctv" | "wrench" | "graduation" | "panels";
};

export const programmes: Programme[] = [
  {
    slug: "solar-system-installation",
    title: "Solar System Installation Training",
    level: "Foundation",
    summary:
      "Learn how a complete solar system is planned, assembled, wired and commissioned.",
    description:
      "A practical foundation in solar installation. You will work with panels, charge controllers, inverters and batteries to understand how a system is put together, how it is sized for a real building, and how it is tested before handover. Suited to beginners entering the solar industry and to technicians formalising hands-on experience.",
    learn: [
      "Solar system components and how they work together",
      "Reading a load and sizing a system",
      "Panel mounting, orientation and cable routing",
      "Safe wiring, earthing and protection",
      "Testing and commissioning a new installation",
    ],
    bestFor: "Beginners and career changers entering the solar industry",
    icon: "panels",
  },
  {
    slug: "inverter-and-battery",
    title: "Inverter and Battery Training",
    level: "Technical",
    summary:
      "Inverter configuration, battery bank assembly and the settings that decide system reliability.",
    description:
      "Focused on the storage and conversion side of a solar system. You will learn how inverters are sized and configured, how battery banks are assembled safely, and why charging settings and cable sizing matter so much in practice. Well suited to technicians already installing inverters who want to work more accurately.",
    learn: [
      "Inverter types, sizing and changeover wiring",
      "Battery bank assembly, fusing and protection",
      "Charging profiles and inverter configuration",
      "Diagnosing common inverter and battery faults",
      "Upgrading and expanding existing systems",
    ],
    bestFor: "Technicians and installers working with inverter systems",
    icon: "inverter",
  },
  {
    slug: "solar-electrical-systems",
    title: "Solar Electrical Systems",
    level: "Technical",
    summary:
      "The electrical knowledge behind safe, code-conscious solar work.",
    description:
      "A deeper look at the electrical principles that make solar installations safe and durable: voltage and current, cable selection, protective devices, earthing and distribution. Designed for learners who want to understand why an installation is built the way it is, not just how to replicate it.",
    learn: [
      "Electrical fundamentals applied to solar systems",
      "Cable sizing and voltage drop in practice",
      "Breakers, fuses and surge protection",
      "Earthing and safe distribution",
      "Fault finding with test instruments",
    ],
    bestFor: "Learners who already have basic electrical exposure",
    icon: "battery",
  },
  {
    slug: "cctv-installation-and-technology",
    title: "CCTV Installation and Technology",
    level: "Foundation",
    summary:
      "Camera planning, installation, recording and remote viewing.",
    description:
      "A practical introduction to security technology. Cover camera selection and placement, cable and network installation, recorder and storage configuration, and setting up remote viewing on a phone. Ideal for anyone adding surveillance services to a technology or electrical business.",
    learn: [
      "Camera types and where each is suited",
      "Planning coverage around entrances and blind spots",
      "Cabling, connectors and network basics",
      "Recorder and storage configuration",
      "Remote viewing and system handover",
    ],
    bestFor: "Technicians adding CCTV to their service offering",
    icon: "cctv",
  },
  {
    slug: "practical-installation-workshops",
    title: "Practical Solar Installation Workshops",
    level: "Hands-on",
    summary:
      "Short, intensive workshops built around real components and live installations.",
    description:
      "Workshop sessions for people who learn by doing. Groups work directly with panels, inverters, batteries and wiring, supported by instructors who install systems every week. A good option if you want practical exposure before committing to a longer programme, or if you are already in the trade and want to sharpen specific skills.",
    learn: [
      "Hands-on work with real solar components",
      "Guided assembly of a working demonstration system",
      "Installation safety and best practice",
      "Group troubleshooting exercises",
      "Direct access to practising installers",
    ],
    bestFor: "Practical learners and existing technicians",
    icon: "wrench",
  },
];

export const serviceEnquiry = (title: string) => serviceEnquiryMessage(title);
export const productEnquiry = (name: string, category?: string) =>
  productEnquiryMessage(name, category);

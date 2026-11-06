/**
 * Central business configuration.
 * Everything customer-facing (contact details, links, copy anchors) is sourced
 * from here so the business can update one file instead of hunting the codebase.
 */

export const site = {
  name: "Palmtree Technology Services",
  shortName: "Palmtree",
  brandAlt: "Palmtree Solar Master",
  tagline: "Power Your World. Embrace a Brighter Future.",
  description:
    "Palmtree Technology Services is a Nigerian solar energy and technology company delivering solar installation, inverters, batteries, solar products, CCTV and practical solar training to homes and businesses nationwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.palmtreetechservices.com",
  locale: "en_NG",
  phoneDisplay: "0805 127 0913",
  phoneTel: "+2348051270913",
  whatsappNumber: "2348051270913",
  email: "palmtreeng@gmail.com",
  facebook: "https://www.facebook.com/wojuadesolar/",
  address: {
    line1: "Opposite Shafa Petrol Station",
    line2: "Academy–Monatan Road",
    city: "Ibadan",
    state: "Oyo State",
    country: "Nigeria",
  },
  serviceArea: "Nationwide — all states in Nigeria",
  hours: [
    { day: "Monday – Friday", time: "8:00am – 6:00pm" },
    { day: "Saturday", time: "9:00am – 4:00pm" },
    { day: "Sunday", time: "Enquiries by WhatsApp" },
  ],
  // Google Maps embed for the current Academy–Monatan Road office.
  // Query-based embed avoids publishing stale place-ID coordinates from the old listing.
  mapQuery: "Academy-Monatan Road, Ibadan, Oyo State, Nigeria",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Academy%20Monatan%20Road%2C%20Ibadan%2C%20Oyo%20State%2C%20Nigeria&output=embed",
  mapDirectionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Academy%20Monatan%20Road%2C%20Ibadan%2C%20Oyo%20State%2C%20Nigeria",
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.state}, ${site.address.country}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
] as const;

/** Build a wa.me deep link with a pre-filled, context-aware message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general:
    "Hello Palmtree Technology Services. I am interested in your solar installation services. Please provide more information.",
  products:
    "Hello Palmtree Technology Services. I would like to enquire about the solar products you supply.",
  training:
    "Hello Palmtree Technology Services. I am interested in the Palmtree Solar Master solar training programmes. Please share the details.",
  quote:
    "Hello Palmtree Technology Services. I would like a free solar consultation and quote for my property.",
  support:
    "Hello Palmtree Technology Services. I would like to enquire about solar system maintenance and support.",
};

export function productEnquiryMessage(productName: string, category?: string) {
  const base = `Hello Palmtree Technology Services. I am interested in the ${productName}${
    category ? ` (${category})` : ""
  } listed on your website. Please share availability and pricing.`;
  return base;
}

export function serviceEnquiryMessage(serviceName: string) {
  return `Hello Palmtree Technology Services. I am interested in your ${serviceName} service. Please provide more information and a quote.`;
}

export function trainingEnquiryMessage(programme: string) {
  return `Hello Palmtree Solar Master. I would like to register for the ${programme} training. Please share the next available dates and requirements.`;
}

export const navigationFooter: ReadonlyArray<{ label: string; href: string }> = [
  ...navLinks,
  { label: "Request a Quote", href: "/contact#quote" },
  { label: "Service Areas", href: "/contact#location" },
];

export const socials = [
  {
    label: "Facebook",
    href: site.facebook,
  },
];

// Business data for the site. Edit here — every section reads from this file.

export const SITE_URL = "https://landrys-barber-shoppe.netlify.app";

export const BUSINESS = {
  name: "Landry’s Barber Shoppe",
  shortName: "Landry’s",
  tagline: "Barber Shoppe",
  city: "Gastonia, NC",
  description:
    "Family-oriented barber shop in Gastonia, NC with upscale haircuts for all ages. Haircuts, beard work and kids cuts. Book online or call (704) 215-5984.",
  phoneDisplay: "(704) 215-5984",
  phoneTel: "tel:+17042155984",
  phoneE164: "+1-704-215-5984",
  street: "2930-22 E Franklin Blvd",
  locality: "Gastonia, NC 28056",
  bookUrl: "https://booksy.com/en-us/1254405_landry-s-barber-shoppe_barber-shop_26689_gastonia",
  facebookUrl: "https://www.facebook.com/Landrysbarbershoppe/",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Landry%27s+Barber+Shoppe%2C+2930+E+Franklin+Blvd+%2322%2C+Gastonia%2C+NC+28056",
  rating: { value: "4.6", count: 194 },
};

export type Service = { name: string; time: string; price: string; from?: boolean };

// Prices and times as listed on Booksy. `from: true` renders a "+" (starting price).
export const CUTS: Service[] = [
  { name: "Haircut", time: "40 min", price: "35", from: true },
  { name: "Teen’s Haircut", time: "30 min", price: "30" },
  { name: "Kids Haircut", time: "30 min", price: "30" },
  { name: "Head Shave", time: "30 min", price: "40", from: true },
  { name: "Scissor Cut", time: "Up-charge for scissor use · 15 min", price: "5", from: true },
];

export const BEARD: Service[] = [
  { name: "Haircut & Beard", time: "40 min", price: "40" },
  { name: "Taper & Beard", time: "30 min", price: "40" },
  { name: "Beard Shaping", time: "30 min", price: "20", from: true },
  { name: "Shape Up", time: "30 min", price: "20" },
  { name: "Razor", time: "30 min", price: "5" },
  { name: "Enhancements", time: "15 min", price: "5", from: true },
];

// Verbatim Google review highlights.
export const REVIEWS = [
  "Family shop with fast friendly service and skilled barbers!",
  "Great price, great atmosphere, great people!!",
  "Cool cats and cheap prices cant beat it",
];

// days: 0 = Sunday … 6 = Saturday (used to highlight today's row).
export const HOURS: { day: string; days: number[]; time: string }[] = [
  { day: "Tuesday", days: [2], time: "10 AM – 7 PM" },
  { day: "Wednesday", days: [3], time: "10 AM – 7 PM" },
  { day: "Thursday", days: [4], time: "10 AM – 7 PM" },
  { day: "Friday", days: [5], time: "10 AM – 7 PM" },
  { day: "Sat · Sun · Mon", days: [6, 0, 1], time: "Call or check online booking" },
];

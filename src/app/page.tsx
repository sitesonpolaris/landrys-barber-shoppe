import type { CSSProperties } from "react";
import Image from "next/image";
import { Badge, Stars } from "@/components/Badge";
import { CalIcon, CheckIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { MenuList } from "@/components/MenuList";
import { SiteMotion } from "@/components/SiteMotion";
import { BEARD, BUSINESS, CUTS, HOURS, REVIEWS, SITE_URL } from "@/lib/site";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Landry's Barber Shoppe",
  description:
    "Family-oriented barber shop in Gastonia, NC providing upscale haircuts for all ages in a child-friendly atmosphere.",
  url: SITE_URL + "/",
  image: SITE_URL + "/og.jpg",
  logo: SITE_URL + "/icons/icon-512.png",
  telephone: BUSINESS.phoneE164,
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2930 E Franklin Blvd, Suite 22",
    addressLocality: "Gastonia",
    addressRegion: "NC",
    postalCode: "28056",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: [BUSINESS.facebookUrl, BUSINESS.bookUrl],
  potentialAction: { "@type": "ReserveAction", target: BUSINESS.bookUrl },
});

// React doesn't serialize `muted` in server HTML, and iOS only autoplays videos
// that are muted in the initial markup — so the hero video is emitted as raw HTML.
const HERO_VIDEO = `<video class="hero-video" autoplay muted loop playsinline preload="auto" poster="/media/hero-v2-poster-1920.webp" aria-hidden="true" tabindex="-1" disablepictureinpicture disableremoteplayback><source src="/media/hero-v2-720.mp4" type="video/mp4" media="(max-width: 900px)"><source src="/media/hero-v2-1080.mp4" type="video/mp4"></video>`;

// Cached so the page stays fully prerendered; refreshes when the cache revalidates.
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

const v = (n: number) => ({ ["--i" as string]: n }) as CSSProperties;
const d = (n: number) => ({ ["--d" as string]: n }) as CSSProperties;
const ext = { target: "_blank", rel: "noopener" } as const;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD }} />
      <SiteMotion />
      <a className="skip" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="wrap">
          <a className="brand" href="#top" aria-label="Landry’s Barber Shoppe, back to top">
            <Badge className="brand-badge" uid="h" />
            <span className="brand-name">
              <b>{BUSINESS.shortName}</b>
              <span>{BUSINESS.tagline}</span>
            </span>
          </a>
          <nav className="nav" aria-label="Primary">
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#visit">Visit</a></li>
            </ul>
            <a className="btn btn-ghost nav-call" href={BUSINESS.phoneTel} aria-label={`Call ${BUSINESS.phoneDisplay}`}>
              <PhoneIcon />
            </a>
            <a className="btn" href={BUSINESS.bookUrl} {...ext}>Book now</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-media" data-speed="0.32" dangerouslySetInnerHTML={{ __html: HERO_VIDEO }} />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-pole" data-speed="-0.2" aria-hidden="true" />
          <div className="hero-content" data-speed="0.12" data-fade="1">
            <div className="wrap">
              <p className="hero-eyebrow enter" style={v(0)}>
                <span>Gastonia, NC</span>
                <i aria-hidden="true" />
                <span>Cuts for all ages</span>
              </p>
              <h1 id="hero-title">
                <span className="h1-name enter" style={v(1)}>Landry’s</span>
                <span className="h1-sub enter" style={v(2)}>Barber Shoppe</span>
              </h1>
              <p className="hero-lede enter" style={v(3)}>
                A family barber shop with upscale haircuts for every age. A calm chair for the grown-ups, a welcome one
                for the kids.
              </p>
              <div className="hero-actions enter" style={v(4)}>
                <a className="btn" href={BUSINESS.bookUrl} {...ext}><CalIcon /> Book online</a>
                <a className="btn btn-ghost" href={BUSINESS.phoneTel}><PhoneIcon /> {BUSINESS.phoneDisplay}</a>
              </div>
              <div className="hero-meta enter" style={v(5)}>
                <span className="stars">
                  <strong>{BUSINESS.rating.value}</strong>
                  <Stars uid="a" />
                  <span>{BUSINESS.rating.count} Google reviews</span>
                </span>
                <a href={BUSINESS.directionsUrl} {...ext}>{BUSINESS.street}</a>
              </div>
            </div>
          </div>
          <span className="scroll-cue" aria-hidden="true" />
        </section>

        <section className="about light pad" id="about" aria-labelledby="about-title">
          <div className="wrap about-grid">
            <div>
              <p className="kicker reveal">The shop</p>
              <h2 className="h2 reveal" id="about-title" style={d(1)}>
                Sharp cuts. Easy company. Room for the whole family.
              </h2>
              <p className="lede reveal" style={d(2)}>
                Landry’s is a family-oriented barber shop on East Franklin Boulevard, giving upscale haircuts to all ages in
                a child-friendly atmosphere. Bring the kids, take a seat, and leave looking right.
              </p>
              <blockquote className="about-quote reveal" style={d(3)}>
                <p>“Fun and games for the kids and a country club feel for the adults.”</p>
                <footer>In the shop’s own words</footer>
              </blockquote>
              <ul className="chips reveal" style={d(4)} aria-label="Amenities">
                <li><CheckIcon /> Good for kids</li>
                <li><CheckIcon /> Restroom</li>
                <li><CheckIcon /> Online booking</li>
              </ul>
            </div>
            <div className="collage">
              <p className="collage-word" data-speed="0.18" aria-hidden="true">Gastonia</p>
              <figure className="c-main" data-speed="0.05">
                <Image
                  src="/media/kids-896.webp"
                  width={896}
                  height={1120}
                  sizes="(max-width: 860px) 70vw, 36vw"
                  alt="A child’s sneakers dangling from a green leather barber chair with a booster seat"
                />
              </figure>
              <figure className="c-small" data-speed="-0.14">
                <Image
                  src="/media/tools-896.webp"
                  width={896}
                  height={1120}
                  sizes="(max-width: 860px) 45vw, 22vw"
                  alt="Straight razor, shaving brush, comb and tonic bottle on a green barber towel"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="services pad" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <div className="services-head">
              <div>
                <p className="kicker reveal">Services &amp; prices</p>
                <h2 className="h2 reveal" id="services-title" style={d(1)}>The chair menu.</h2>
              </div>
              <p className="lede reveal" style={d(2)}>
                Haircuts, beard work and finishing touches for kids, teens and adults. A “+” means the price starts there and
                depends on the cut.
              </p>
            </div>
            <div className="services-grid">
              <MenuList title="Cuts" items={CUTS} />
              <MenuList title="Beard & finish" items={BEARD} delay={1} />
              <div className="services-aside">
                <figure data-speed="-0.1">
                  <Image
                    src="/media/razor-896.webp"
                    width={896}
                    height={1120}
                    sizes="24vw"
                    alt="A barber shaping a lathered beard line with a straight razor"
                  />
                </figure>
                <p className="services-note">
                  Prices and times as listed on the shop’s online booking page. Call to confirm anything specific.
                </p>
              </div>
            </div>
            <div className="services-cta reveal">
              <p>Pick a time that works. Booking is open online around the clock.</p>
              <a className="btn" href={BUSINESS.bookUrl} {...ext}><CalIcon /> Book an appointment</a>
            </div>
          </div>
        </section>

        <section className="reviews light pad" id="reviews" aria-labelledby="reviews-title">
          <div className="wrap">
            <div className="reviews-top">
              <div>
                <p className="kicker reveal">What people say</p>
                <h2 className="h2 reveal" id="reviews-title" style={d(1)}>From the chair.</h2>
              </div>
              <div className="score reveal" style={d(2)}>
                <span className="score-num">{BUSINESS.rating.value}</span>
                <span className="score-meta">
                  <Stars uid="b" />
                  <span>Average of {BUSINESS.rating.count} Google reviews</span>
                </span>
              </div>
            </div>
            <ul className="quotes">
              {REVIEWS.map((q, i) => (
                <li className="quote reveal" key={q} style={d(i)}>
                  <blockquote><p>{q}</p></blockquote>
                  <cite>Google review</cite>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="visit pad" id="visit" aria-labelledby="visit-title">
          <div className="wrap">
            <p className="kicker reveal">Hours &amp; location</p>
            <h2 className="h2 reveal" id="visit-title" style={d(1)}>Come on by.</h2>
            <div className="visit-grid">
              <div className="card reveal">
                <span className="card-stripe" aria-hidden="true" />
                <h3>Hours</h3>
                <table className="hours">
                  <caption className="sr-only">Opening hours</caption>
                  <tbody>
                    {HOURS.map((h) => (
                      <tr key={h.day} data-days={h.days.join(",")}>
                        <th scope="row">{h.day}</th>
                        <td>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="card-note">Walk in, or book ahead online for a set time.</p>
              </div>
              <div className="card reveal" style={d(1)}>
                <span className="card-stripe" aria-hidden="true" />
                <h3>Find the shop</h3>
                <address className="address">
                  <a href={BUSINESS.directionsUrl} {...ext}>
                    {BUSINESS.street}
                    <span>{BUSINESS.locality}</span>
                  </a>
                </address>
                <div className="card-actions">
                  <a className="btn" href={BUSINESS.directionsUrl} {...ext}><PinIcon /> Get directions</a>
                  <a className="btn btn-ghost" href={BUSINESS.bookUrl} {...ext}><CalIcon /> Book online</a>
                </div>
                <a className="phone-big" href={BUSINESS.phoneTel}>
                  <small>Call the shop</small>
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-cta">
          <p className="footer-big reveal">Take a <em>seat.</em></p>
          <div className="hero-actions reveal" style={d(1)}>
            <a className="btn" href={BUSINESS.bookUrl} {...ext}><CalIcon /> Book online</a>
            <a className="btn btn-ghost" href={BUSINESS.phoneTel}><PhoneIcon /> Call {BUSINESS.phoneDisplay}</a>
          </div>
        </div>
        <div className="wrap footer-base">
          <div>
            <a className="brand" href="#top" aria-label="Landry’s Barber Shoppe, back to top">
              <Badge className="brand-badge" uid="f" />
              <span className="brand-name">
                <b>{BUSINESS.shortName}</b>
                <span>{BUSINESS.tagline}</span>
              </span>
            </a>
          </div>
          <div>
            <h4>Visit</h4>
            <p>
              <a href={BUSINESS.directionsUrl} {...ext}>
                {BUSINESS.street}
                <br />
                {BUSINESS.locality}
              </a>
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={BUSINESS.phoneTel}>{BUSINESS.phoneDisplay}</a></li>
              <li><a href={BUSINESS.bookUrl} {...ext}>Book on Booksy</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href={BUSINESS.facebookUrl} {...ext}>Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="wrap footer-legal">
          <span>© <CopyrightYear /> {BUSINESS.name} · {BUSINESS.city}</span>
          <span>Tue–Fri 10 AM – 7 PM</span>
        </div>
      </footer>

      <div className="dock" role="group" aria-label="Quick actions">
        <a className="btn btn-ghost" href={BUSINESS.phoneTel}><PhoneIcon /> Call</a>
        <a className="btn" href={BUSINESS.bookUrl} {...ext}><CalIcon /> Book now</a>
      </div>
    </>
  );
}

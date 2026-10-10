import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Compass, Users, Sparkles, Award, ChevronDown } from 'lucide-react';
import './About.css';

export const About = () => {
  useDocumentTitle('About Us — Our Story & Mission');
  const [activeFaq, setActiveFaq] = useState(0);

  const teamMembers = [
    {
      name: 'Dr. Ananya Roy',
      role: 'Founder & Head of Curation',
      bio: 'Former cultural anthropologist with 16 years of expeditionary field experience spanning 45 countries.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Rohan Mehra',
      role: 'Chief Experience Officer',
      bio: 'Luxury adventure specialist dedicated to architecting authentic, seamless itineraries for families and private groups.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Kavita Nair',
      role: 'Sustainability & Community Director',
      bio: 'Passionate conservationist ensuring all our partners observe fair-wage tourism and zero-waste trail practices.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const faqs = [
    {
      q: 'How does the TripNest guaranteed booking confirmation work?',
      a: 'When you submit a reservation with your 20% advance token, our concierge team immediately places direct holds with verified accommodation and local transport partners. You receive your formal electronic voucher within minutes with verified confirmation codes.'
    },
    {
      q: 'What is your cancellation and rescheduling policy?',
      a: 'We understand plans change. All standard TripNest bookings come with 100% refund capability up to 72 hours before the scheduled departure date. Rescheduling your dates within a 6-month window is always complimentary subject to seasonal availability.'
    },
    {
      q: 'Can I customize any of the itineraries featured in the catalog?',
      a: 'Absolutely! Our Custom Itineraries team specializes in bespoke journeys. Simply pick any starting package as your foundation and request day-level alterations, room upgrades, dietary preferences, or private transport additions.'
    },
    {
      q: 'Are local transfers and airport pickups included?',
      a: 'You can opt to include our private Airport & Station pickup add-on during checkout. Our vetted chauffeurs track your flight in real time and greet you right outside the arrivals lounge with a name placard.'
    }
  ];

  return (
    <div>
      {/* Hero Header */}
      <section className="about-hero">
        <div className="container">
          <span className="section-pill">
            <Compass size={14} /> Our Story & Mission
          </span>
          <h1 className="section-title about-hero-title">
            We Believe Travel Should Be Immersive, Effortless & Transformative
          </h1>
          <p className="section-desc about-hero-desc">
            Founded in 2021 by a team of avid explorers and hospitality veterans, TripNest was born out of a simple conviction: booking a once-in-a-lifetime vacation shouldn’t feel like navigating a spreadsheet.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section-py">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <span className="section-pill">
                <Sparkles size={14} /> The Philosophy
              </span>
              <h2 className="about-story-title">
                Curating Journeys That Leave A Mark On Your Soul
              </h2>
              <p className="about-story-text">
                Mass tourism tends to herd people into generic buses and cookie-cutter tourist traps. TripNest exists to do the exact opposite. We connect modern travelers with authentic traditions, untamed nature, and private sanctuaries where you can breathe, reflect, and wonder.
              </p>
              <p className="about-story-text">
                By directly partnering with indigenous guides, small eco-friendly lodges, and vetted drivers, we keep tourism dollars inside local communities while guaranteeing unmatched service quality for you.
              </p>
            </div>

            <div className="about-story-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80"
                alt="Travel exploration"
                className="about-story-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="section-py about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            <div className="card about-stat-card">
              <div className="about-stat-number about-stat-primary">
                45K+
              </div>
              <div className="about-stat-label">Global Travelers</div>
              <div className="about-stat-sub">Explored with our guides</div>
            </div>

            <div className="card about-stat-card">
              <div className="about-stat-number about-stat-secondary">
                120+
              </div>
              <div className="about-stat-label">Curated Packages</div>
              <div className="about-stat-sub">Across 38 countries</div>
            </div>

            <div className="card about-stat-card">
              <div className="about-stat-number about-stat-accent">
                99.4%
              </div>
              <div className="about-stat-label">Satisfaction Rate</div>
              <div className="about-stat-sub">Based on verified reviews</div>
            </div>

            <div className="card about-stat-card">
              <div className="about-stat-number about-stat-success">
                24/7
              </div>
              <div className="about-stat-label">Concierge Desk</div>
              <div className="about-stat-sub">Around-the-clock peace of mind</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Curators Team */}
      <section className="section-py">
        <div className="container">
          <div className="section-heading">
            <span className="section-pill">
              <Users size={14} /> Our People
            </span>
            <h2 className="section-title">
              Meet The Architects Of Your Journey
            </h2>
            <p className="section-desc">
              Passionate explorers, field researchers, and travel concierges who obsess over the subtle details that elevate your vacation.
            </p>
          </div>

          <div className="grid-3">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="card about-team-card">
                <div className="about-team-avatar-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="about-team-avatar"
                  />
                </div>
                <h3 className="about-team-name">{member.name}</h3>
                <div className="about-team-role">
                  {member.role}
                </div>
                <p className="about-team-bio">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="section-py about-faq-section">
        <div className="container about-faq-container">
          <div className="section-heading">
            <span className="section-pill">
              <Award size={14} /> Clarity & Transparency
            </span>
            <h2 className="section-title">
              Common Questions Answered
            </h2>
            <p className="section-desc">
              Everything you need to know about booking, dates, payment security, and our travel guarantees.
            </p>
          </div>

          <div className="about-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="card about-faq-card">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="about-faq-btn"
                  >
                    <span className="about-faq-question">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`about-faq-arrow ${isOpen ? 'open' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="about-faq-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

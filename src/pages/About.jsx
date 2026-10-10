import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Compass, ShieldCheck, Heart, Globe, Users, Award, ChevronDown, Sparkles } from 'lucide-react';

export const About = () => {
  useDocumentTitle('About Us — The TripNest Story');
  const [activeFaq, setActiveFaq] = useState(0);

  const teamMembers = [
    {
      name: 'Vikramaditya Rathore',
      role: 'Co-Founder & Chief Expedition Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Mountaineer and wildlife naturalist with over 16 years leading high-altitude Himalayan treks and heritage palace expeditions.'
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Head of Hospitality & Heritage Stays',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Over 14 years auditing royal heritage havelis, luxury houseboats in Alleppey, and world-class Ayurvedic wellness resorts.'
    },
    {
      name: 'Dr. Arjun Nambiar',
      role: 'Director of Cultural Immersion & Ethics',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      bio: 'Anthropologist dedicated to ensuring that 100% of our local partner guides, boatmen, and artisans in India receive fair living compensation.'
    }
  ];

  const faqs = [
    {
      q: 'How does TripNest select its tour packages and accommodations?',
      a: 'We physically vet every boutique hotel, eco-lodge, private transfer operator, and local guide. We do not use bulk aggregator algorithms; every itinerary is curated and verified by our on-the-ground regional specialists.'
    },
    {
      q: 'What is your cancellation and reschedule policy?',
      a: 'TripNest provides a free cancellation grace window of up to 72 hours from booking. Additionally, most confirmed packages allow one free date reschedule up to 14 days before your departure date.'
    },
    {
      q: 'Are flights included in the package prices?',
      a: 'Our core package prices cover high-standard boutique hotels, private local transfers, expert guides, entry tickets, and daily gourmet breakfasts. International flights can be added seamlessly via our Flights & Charters concierge.'
    },
    {
      q: 'Can itineraries be customized for special dietary or accessibility needs?',
      a: 'Absolutely! Whether you require strict halal, vegan, gluten-free dining, wheelchair-accessible transport, or sensory-friendly paces, simply enter your notes during booking or contact our 24/7 concierge.'
    }
  ];

  return (
    <div>
      {/* Hero Header */}
      <section style={{
        background: 'linear-gradient(180deg, var(--color-primary-light) 0%, transparent 100%)',
        padding: '70px 0 50px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-pill">
            <Compass size={14} /> Our Story & Mission
          </span>
          <h1 className="section-title" style={{ maxWidth: '800px', margin: '0 auto 16px auto' }}>
            We Believe Travel Should Be Immersive, Effortless & Transformative
          </h1>
          <p className="section-desc" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Founded in 2021 by a team of avid explorers and hospitality veterans, TripNest was born out of a simple conviction: booking a once-in-a-lifetime vacation shouldn’t feel like navigating a spreadsheet.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section-py">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span className="section-pill">
                <Sparkles size={14} /> The Philosophy
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '18px', color: 'var(--text-main)' }}>
                Curating Journeys That Leave A Mark On Your Soul
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '16px' }}>
                Mass tourism tends to herd people into generic buses and cookie-cutter tourist traps. TripNest exists to do the exact opposite. We connect modern travelers with authentic traditions, untamed nature, and private sanctuaries where you can breathe, reflect, and wonder.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                By directly partnering with indigenous guides, small eco-friendly lodges, and vetted drivers, we keep tourism dollars inside local communities while guaranteeing unmatched service quality for you.
              </p>
            </div>

            <div style={{ height: '420px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80"
                alt="Travel exploration"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px' }}>
                45K+
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Global Travelers</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Explored with our guides</div>
            </div>

            <div className="card" style={{ padding: '32px' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '4px' }}>
                120+
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Curated Packages</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Across 38 countries</div>
            </div>

            <div className="card" style={{ padding: '32px' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '4px' }}>
                99.4%
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Satisfaction Rate</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Based on verified reviews</div>
            </div>

            <div className="card" style={{ padding: '32px' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--color-success)', marginBottom: '4px' }}>
                24/7
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Concierge Desk</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Around-the-clock peace of mind</div>
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
              <div key={idx} className="card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ width: '130px', height: '130px', borderRadius: 'var(--radius-full)', overflow: 'hidden', margin: '0 auto 18px auto', border: '3px solid var(--color-primary-light)' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>{member.name}</h3>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '12px' }}>
                  {member.role}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="card" style={{ overflow: 'hidden' }}>
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      gap: '16px',
                      background: 'none'
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                        color: 'var(--text-muted)',
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: '0 24px 22px 24px',
                      color: 'var(--text-muted)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '16px'
                    }}>
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

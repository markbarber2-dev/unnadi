'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaWhatsapp, FaPhone, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUniversity, FaFileAlt, FaGraduationCap, FaGlobeAmericas, FaMoneyBillWave, FaPlane, FaUserGraduate, FaGlobe, FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  const phoneNumber = '+1234567890'; // Placeholder number
  const whatsappNumber = '1234567890'; // Placeholder WhatsApp number
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleHashChange = () => {
        const { hash } = window.location;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      // Handle scroll for header shadow
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };

      handleHashChange();
      window.addEventListener('hashchange', handleHashChange, false);
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('hashchange', handleHashChange, false);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Navigation */}
      <nav className={`bg-white py-2 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <Image 
                  src="/Unnathi.png" 
                  alt="Unnadhi Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                  Unnadhi
                </h1>
                <span className="inline-block mt-0.5 px-2 py-0.5 bg-teal-50 text-teal-600 text-xs font-medium rounded-full border border-teal-100">
                  #dreamhighdreamunnadhi
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">About Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-2 pb-4 space-y-2">
                  <a 
                    href="#home" 
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                  >
                    Home
                  </a>
                  <a 
                    href="#services" 
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                  >
                    Services
                  </a>
                  <a 
                    href="#about" 
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                  >
                    About Us
                  </a>
                  <a 
                    href="#testimonials" 
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                  >
                    Testimonials
                  </a>
                  <a 
                    href="#contact" 
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
        <a 
          href={`tel:${phoneNumber}`} 
          className="flex items-center justify-center w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-110"
          aria-label="Call us"
        >
          <FaPhoneAlt className="w-6 h-6" />
        </a>
      </div>

      {/* Hero Carousel */}
      <div id="home" className="relative w-full overflow-hidden">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          centerMode={false}
          className="w-full"
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={true}
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
          }}
          rewind={true}
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {[
            {
              image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              title: "Global Education Pathways",
              subtitle: "Your journey to international academic excellence starts here"
            },
            {
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              title: "Study Abroad Experts",
              subtitle: "Guiding students to their dream universities worldwide"
            },
            {
              image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              title: "Visa & Admission Support",
              subtitle: "Comprehensive assistance for your international education journey"
            }
          ].map((slide, index) => (
            <div key={index} className="relative h-[60vh] min-h-[400px] md:h-[70vh] md:min-h-[500px] w-full">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-full"
                  priority={index === 0}
                  quality={90}
                />
                {/* Teal overlay */}
                <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/30 to-transparent flex items-end">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white">
                  <div className="max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">{slide.title}</h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>


      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Our Services
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your educational journey
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'University Selection',
                description: 'Expert guidance in choosing the right university based on your profile and aspirations.',
                icon: <FaUniversity className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mb-3 sm:mb-4 mx-auto" />
              },
              {
                title: 'Application Support',
                description: 'End-to-end assistance with application processes and documentation.',
                icon: <FaFileAlt className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mb-3 sm:mb-4 mx-auto" />
              },
              {
                title: 'Test Preparation',
                description: 'Guidance and resources for standardized tests like TOEFL, IELTS, GRE, and more.',
                icon: <FaGraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mb-3 sm:mb-4 mx-auto" />
              },
              {
                title: 'Visa Assistance',
                description: 'Comprehensive support for student visa applications and interviews.',
                icon: <FaGlobeAmericas className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mb-3 sm:mb-4 mx-auto" />
              },
              {
                title: 'Scholarship Guidance',
                description: 'Assistance in identifying and applying for scholarships and financial aid.',
                icon: <FaMoneyBillWave className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mb-3 sm:mb-4 mx-auto" />
              },
              {
                title: 'Pre-departure Briefing',
                description: 'Comprehensive orientation for academic and cultural transition.',
                icon: <FaPlane className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mb-3 sm:mb-4 mx-auto" />
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col hover:border-teal-100"
              >
                <div className="text-center flex-grow">
                  {service.icon}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              About Unnadhi
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students to achieve their academic dreams through personalized guidance and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Counselors",
                description: "Our team of experienced education counselors provides personalized guidance tailored to your academic goals.",
                icon: <FaUserGraduate className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mb-3 sm:mb-4 mx-auto" />
              },
              {
                title: "Global Reach",
                description: "We have successfully placed students in top universities across the world.",
                icon: <FaGlobe className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mb-3 sm:mb-4 mx-auto" />
              },
              {
                title: "End-to-End Support",
                description: "From university selection to visa processing, we handle every step of your journey.",
                icon: <FaCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mb-3 sm:mb-4 mx-auto" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col hover:border-teal-100"
              >
                <div className="text-center flex-grow">
                  {item.icon}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50 overflow-hidden scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Success stories from our students around the world
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex space-x-8 py-4"
                animate={{
                  x: ['0%', '-100%'],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {[1, 2].flatMap((_, i) => [
                  <motion.div 
                    key={`testimonial-${i}-1`}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="min-w-[300px] sm:min-w-[400px] bg-white p-6 rounded-lg shadow-md border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mr-4">
                        R
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
                        <p className="text-sm text-gray-500">University of Toronto, Canada</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;Unnadhi guided me through every step of my application process. Their expertise was invaluable in securing my admission to my dream university.&rdquo;</p>
                  </motion.div>,
                  <motion.div 
                    key={`testimonial-${i}-2`}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.1 }}
                    className="min-w-[300px] sm:min-w-[400px] bg-white p-6 rounded-lg shadow-md border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mr-4">
                        P
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Priya Patel</h4>
                        <p className="text-sm text-gray-500">University of Melbourne, Australia</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;The scholarship guidance I received helped me secure a 50% tuition waiver. I couldn&apos;t have done it without Unnadhi&apos;s support.&rdquo;</p>
                  </motion.div>,
                  <motion.div 
                    key={`testimonial-${i}-3`}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.2 }}
                    className="min-w-[300px] sm:min-w-[400px] bg-white p-6 rounded-lg shadow-md border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mr-4">
                        A
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Amit Kumar</h4>
                        <p className="text-sm text-gray-500">ETH Zurich, Switzerland</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;The research proposal assistance and interview preparation were exceptional. I got accepted with full funding!&rdquo;</p>
                  </motion.div>,
                  <motion.div 
                    key={`testimonial-${i}-4`}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                    className="min-w-[300px] sm:min-w-[400px] bg-white p-6 rounded-lg shadow-md border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mr-4">
                        S
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Sneha Reddy</h4>
                        <p className="text-sm text-gray-500">University of Manchester, UK</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;The visa application process was seamless with Unnadhi&apos;s guidance. They made sure I had all documents ready well before deadlines.&rdquo;</p>
                  </motion.div>,
                  <motion.div 
                    key={`testimonial-${i}-5`}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.4 }}
                    className="min-w-[300px] sm:min-w-[400px] bg-white p-6 rounded-lg shadow-md border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mr-4">
                        K
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Karan Malhotra</h4>
                        <p className="text-sm text-gray-500">University of British Columbia, Canada</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;The university shortlisting was spot on based on my profile. I got into my top choice with a scholarship!&rdquo;</p>
                  </motion.div>,
                  <motion.div 
                    key={`testimonial-${i}-6`}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.5 }}
                    className="min-w-[300px] sm:min-w-[400px] bg-white p-6 rounded-lg shadow-md border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mr-4">
                        M
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Meera Iyer</h4>
                        <p className="text-sm text-gray-500">Technical University of Munich, Germany</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;The German university application process is complex, but Unnadhi&apos;s expertise made it manageable. Danke!&rdquo;</p>
                  </motion.div>
                ])}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-teal-700 text-white py-16 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book a free consultation with our education experts today and take the first step towards your dream education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${phoneNumber}`} 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50 transition-colors md:py-4 md:text-lg md:px-8"
            >
              <FaPhone className="mr-2" /> Call for Free Consultation
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-teal-600 transition-colors md:py-4 md:text-lg md:px-8"
            >
              <FaWhatsapp className="mr-2 text-xl" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center">
              <div className="mr-4">
                <Image 
                  src="/Unnathi.png" 
                  alt="Unnadhi Logo" 
                  width={60} 
                  height={60} 
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Unnadhi</h2>
                <p className="text-teal-300">#dreamhighdreamunnadhi</p>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-base text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Unnadhi Educational Advisory. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-center text-base text-gray-400 md:text-right">
                Contact: <a href="mailto:unnadhi.edu@gmail.com" className="text-teal-300 hover:text-teal-200 transition-colors">unnadhi.edu@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons for Mobile - Only visible on mobile */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 md:hidden z-50">
        <a 
          href={`tel:${phoneNumber}`}
          className="bg-teal-600 text-white rounded-full p-4 shadow-lg hover:bg-teal-700 transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="Call us"
        >
          <FaPhone className="h-6 w-6" />
        </a>
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

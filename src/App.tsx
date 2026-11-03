/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Experts from './components/Experts';
import Training from './components/Training';
import HowItWorks from './components/HowItWorks';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AuthModal from './components/AuthModal';
import CourseModal from './components/CourseModal';
import Toast from './components/Toast';
import { Course } from './data/mockData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedExpertName, setSelectedExpertName] = useState<string>('General T&C Lead Specialist');
  const [authOpen, setAuthOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Scroll reveal IntersectionObserver (threshold 0.12 as specified in prompt)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 4500);
  };

  const handleOpenBooking = (expertName?: string) => {
    if (expertName) {
      setSelectedExpertName(expertName);
    } else {
      setSelectedExpertName('General T&C Lead Specialist');
    }
    setBookingOpen(true);
  };

  const handleOpenEnrollment = (course: Course) => {
    setSelectedCourse(course);
    setCourseModalOpen(true);
  };

  const handleToggleCurrency = () => {
    const next = currency === 'INR' ? 'USD' : 'INR';
    setCurrency(next);
    showToast(`Currency updated to ${next === 'INR' ? '₹ INR (Indian Rupee)' : '$ USD (US Dollar)'}`);
  };

  const handleBookingSuccess = (details: { expertName: string; date: string; time: string }) => {
    showToast(`Consultation confirmed with ${details.expertName}! Room link dispatched.`);
  };

  const handleCourseEnrollSuccess = (course: Course) => {
    showToast(`Successfully enrolled in ${course.title}! Lab credentials sent.`);
  };

  const handleAuthSuccess = (email: string) => {
    showToast(`Signed in as ${email}. Site credentials verified.`);
    setAuthOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFCFD] text-[#0A1628] flex flex-col selection:bg-[#FF6B35]/20 selection:text-[#FF6B35]">
      {/* 1. Sticky Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenAuth={() => setAuthOpen(true)}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section (DARK) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. Services Section */}
        <Services
          onOpenBooking={() => handleOpenBooking()}
          onExploreTraining={() => scrollToSection('training')}
        />

        {/* 5. Experts Section */}
        <Experts
          onOpenBooking={handleOpenBooking}
          currency={currency}
        />

        {/* 6. Training Section */}
        <Training
          onEnroll={handleOpenEnrollment}
          currency={currency}
        />

        {/* 7. How It Works Section */}
        <HowItWorks />

        {/* 8. CTA Band */}
        <CtaBand
          onOpenBooking={() => handleOpenBooking()}
          onExploreTraining={() => scrollToSection('training')}
        />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        expertName={selectedExpertName}
        currency={currency}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Additional Interactive Modals */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      <CourseModal
        course={selectedCourse}
        isOpen={courseModalOpen}
        onClose={() => setCourseModalOpen(false)}
        currency={currency}
        onSuccess={handleCourseEnrollSuccess}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onDismiss={() => setToastVisible(false)}
      />
    </div>
  );
}

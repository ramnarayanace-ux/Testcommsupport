import { useState, useEffect } from 'react';
import { Course } from '../data/mockData';

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
  onSuccess: (course: Course) => void;
}

export default function CourseModal({
  course,
  isOpen,
  onClose,
  currency,
  onSuccess,
}: CourseModalProps) {
  const [engineerName, setEngineerName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setEnrolled(false);
    }
  }, [isOpen]);

  if (!isOpen || !course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setEnrolled(true);
      onSuccess(course);
    }, 600);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      style={{
        backgroundColor: 'rgba(10, 22, 40, 0.75)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="relative w-full max-w-[540px] bg-white rounded-[20px] p-6 sm:p-9 shadow-2xl border border-[#E6EAF2] animate-modalIn my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-[10px] bg-[#F5F7FA] hover:bg-[#E6EAF2] text-[#5B6B85] hover:text-[#0A1628] flex items-center justify-center transition-colors"
        >
          <svg
            className="w-4.5 h-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!enrolled ? (
          <div>
            <div className="mb-6 pr-8">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFF1EB] text-[#FF6B35] text-[11px] font-bold tracking-wider uppercase font-display mb-2">
                Course Enrollment · {course.level}
              </span>
              <h3 className="text-[22px] font-bold font-display text-[#0A1628] leading-snug">
                {course.title}
              </h3>
              <p className="text-[13.5px] text-[#5B6B85] mt-1.5 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Course Details Box */}
            <div className="p-3.5 bg-[#F5F7FA] rounded-[12px] border border-[#E6EAF2] space-y-2 mb-5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#8B9AB3]">Duration & Format:</span>
                <span className="font-semibold text-[#0A1628]">{course.duration} ({course.mode})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B9AB3]">Lab Environment:</span>
                <span className="font-semibold text-[#0A1628]">{course.labAccess}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B9AB3]">Tuition (One-time):</span>
                <span className="font-bold text-[#FF6B35] font-display text-sm">
                  {currency === 'INR' ? `₹${course.priceINR.toLocaleString()}` : `$${course.priceUSD}`}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#0A1628] mb-1">
                  Engineer Name *
                </label>
                <input
                  type="text"
                  required
                  value={engineerName}
                  onChange={(e) => setEngineerName(e.target.value)}
                  placeholder="e.g. Priya Nair"
                  className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] input-focus-glow"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A1628] mb-1">
                  Email for LMS Access & Simulator Key *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="priya.nair@substation.com"
                  className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] input-focus-glow"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A1628] mb-1">
                  Company / EPC Contractor Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. L&T Power / Alstom Grid"
                  className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] input-focus-glow"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 mt-2 rounded-[12px] bg-[#FF6B35] hover:bg-[#FF8552] text-white font-bold text-[14.5px] transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-sm"
              >
                {submitting ? 'Setting up Simulator Container...' : 'Confirm Enrollment & Launch Labs'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-display text-[#0A1628] mb-2">
              Enrollment Confirmed!
            </h3>
            <p className="text-sm text-[#5B6B85] mb-6">
              Your test simulator instance for <strong className="text-[#0A1628]">{course.title}</strong> has been spun up. Credentials sent to {email}.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-[10px] bg-[#0A1628] text-white text-sm font-semibold hover:bg-[#FF6B35] transition-colors"
            >
              Open Cloud Lab Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

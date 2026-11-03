import { useState, useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  expertName?: string;
  currency: 'INR' | 'USD';
  onBookingSuccess: (bookingDetails: {
    expertName: string;
    date: string;
    time: string;
    type: string;
  }) => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  expertName = 'General T&C Lead Specialist',
  currency,
  onBookingSuccess,
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('Immediate Emergency (Within 15 mins)');
  const [sessionType, setSessionType] = useState('Video (Recommended for relay & cabinet review)');
  const [issueDescription, setIssueDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setConfirmed(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const generatedId = `TCP-${Math.floor(10000 + Math.random() * 90000)}`;
      setBookingId(generatedId);
      setSubmitting(false);
      setConfirmed(true);
      onBookingSuccess({
        expertName,
        date,
        time: timeSlot,
        type: sessionType,
      });
    }, 600);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      style={{
        backgroundColor: 'rgba(10, 22, 40, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      {/* Modal panel: white, 20px radius, 540px max-width, 40px padding, scale(.96 -> 1) on open */}
      <div
        className="relative w-full max-w-[540px] bg-white rounded-[20px] p-6 sm:p-[40px] shadow-[0_25px_60px_-15px_rgba(10,22,40,0.4)] border border-[#E6EAF2] transition-transform duration-300 transform scale-100 animate-modalIn my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button: 36px rounded square, X icon, in top-right */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-[10px] bg-[#F5F7FA] hover:bg-[#E6EAF2] text-[#5B6B85] hover:text-[#0A1628] flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
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

        {!confirmed ? (
          <div>
            {/* Title & dynamic subtitle showing selected expert name */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF1EB] text-[#FF6B35] text-[11px] font-bold tracking-wider uppercase font-display mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                On-Site Diagnostic Dispatch
              </div>
              <h3 className="text-[24px] font-bold font-display text-[#0A1628] tracking-tight leading-tight">
                Book a session
              </h3>
              <p className="text-[14px] text-[#5B6B85] mt-1">
                Consulting with <span className="text-[#FF6B35] font-semibold">{expertName}</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Arvind Sharma"
                    className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] placeholder-[#8B9AB3] transition-all input-focus-glow"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] placeholder-[#8B9AB3] transition-all input-focus-glow"
                  />
                </div>
              </div>

              {/* Email (Full width) */}
              <div>
                <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                  Corporate / Site Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@company.com"
                  className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] placeholder-[#8B9AB3] transition-all input-focus-glow"
                />
              </div>

              {/* Row 2: Date + Time Slot dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                    Session Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] transition-all input-focus-glow font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                    Time Slot *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[13px] text-[#0A1628] transition-all input-focus-glow"
                  >
                    <option value="Immediate Emergency (Within 15 mins)">
                      ⚡ Immediate (within 15 mins)
                    </option>
                    <option value="Today 11:30 AM - 12:15 PM">Today 11:30 AM - 12:15 PM</option>
                    <option value="Today 03:00 PM - 03:45 PM">Today 03:00 PM - 03:45 PM</option>
                    <option value="Today 05:30 PM - 06:15 PM">Today 05:30 PM - 06:15 PM</option>
                    <option value="Tomorrow 10:00 AM - 10:45 AM">Tomorrow 10:00 AM - 10:45 AM</option>
                  </select>
                </div>
              </div>

              {/* Session Type Dropdown (Video / Voice / Chat) */}
              <div>
                <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                  Session Type
                </label>
                <select
                  value={sessionType}
                  onChange={(e) => setSessionType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[13.5px] text-[#0A1628] transition-all input-focus-glow"
                >
                  <option value="Video (Recommended for relay & cabinet review)">
                    Video Call (Screen sharing + front/back camera for wiring)
                  </option>
                  <option value="Voice Call (Low site cellular bandwidth)">
                    Voice Hotline (Direct phone dial-in with SMS file bridge)
                  </option>
                  <option value="Live Chat & Schematic Markup">
                    Live Chat & Instant Schematic PDF Annotations
                  </option>
                </select>
              </div>

              {/* Textarea: Describe the issue */}
              <div>
                <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                  Describe the Issue / Alarm Code *
                </label>
                <textarea
                  required
                  rows={3}
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  placeholder="e.g. Siemens 7SJ82 relay tripped on 51N earth fault during 33kV incomer energization. Trip log indicates 480A residual current..."
                  className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[13.5px] text-[#0A1628] placeholder-[#8B9AB3] transition-all input-focus-glow resize-none"
                />
              </div>

              {/* Rate & Fee Notice */}
              <div className="flex items-center justify-between p-3 rounded-[10px] bg-[#F5F7FA] border border-[#E6EAF2] text-xs">
                <span className="text-[#5B6B85]">Standard 45-min Diagnostic Session</span>
                <span className="font-bold text-[#0A1628] font-display text-sm">
                  {currency === 'INR' ? '₹2,500' : '$140'}
                </span>
              </div>

              {/* Full-width accent submit button "Confirm & pay" */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-[12px] bg-[#FF6B35] hover:bg-[#FF8552] text-white font-bold text-[15px] shadow-[0_4px_16px_rgba(255,107,53,0.3)] transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 cursor-pointer"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Locking Expert Slot...
                  </span>
                ) : (
                  <>
                    <span>Confirm & pay</span>
                    <svg
                      className="w-4.5 h-4.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 border-2 border-emerald-200 shadow-sm">
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

            <h3 className="text-[22px] font-bold font-display text-[#0A1628] mb-1">
              Consultation Confirmed!
            </h3>
            <p className="text-[14px] text-[#5B6B85] mb-6">
              A secure diagnostic bridge has been provisioned and SMS alert dispatched to your team.
            </p>

            {/* Receipt Box */}
            <div className="bg-[#F5F7FA] border border-[#E6EAF2] rounded-[14px] p-4 text-left space-y-2 mb-6 text-xs">
              <div className="flex justify-between pb-2 border-b border-[#E6EAF2]">
                <span className="text-[#8B9AB3]">Booking ID:</span>
                <span className="font-bold text-[#0A1628] font-mono">{bookingId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B9AB3]">Lead Specialist:</span>
                <span className="font-semibold text-[#0A1628]">{expertName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B9AB3]">Date & Time:</span>
                <span className="font-semibold text-[#0A1628]">
                  {date} ({timeSlot})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B9AB3]">Channel:</span>
                <span className="font-semibold text-[#0A1628]">{sessionType}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(
                    `https://meet.testcommpro.com/session/${bookingId}`
                  );
                  alert('Session link copied to clipboard!');
                }}
                className="w-full py-3 rounded-[10px] bg-[#0A1628] hover:bg-[#111F38] text-white text-[13.5px] font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#FF8552]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy Room Link for Job Site
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-[10px] border border-[#E6EAF2] hover:bg-[#F5F7FA] text-[#5B6B85] text-[13.5px] font-medium transition-colors"
              >
                Close & Return to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

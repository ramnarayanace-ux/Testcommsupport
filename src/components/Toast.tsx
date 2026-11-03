interface ToastProps {
  message: string;
  isVisible: boolean;
  onDismiss: () => void;
}

export default function Toast({ message, isVisible, onDismiss }: ToastProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4.5 py-3 rounded-[12px] bg-[#0A1628] text-white shadow-2xl border border-white/15 animate-slideUp">
      <div className="w-6 h-6 rounded-full bg-[#FF6B35] flex items-center justify-center shrink-0">
        <svg
          className="w-3.5 h-3.5 text-white"
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

      <span className="text-xs sm:text-sm font-medium">{message}</span>

      <button
        onClick={onDismiss}
        className="ml-2 text-white/60 hover:text-white p-1 rounded transition-colors"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

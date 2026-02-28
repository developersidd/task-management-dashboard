import { Square } from "lucide-react";

const TimeTracker = () => {
  return (
    <div className="lg:col-span-2 lg:row-start-4 lg:row-end-6">
      <div className="bg-donezo-primary rounded-3xl p-6 shadow-sm text-white relative overflow-hidden h-full">
        {/* Decorative background waves */}
        <div className="absolute inset-0 opacity-20">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
              fill="#4FA892"
            />
            <path
              d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z"
              fill="#12372A"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <h3 className="font-medium text-white/90 mb-6">Time Tracker</h3>
          <div className="text-4xl font-bold tracking-wider mb-8 text-center">
            01:24:08
          </div>
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 rounded-full bg-white text-donezo-primary flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
              <div className="w-3 h-4 border-l-4 border-r-4 border-current"></div>
            </button>
            <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg">
              <Square size={18} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;

import { ArrowUpRight } from 'lucide-react'

const DashboradStats = () => {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {/* Total Projects */}
        <div className="bg-donezo-primary text-white rounded-3xl p-6 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-medium text-white/90">Total Projects</h3>
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="text-5xl font-bold mb-4">24</div>
          <div className="flex items-center gap-2 text-xs text-white/80">
            <span className="bg-white/20 px-1.5 py-0.5 rounded flex items-center gap-1">
              <ArrowUpRight size={10} /> 5
            </span>
            <h4 className="text-sm">Increased from last month</h4>
          </div>
        </div>

        {/* Ended Projects */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-donezo-border">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-medium text-donezo-text">Ended Projects</h3>
            <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors border border-donezo-border">
              <ArrowUpRight size={16} className="text-donezo-text" />
            </button>
          </div>
          <div className="text-5xl font-bold text-donezo-text mb-4">10</div>
          <div className="flex items-center gap-2 text-xs text-donezo-text-muted">
            <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded flex items-center gap-1">
              <ArrowUpRight size={10} /> 6
            </span>
            <h4 className="text-sm text-donezo-primary">Increased from last month</h4>
          </div>
        </div>

        {/* Running Projects */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-donezo-border">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-medium text-donezo-text">Running Projects</h3>
            <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors border border-donezo-border">
              <ArrowUpRight size={16} className="text-donezo-text" />
            </button>
          </div>
          <div className="text-5xl font-bold text-donezo-text mb-4">12</div>
          <div className="flex items-center gap-2 text-xs text-donezo-text-muted">
            <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded flex items-center gap-1">
              <ArrowUpRight size={10} /> 2
            </span>
            <h4 className="text-sm text-donezo-primary">Increased from last month</h4>
          </div>
        </div>

        {/* Pending Project */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-donezo-border">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-medium text-donezo-text">Pending Project</h3>
            <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors border border-donezo-border">
              <ArrowUpRight size={16} className="text-donezo-text" />
            </button>
          </div>
          <h3 className="text-5xl font-bold text-donezo-text mb-4">2</h3>
          <h4 className="text-sm text-donezo-primary">
            On Discuss
          </h4>
        </div>
      </div>
  )
}

export default DashboradStats
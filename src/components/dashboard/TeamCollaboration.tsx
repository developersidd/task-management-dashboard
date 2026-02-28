import { Plus } from "lucide-react";

const TeamCollaboration = () => {
  return (
    <div className="lg:col-span-3 lg:row-start-3 lg:row-end-6 ">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-donezo-border h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-donezo-text">Team Collaboration</h3>
          <button className="flex items-center gap-1 text-xs font-medium text-donezo-text border border-donezo-border px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors">
            <Plus size={14} /> Add Member
          </button>
        </div>

        <div className="space-y-4">
          {/* Member 1 */}
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden relative bg-pink-100">
                <img
                  src="https://picsum.photos/101/101"
                  alt="Alexandra"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-donezo-text">
                  Alexandra Deff
                </h4>
                <p className="text-xs text-donezo-text-muted">
                  Working on{" "}
                  <span className="font-medium text-donezo-text">
                    Github Project Repository
                  </span>
                </p>
              </div>
            </div>
            <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
              Completed
            </span>
          </div>

          {/* Member 2 */}
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden relative bg-blue-100">
                <img
                  src="https://picsum.photos/102/102"
                  alt="Edwin"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-donezo-text">
                  Edwin Adenike
                </h4>
                <p className="text-xs text-donezo-text-muted">
                  Working on{" "}
                  <span className="font-medium text-donezo-text">
                    Integrate User Authentication System
                  </span>
                </p>
              </div>
            </div>
            <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-600 border border-yellow-100">
              In Progress
            </span>
          </div>

          {/* Member 3 */}
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden relative bg-purple-100">
                <img
                  src="https://picsum.photos/103/103"
                  alt="Isaac"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-donezo-text">
                  Isaac Oluwatemilorun
                </h4>
                <p className="text-xs text-donezo-text-muted">
                  Working on{" "}
                  <span className="font-medium text-donezo-text">
                    Develop Search and Filter Functionality
                  </span>
                </p>
              </div>
            </div>
            <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
              Pending
            </span>
          </div>

          {/* Member 4 */}
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden relative bg-orange-100">
                <img
                  src="https://picsum.photos/104/104"
                  alt="David"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-donezo-text">
                  David Oshodi
                </h4>
                <p className="text-xs text-donezo-text-muted">
                  Working on{" "}
                  <span className="font-medium text-donezo-text">
                    Responsive Layout for Homepage
                  </span>
                </p>
              </div>
            </div>
            <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-600 border border-yellow-100">
              In Progress
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCollaboration;

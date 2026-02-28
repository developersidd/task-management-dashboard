import { Plus } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import type { ProductType } from "../../types";

const ProjectList = () => {
  const { data, loading, error } = useFetch<ProductType[]>("/products");

  return (
    <div className="lg:col-span-2 lg:row-start-1 lg:row-end-4  ">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-donezo-border h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-donezo-text">Project</h3>
          <button className="flex items-center gap-1 text-xs font-medium text-donezo-text border border-donezo-border px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors">
            <Plus size={14} /> New
          </button>
        </div>

        <div className="space-y-5 overflow-y-auto h-[90%] ">
          {/* Project 1 */}
          {
            loading ? (
              <p className="text-sm text-donezo-text-muted">Loading...</p>
            ) : error ? (
              <p className="text-sm text-red-500">Error: {error}</p>
            ) : (
              data?.map((project) => (
                <div key={project.id} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <div className="w-5 h-5 border-2 border-current rounded-sm rotate-45"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-donezo-text">
                      {project.name}
                    </h4>
                    <p className="text-[11px] text-donezo-text-muted mt-0.5">
                      Price: ${project.price} - Category: {project.category}
                    </p>
                  </div>
                </div>
              ))
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

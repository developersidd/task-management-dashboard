import useFetch from "../../hooks/useFetch";
import type { AnalyticsType } from "../../types";
import ProjectAnalyticsBarChart from "../../ui/charts/ProjectAnalyticsBarChart";

const ProjectAnalytics = () => {
  const { data, loading, error } = useFetch<AnalyticsType>("/analytics");

  return (
    <div className="col-span-full 6 lg:col-span-4 row-start-1 row-end-6 lg:row-start-1 lg:row-end-3 h-full">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-donezo-border h-full">
        <ProjectAnalyticsBarChart data={data} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default ProjectAnalytics;

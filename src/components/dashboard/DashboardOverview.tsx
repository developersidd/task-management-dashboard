import useFetch from "../../hooks/useFetch";
import type { OverviewType } from "../../types";
import DashboardOverviewPieChart from "../../ui/charts/DashboardOverviewPieChart";

const DashboardOverview = () => {
  const { data } = useFetch<OverviewType>("/overview");
  const chartData = [
    { name: "Revenue", value: data?.revenue || 0, color: "#1B4D3E" },
    { name: "Growth", value: data?.growth as number + 5000, color: "#25463b" },
    { name: "Active Users", value: data?.activeUsers || 0, color: "#4FA892" },
    {
      name: "Total Users",
      value: data?.totalUsers || 0,
      color: "url(#pieStripes)",
    },
  ];

  return (
    <div className="lg:col-span-3 lg:row-start-3 lg:row-end-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-donezo-border h-full">
        <h3 className="font-semibold text-donezo-text mb-6">
          Dashboard Overview
        </h3>

        <DashboardOverviewPieChart data={chartData} />

        <div className="flex justify-center gap-4 text-[10px] font-medium text-donezo-text-muted">
          <div className="flex items-center gap-1.5">
            <div className="size-3.5 rounded-full bg-donezo-primary"></div>
            <h4 className="text-xs">Revenue</h4>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3.5 rounded-full bg-donezo-accent"></div>
            <h4 className="text-xs">Growth </h4>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3.5 rounded-full bg-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#000_2px,#000_3px)]"></div>
            </div>
            <h4 className="text-xs">Total Users</h4>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3.5 rounded-full bg-[#25463b]"></div>
            <h4 className="text-xs">Active Users</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

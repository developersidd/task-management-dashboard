import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import type { AnalyticsType } from "../../types";

const COLORS = {
  primary: "#1B4D3E",
  accent: "#4FA892",
  hover: "#12372A",
  pending: "#F3F4F6",
};

type ProjectAnalyticsBarChartProps = {
  data: AnalyticsType[] | null;
  loading: boolean;
  error: string | null;
};

function ProjectAnalyticsBarChart({
  data,
}: ProjectAnalyticsBarChartProps) {

    const chartData = data?.map((item) => ({
        name: new Date(item.date).toLocaleDateString("en-US", { weekday: "short" }),
        value: item.conversions,
        type: item.conversions > 30 ? "accent" : item.conversions > 20 ? "primary" : "pending",
      })) || [];
    


  return (
    <div className="h-full w-full">
      <h3 className="font-semibold text-donezo-text">Project Analytics</h3>
      <ResponsiveContainer
        className="-mt-6 outline-0"
        width="100%"
        height="100%"
      >
        <BarChart
          style={{ outline: "none" }}
          className="outline-0"
          data={chartData}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <pattern
              id="barStripes"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="4"
                stroke="#d1d5db"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 500 }}
            dy={10}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white border border-donezo-border shadow-sm px-2 py-1 rounded-full text-[10px] font-bold">
                    {payload[0].value}%
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            style={{ outline: "none" }}
            className="outline-0"
            dataKey="value"
            radius={[50, 50, 50, 50]}
            barSize={60}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.type === "pending"
                    ? "url(#barStripes)"
                    : COLORS[entry.type as keyof typeof COLORS]
                }
                className={`${entry.type === "pending" ? "opacity-40" : ""}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default ProjectAnalyticsBarChart;

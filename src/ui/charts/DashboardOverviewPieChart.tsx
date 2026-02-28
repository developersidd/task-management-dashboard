import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type PieDataType = {
  name: string;
  value: number;
  color: string;
  label?: string;
};

function DashboardOverviewPieChart({ data }: { data: PieDataType[] }) {
  return (
    <div className="relative w-full h-[70%] mb-6">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <defs>
            <pattern
              id="pieStripes"
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
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="z-[99999] bg-white border border-donezo-border shadow-sm px-3 py-1.5 rounded-xl text-[10px] font-bold">
                    <span className="text-donezo-text-muted mr-1">
                      {payload[0].name}:
                    </span>
                    <span className="text-donezo-text">
                      {payload[0].value}%
                    </span>
                  </div>
                );
              }
              return null;
            }}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={110}
            paddingAngle={0}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            stroke="none"
            style={{ outline: "none" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke="none"
                style={{ outline: "none" }}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-3xl font-bold text-donezo-text"> 41%</span>
        <span className="text-[10px] text-donezo-text-muted">
          Project Ended
        </span>
      </div>
    </div>
  );
}

export default DashboardOverviewPieChart;

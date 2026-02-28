import { Plus } from "lucide-react";
import DashboradStats from "../components/dashboard/DashboardStats";
import ProjectAnalytics from "../components/dashboard/ProjectAnalytics";
import ProjectList from "../components/dashboard/ProjectList";
import ProjectProgress from "../components/dashboard/DashboardOverview";
import Reminder from "../components/dashboard/Reminder";
import TeamCollaboration from "../components/dashboard/TeamCollaboration";
import TimeTracker from "../components/dashboard/TimeTracker";
import DashboardLayout from "../components/layout/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 font-inter">
        <div>
          <h1 className="text-3xl font-bold text-donezo-text mb-2">
            Dashboard
          </h1>
          <p className="text-donezo-text-muted text-sm">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-linear-to-t from-donezo-primary to-donezo-primary-dark hover:bg-donezo-primary-hover text-white px-4 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
            <Plus size={18} />
            Add Project
          </button>
          <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-donezo-text border border-donezo-border px-4 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
            Import Data
          </button>
        </div>
      </div>
      {/* Stats Grid */}
      <DashboradStats />
      <div className="grid grid-cols-1 lg:grid-cols-8 lg:grid-rows-5 gap-6 h-[86vh]">
        {/* Project Analytics */}
        <ProjectAnalytics />
        {/* Reminders */}
        <Reminder />
        {/* Project List */}
        <ProjectList />
        {/* Team Collaboration */}
        <TeamCollaboration />
        {/* Project Progress */}
        <ProjectProgress />
        {/* Time Tracker */}
        <TimeTracker />
      </div>
    </DashboardLayout>
  );
}
export default Dashboard;

import { Bell, Mail, Menu, Search } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="w-full h-20 bg-donezo-bg border-b border-donezo-border/50 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-donezo-text-muted hover:text-donezo-text rounded-lg hover:bg-black/5"
        >
          <Menu size={24} />
        </button>

        <div className="relative w-full max-w-md hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-donezo-text-muted" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-12 py-2.5 bg-white border-none rounded-full text-sm focus:ring-2 focus:ring-donezo-primary outline-none shadow-sm"
            placeholder="Search task"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <span className="text-xs font-medium text-donezo-text-muted bg-donezo-bg px-1.5 py-0.5 rounded border border-donezo-border">
              ⌘ F
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="p-2.5 text-donezo-text-muted hover:text-donezo-primary bg-white rounded-full transition-colors relative">
            <Mail size={20} />
          </button>
          <button className="p-2.5 text-donezo-text-muted hover:text-donezo-primary bg-white rounded-full transition-colors relative">
            <Bell size={20} />
          </button>
        </div>

        <div className="h-8 w-px bg-donezo-border hidden sm:block"></div>

        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="relative size-11 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <img
              src="https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg?semt=ais_user_personalization&w=740&q=80"
              alt="Profile"
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-donezo-text">
              Totok Michael
            </p>
            <p className="text-xs text-donezo-text-muted">
              tmichael20@mail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

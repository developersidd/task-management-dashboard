import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  BarChart2, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut,
  Target,
  X,
  
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = useLocation().pathname;

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Tasks', icon: CheckSquare, href: '/tasks', badge: '12+' },
    { name: 'Calendar', icon: Calendar, href: '/calendar' },
    { name: 'Analytics', icon: BarChart2, href: '/analytics' },
    { name: 'Team', icon: Users, href: '/team' },
  ];

  const generalItems = [
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Help', icon: HelpCircle, href: '/help' },
    { name: 'Logout', icon: LogOut, href: '/login' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50  w-72 bg-donezo-surface border-r border-donezo-border flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-donezo-primary">
              <Target size={28} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-donezo-text">Donezo</span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-donezo-text-muted hover:text-donezo-text">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-8">
          {/* Menu Section */}
          <div>
            <h3 className="px-2 text-xs font-semibold text-donezo-text-muted uppercase tracking-wider mb-3">
              Menu
            </h3>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center justify-between px-2 py-2.5 rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-donezo-bg text-donezo-primary font-medium' 
                        : 'text-donezo-text-muted hover:bg-donezo-bg hover:text-donezo-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon fill={isActive ? '#1b4d3e ' : "none"} size={20} className={isActive ? 'text-donezo-primary' : ''} />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-donezo-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* General Section */}
          <div>
            <h3 className="px-2 text-xs font-semibold text-donezo-text-muted uppercase tracking-wider mb-3">
              General
            </h3>
            <nav className="space-y-1">
              {generalItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-2 py-2.5 rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-donezo-bg text-donezo-primary font-medium' 
                        : 'text-donezo-text-muted hover:bg-donezo-bg hover:text-donezo-primary'
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile App Download */}
        <div className="p-4 mt-auto">
          <div className="bg-donezo-primary rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center mb-3">
                <Target size={16} className="text-white" />
              </div>
              <h4 className="font-semibold mb-1">Download our<br/>Mobile App</h4>
              <p className="text-white/70 text-xs mb-4">Get easy in another way</p>
              <button className="w-full bg-white/20 hover:bg-white/30 transition-colors text-white text-sm font-medium py-2 rounded-lg">
                Download
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

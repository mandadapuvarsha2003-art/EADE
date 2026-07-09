import {
  LayoutDashboard,
  FileText,
  Bot,
  Brain,
  ShieldAlert,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Documents", icon: FileText },
  { name: "AI Assistant", icon: Bot },
  { name: "Decision Center", icon: Brain },
  { name: "Risk Analysis", icon: ShieldAlert },
  { name: "Reports", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">EADE</h1>
        <p className="text-sm text-slate-400">
          Enterprise AI Decision Engine
        </p>
      </div>

      <nav className="flex-1 mt-6">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className="w-full flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
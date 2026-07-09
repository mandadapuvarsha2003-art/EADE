import { Bell, Search, UserCircle2 } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8">

      <div className="relative w-96">

        <Search
          className="absolute left-3 top-3 text-gray-500"
          size={20}
        />

        <input
          type="text"
          placeholder="Search enterprise knowledge..."
          className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell size={22} />

        <UserCircle2 size={34} />

      </div>

    </header>
  );
}
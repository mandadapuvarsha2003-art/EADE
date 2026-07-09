import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  GitBranch,
  TriangleAlert,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Users,
  CircleCheck,
  Clock3,
  ArrowUpRight,
  MoreHorizontal,
  Plus,
  TrendingUp,
} from "lucide-react";

import useDashboardStyles from "./useDashboardStyles";

interface MenuItem {
  name: string;
  icon: LucideIcon;
}

interface StatItem {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: string;
  success?: boolean;
}

interface ActivityItem {
  title: string;
  time: string;
  icon: LucideIcon;
  backgroundColor: string;
  color: string;
}

type TaskPriority = "high" | "medium" | "low";

interface TaskItem {
  title: string;
  time: string;
  priority: TaskPriority;
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Documents", icon: FileText },
  { name: "AI Chat", icon: MessageSquare },
  { name: "Decision", icon: GitBranch },
  { name: "Risks", icon: TriangleAlert },
  { name: "Reports", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

const stats: StatItem[] = [
  {
    title: "Total Documents",
    value: "248",
    description: "+12 this week",
    icon: FileText,
    color: "linear-gradient(135deg, #3b82f6, #4f46e5)",
    success: true,
  },
  {
    title: "Active Decisions",
    value: "34",
    description: "8 pending review",
    icon: GitBranch,
    color: "#10ad83",
  },
  {
    title: "Risk Items",
    value: "17",
    description: "-3 from last month",
    icon: TriangleAlert,
    color: "#f5860b",
    success: true,
  },
  {
    title: "Team Members",
    value: "24",
    description: "3 online now",
    icon: Users,
    color: "#0ea5b5",
  },
];

const activities: ActivityItem[] = [
  {
    title: "Q4 Strategy Document updated",
    time: "2 hours ago",
    icon: FileText,
    backgroundColor: "#eff6ff",
    color: "#2563eb",
  },
  {
    title: "Budget allocation approved",
    time: "4 hours ago",
    icon: CircleCheck,
    backgroundColor: "#ecfdf5",
    color: "#10a97b",
  },
  {
    title: "New risk identified: Supply chain",
    time: "Yesterday",
    icon: TriangleAlert,
    backgroundColor: "#fffbeb",
    color: "#e8790c",
  },
  {
    title: "Monthly report generated",
    time: "2 days ago",
    icon: BarChart3,
    backgroundColor: "#faf5ff",
    color: "#9333ea",
  },
];

const tasks: TaskItem[] = [
  {
    title: "Review vendor contracts",
    time: "Today",
    priority: "high",
  },
  {
    title: "Update risk assessment matrix",
    time: "Tomorrow",
    priority: "medium",
  },
  {
    title: "Prepare board presentation",
    time: "This week",
    priority: "low",
  },
];

const priorityStyles: Record<TaskPriority, CSSProperties> = {
  high: {
    backgroundColor: "#fee2e2",
    color: "#dc2626",
  },

  medium: {
    backgroundColor: "#fef3c7",
    color: "#d97706",
  },

  low: {
    backgroundColor: "#f1f5f9",
    color: "#475569",
  },
};

const Dashboard = () => {
  const styles = useDashboardStyles();
  const navigate = useNavigate();

  return (
    <div style={styles.dashboardLayout}>
      <aside style={styles.sidebar}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>
            <TrendingUp size={24} />
          </div>

          <h2 style={styles.logoTitle}>NexusAI</h2>
        </div>

        <nav style={styles.sidebarMenu}>
  {menuItems.map((item) => {
    const Icon = item.icon;

    return (
      <button
        key={item.name}
        type="button"
        onClick={() => {
          switch (item.name) {
            case "Dashboard":
              navigate("/");
              break;

            case "Documents":
              navigate("/documents");
              break;

            case "AI Chat":
              navigate("/ai-chat");
              break;

            case "Decision":
              navigate("/decision");
              break;

            case "Risks":
              navigate("/risks");
              break;

            case "Reports":
              navigate("/reports");
              break;

            case "Settings":
              navigate("/settings");
              break;

            default:
              break;
          }
        }}
        style={{
          ...styles.menuItem,
          ...(item.name === "Dashboard"
            ? styles.activeMenuItem
            : {}),
        }}
      >
        <Icon size={22} />
        <span>{item.name}</span>
      </button>
    );
  })}
</nav>

        <div style={styles.sidebarProfile}>
          <div
            style={{
              ...styles.profileAvatar,
              ...styles.orangeAvatar,
            }}
          >
            JD
          </div>

          <div>
            <h4 style={styles.profileName}>John Doe</h4>

            <p style={styles.profileEmail}>john@company.com</p>
          </div>
        </div>
      </aside>

      <main style={styles.mainArea}>
        <header style={styles.topHeader}>
          <div style={styles.searchContainer}>
            <Search size={20} />

            <input
              type="text"
              placeholder="Search anything..."
              style={styles.searchInput}
            />
          </div>

          <div style={styles.headerActions}>
            <button type="button" style={styles.notificationButton}>
              <Bell size={23} />

              <span style={styles.notificationDot} />
            </button>

            <div
              style={{
                ...styles.profileAvatar,
                ...styles.headerAvatar,
              }}
            >
              JD
            </div>

            <ChevronDown size={18} />
          </div>
        </header>

        <div style={styles.dashboardContent}>
          <div style={styles.dashboardHeading}>
            <h1 style={styles.headingTitle}>Dashboard</h1>

            <p style={styles.headingDescription}>
              Welcome back, John. Here's what's happening.
            </p>
          </div>

          <section style={styles.statsGrid}>
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article key={stat.title} style={styles.statCard}>
                  <div>
                    <p style={styles.statTitle}>{stat.title}</p>

                    <h2 style={styles.statValue}>{stat.value}</h2>

                    <p
                      style={{
                        ...styles.statDescription,
                        ...(stat.success ? styles.successText : {}),
                      }}
                    >
                      {stat.description}
                    </p>
                  </div>

                  <div
                    style={{
                      ...styles.statIcon,
                      background: stat.color,
                    }}
                  >
                    <Icon size={25} />
                  </div>
                </article>
              );
            })}
          </section>

          <section style={styles.dashboardGrid}>
            <article style={styles.dashboardCard}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Recent Activity</h3>

                <button type="button" style={styles.viewAllButton}>
                  View all

                  <ArrowUpRight size={17} />
                </button>
              </div>

              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div key={activity.title} style={styles.activityItem}>
                    <div
                      style={{
                        ...styles.activityIcon,
                        backgroundColor: activity.backgroundColor,
                        color: activity.color,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 style={styles.activityTitle}>{activity.title}</h4>

                      <p style={styles.activityTime}>{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </article>

            <article style={styles.dashboardCard}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Pending Tasks</h3>

                <button type="button" style={styles.moreButton}>
                  <MoreHorizontal size={22} />
                </button>
              </div>

              <div style={styles.taskList}>
                {tasks.map((task) => (
                  <div key={task.title} style={styles.taskItem}>
                    <div style={styles.taskHeading}>
                      <h4 style={styles.taskTitle}>{task.title}</h4>

                      <span
                        style={{
                          ...styles.priority,
                          ...priorityStyles[task.priority],
                        }}
                      >
                        {task.priority}
                      </span>
                    </div>

                    <div style={styles.taskTime}>
                      <Clock3 size={15} />

                      <span>{task.time}</span>
                    </div>
                  </div>
                ))}

                <button type="button" style={styles.addTaskButton}>
                  <Plus size={17} />

                  <span>Add new task</span>
                </button>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
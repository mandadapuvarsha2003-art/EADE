import type { CSSProperties } from "react";

type Styles = Record<string, CSSProperties>;

const useDashboardStyles = (): Styles => {
  return {
    dashboardLayout: {
      display: "flex",
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      fontFamily: "Inter, Arial, sans-serif",
      color: "#0f172a",
    },

    sidebar: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      width: "300px",
      minHeight: "100vh",
      backgroundColor: "#10192e",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      zIndex: 100,
    },

    logoContainer: {
      height: "88px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "0 28px",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },

    logoIcon: {
      width: "39px",
      height: "39px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "9px",
      background: "linear-gradient(135deg, #2dd4bf, #06b6d4)",
      color: "#ffffff",
    },

    logoTitle: {
      fontSize: "21px",
      fontWeight: 700,
      margin: 0,
    },

    sidebarMenu: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      padding: "18px 14px",
    },

    menuItem: {
      width: "100%",
      height: "48px",
      border: "none",
      borderRadius: "10px",
      padding: "0 16px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      backgroundColor: "transparent",
      color: "#9caeca",
      fontSize: "16px",
      fontWeight: 500,
      cursor: "pointer",
      textAlign: "left",
    },

    activeMenuItem: {
      backgroundColor: "#123d4e",
      color: "#ffffff",
      borderLeft: "2px solid #22d3ee",
    },

    sidebarProfile: {
      marginTop: "auto",
      minHeight: "90px",
      padding: "0 28px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
    },

    profileAvatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: 500,
    },

    orangeAvatar: {
      backgroundColor: "#ff9418",
    },

    profileName: {
      margin: "0 0 5px 0",
      fontSize: "15px",
      fontWeight: 600,
    },

    profileEmail: {
      margin: 0,
      color: "#8fa7c8",
      fontSize: "13px",
    },

    mainArea: {
      width: "calc(100% - 300px)",
      minHeight: "100vh",
      marginLeft: "300px",
    },

    topHeader: {
      width: "100%",
      height: "88px",
      padding: "0 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e2e8f0",
      boxSizing: "border-box",
    },

    searchContainer: {
      width: "675px",
      height: "45px",
      padding: "0 16px",
      display: "flex",
      alignItems: "center",
      gap: "13px",
      borderRadius: "11px",
      backgroundColor: "#f1f5f9",
      color: "#8fa1bc",
      boxSizing: "border-box",
    },

    searchInput: {
      width: "100%",
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      color: "#334155",
      fontSize: "16px",
    },

    headerActions: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      color: "#8ba0bd",
    },

    notificationButton: {
      position: "relative",
      padding: 0,
      display: "flex",
      alignItems: "center",
      border: "none",
      backgroundColor: "transparent",
      color: "#7185a2",
      cursor: "pointer",
    },

    notificationDot: {
      position: "absolute",
      top: "-3px",
      right: "-2px",
      width: "9px",
      height: "9px",
      border: "2px solid #ffffff",
      borderRadius: "50%",
      backgroundColor: "#ef4444",
    },

    headerAvatar: {
      backgroundColor: "#18b7b5",
    },

    dashboardContent: {
      padding: "32px 28px",
    },

    dashboardHeading: {
      marginBottom: "28px",
    },

    headingTitle: {
      margin: "0 0 7px 0",
      fontSize: "29px",
      fontWeight: 700,
      color: "#0f172a",
    },

    headingDescription: {
      margin: 0,
      color: "#64748b",
      fontSize: "18px",
    },

    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "18px",
      marginBottom: "28px",
    },

    statCard: {
      minHeight: "143px",
      padding: "25px 24px",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      border: "1px solid #dce3ec",
      borderRadius: "14px",
      backgroundColor: "#ffffff",
      boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
      boxSizing: "border-box",
    },

    statTitle: {
      margin: "0 0 10px 0",
      color: "#64748b",
      fontSize: "15px",
    },

    statValue: {
      margin: "0 0 14px 0",
      color: "#0f172a",
      fontSize: "29px",
      lineHeight: 1,
    },

    statDescription: {
      margin: 0,
      color: "#64748b",
      fontSize: "14px",
    },

    successText: {
      color: "#059669",
      fontWeight: 600,
    },

    statIcon: {
      width: "52px",
      height: "52px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "13px",
      color: "#ffffff",
      flexShrink: 0,
    },

    dashboardGrid: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 2.05fr) minmax(380px, 1fr)",
      gap: "28px",
    },

    dashboardCard: {
      minHeight: "445px",
      overflow: "hidden",
      border: "1px solid #dce3ec",
      borderRadius: "14px",
      backgroundColor: "#ffffff",
      boxShadow: "0 1px 3px rgba(15,23,42,0.05)",
    },

    cardHeader: {
      height: "68px",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #e2e8f0",
    },

    cardTitle: {
      margin: 0,
      color: "#0f172a",
      fontSize: "18px",
      fontWeight: 700,
    },

    viewAllButton: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
      border: "none",
      backgroundColor: "transparent",
      color: "#0284a8",
      fontWeight: 600,
      cursor: "pointer",
    },

    activityItem: {
      minHeight: "76px",
      padding: "13px 24px",
      display: "flex",
      alignItems: "center",
      gap: "18px",
      borderBottom: "1px solid #e8edf3",
      boxSizing: "border-box",
    },

    activityIcon: {
      width: "47px",
      height: "47px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "11px",
      flexShrink: 0,
    },

    activityTitle: {
      margin: "0 0 4px 0",
      color: "#0f172a",
      fontSize: "16px",
      fontWeight: 600,
    },

    activityTime: {
      margin: 0,
      color: "#94a3b8",
      fontSize: "14px",
    },

    moreButton: {
      padding: 0,
      border: "none",
      backgroundColor: "transparent",
      color: "#94a3b8",
      cursor: "pointer",
    },

    taskList: {
      padding: "18px",
    },

    taskItem: {
      minHeight: "82px",
      marginBottom: "14px",
      padding: "17px 14px",
      border: "1px solid #edf1f5",
      borderRadius: "11px",
      backgroundColor: "#f8fafc",
      boxSizing: "border-box",
    },

    taskHeading: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "15px",
    },

    taskTitle: {
      margin: 0,
      color: "#0f172a",
      fontSize: "15px",
      fontWeight: 600,
    },

    priority: {
      padding: "4px 10px",
      borderRadius: "15px",
      fontSize: "12px",
    },

    taskTime: {
      marginTop: "12px",
      display: "flex",
      alignItems: "center",
      gap: "7px",
      color: "#94a3b8",
      fontSize: "13px",
    },

    addTaskButton: {
      width: "100%",
      height: "44px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px",
      border: "1px dashed #cbd5e1",
      borderRadius: "9px",
      backgroundColor: "#ffffff",
      color: "#64748b",
      cursor: "pointer",
    },
  };
};

export default useDashboardStyles;
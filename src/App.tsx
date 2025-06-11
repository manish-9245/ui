import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import HiringEventsView from "@/components/hiring-events-view";
import WorkflowsView from "@/components/workflows-view";
import CertificationView from "@/components/certification-view";
import EmployeeView from "@/components/employee-view";
import AdminView from "@/components/admin-view";
import DataRefreshView from "@/components/data-refresh-view";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const location = useLocation();
  const currentView = location.pathname.substring(1) ?? "hr";

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-background">
        <Sidebar currentView={currentView} />
        <div className="flex-1 flex flex-col">
          <Header currentView={currentView} />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/hr" replace />} />
              <Route path="/leadership" element={<CertificationView />} />
              <Route path="/hr" element={<HiringEventsView />} />
              <Route path="/employee" element={<EmployeeView />} />
              <Route path="/admin" element={<AdminView />} />
              <Route path="/data-refresh" element={<DataRefreshView />} />
              <Route path="/workflows" element={<WorkflowsView />} />
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

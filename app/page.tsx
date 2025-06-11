"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import HiringEventsView from "@/components/hiring-events-view"
import WorkflowsView from "@/components/workflows-view"
import CertificationView from "@/components/certification-view"
import EmployeeView from "@/components/employee-view"
import AdminView from "@/components/admin-view"
import DataRefreshView from "@/components/data-refresh-view"
import Header from "@/components/header"

export default function Home() {
  const [currentView, setCurrentView] = useState("hr")

  const renderCurrentView = () => {
    switch (currentView) {
      case "leadership":
        return <CertificationView />
      case "hr":
        return <HiringEventsView />
      case "employee":
        return <EmployeeView />
      case "admin":
        return <AdminView />
      case "data-refresh":
        return <DataRefreshView />
      case "workflows":
        return <WorkflowsView />
      default:
        return <HiringEventsView />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="flex-1 flex flex-col">
        <Header currentView={currentView} />
        <main className="flex-1 overflow-auto">{renderCurrentView()}</main>
      </div>
    </div>
  )
}

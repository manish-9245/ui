import { Calendar, Users, Settings, RefreshCw, Workflow, Crown } from "lucide-react"
import AdminView from "./components/admin-view"
import CertificationView from "./components/certification-view"
import EmployeeView from "./components/employee-view"
import DataRefreshView from "./components/data-refresh-view"
import HiringEventsView from "./components/hiring-events-view"
import WorkflowsView from "./components/workflows-view"
import type { FC } from "react"

export interface RouteItem {
  path: string
  id: string
  label: string
  Component: FC
  icon: FC<React.SVGProps<SVGSVGElement>>
}

export const routes: RouteItem[] = [
  { path: "/hr", id: "hr", label: "HR View", Component: HiringEventsView, icon: Calendar },
  { path: "/leadership", id: "leadership", label: "Leadership View", Component: CertificationView, icon: Crown },
  { path: "/employee", id: "employee", label: "Employee View", Component: EmployeeView, icon: Users },
  { path: "/admin", id: "admin", label: "Admin View", Component: AdminView, icon: Settings },
  { path: "/data-refresh", id: "data-refresh", label: "Data Refresh", Component: DataRefreshView, icon: RefreshCw },
  { path: "/workflows", id: "workflows", label: "Workflows", Component: WorkflowsView, icon: Workflow },
]

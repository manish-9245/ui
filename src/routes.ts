import { Calendar, Users, Settings, RefreshCw, Workflow, Crown } from "lucide-react"
import { AdminPage } from "./pages/AdminPage"
import { CertificationPage } from "./pages/CertificationPage"
import { EmployeePage } from "./pages/EmployeePage"
import { DataRefreshPage } from "./pages/DataRefreshPage"
import { HiringEventsPage } from "./pages/HiringEventsPage"
import { WorkflowsPage } from "./pages/WorkflowsPage"
import type { FC } from "react"

export interface RouteItem {
  path: string
  id: string
  label: string
  Component: FC
  icon: FC<React.SVGProps<SVGSVGElement>>
}

export const routes: RouteItem[] = [
  { path: "/hr", id: "hr", label: "HR View", Component: HiringEventsPage, icon: Calendar },
  { path: "/leadership", id: "leadership", label: "Leadership View", Component: CertificationPage, icon: Crown },
  { path: "/employee", id: "employee", label: "Employee View", Component: EmployeePage, icon: Users },
  { path: "/admin", id: "admin", label: "Admin View", Component: AdminPage, icon: Settings },
  { path: "/data-refresh", id: "data-refresh", label: "Data Refresh", Component: DataRefreshPage, icon: RefreshCw },
  { path: "/workflows", id: "workflows", label: "Workflows", Component: WorkflowsPage, icon: Workflow },
]

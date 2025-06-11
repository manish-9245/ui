"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { Calendar, Users, Settings, RefreshCw, Workflow, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  currentView: string
  onViewChange: (view: string) => void
}

const navigationItems = [
  { id: "leadership", label: "Leadership View", icon: Crown },
  { id: "hr", label: "HR View", icon: Calendar },
  { id: "employee", label: "Employee View", icon: Users },
  { id: "admin", label: "Admin View", icon: Settings },
  { id: "data-refresh", label: "Data Refresh", icon: RefreshCw },
  { id: "workflows", label: "Workflows", icon: Workflow },
]

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">HC</span>
          </div>
          <span className="font-semibold text-gray-900">Hiring Connect</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={currentView === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                currentView === item.id && "bg-indigo-600 text-white hover:bg-indigo-700",
              )}
              onClick={() => onViewChange(item.id)}
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <div className="text-sm font-medium text-red-800 mb-1">Next Event</div>
          <div className="text-xs text-red-600 mb-2">Cohort Drive - 2nd July</div>
          <div className="text-xs text-red-600 mb-1">01:00 - 04:00 PM</div>
          <div className="text-xs text-red-600 mb-1">Room 01</div>
          <div className="text-xs text-blue-600">go/CohortHiring</div>
          <div className="flex items-center mt-2 space-x-1">
            <Avatar className="h-5 w-5">
              <AvatarImage src="/placeholder.svg?height=20&width=20" />
              <AvatarFallback className="text-xs">A</AvatarFallback>
            </Avatar>
            <Avatar className="h-5 w-5">
              <AvatarImage src="/placeholder.svg?height=20&width=20" />
              <AvatarFallback className="text-xs">B</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}

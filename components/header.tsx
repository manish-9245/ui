"use client"

import { useState } from "react"
import { Search, Bell, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProfileDropdown from "@/components/profile-dropdown"
import NotificationModal from "@/components/notification-modal"

interface HeaderProps {
  currentView?: string
}

export default function Header({ currentView = "hr" }: HeaderProps) {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false)

  const viewTitles: Record<string, string> = {
    leadership: "Leadership View",
    hr: "Hiring Events",
    employee: "Employee View",
    admin: "Admin View",
    "data-refresh": "Data Refresh",
    workflows: "Workflows",
  }

  return (
    <>
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-foreground">{viewTitles[currentView] || "Hiring Events"}</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={() => setIsNotificationModalOpen(true)}>
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <ProfileDropdown />
          </div>
        </div>
      </header>

      <NotificationModal isOpen={isNotificationModalOpen} onClose={() => setIsNotificationModalOpen(false)} />
    </>
  )
}

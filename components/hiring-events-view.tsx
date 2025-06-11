"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import EventCard from "@/components/event-card"
import CreateEventModal from "@/components/create-event-modal"

const mockEvents = [
  {
    id: 1,
    title: "Cohort Drive - 2nd July",
    time: "1 PM - 4 PM",
    duration: "180 Mins",
    day: "Thursday",
    panelists: 24,
    technology: "Java",
    tags: ["AWM"],
    color: "pink",
  },
  {
    id: 2,
    title: "BAU Drive - 10th July",
    time: "2 PM - 3 PM",
    duration: "60 Mins",
    day: "Wednesday",
    panelists: 10,
    technology: "Python",
    tags: ["Shoaib", "Chetan"],
    color: "teal",
  },
  {
    id: 3,
    title: "VP Drive - 15th July",
    time: "2 PM - 3 PM",
    duration: "60 Mins",
    day: "Monday",
    panelists: 20,
    technology: "UX, React",
    tags: ["Aniket", "Karthik", "Naveen"],
    color: "teal",
  },
  {
    id: 4,
    title: "Cohort Drive - 2nd August",
    time: "1 PM - 4 PM",
    duration: "180 Mins",
    day: "Thursday",
    panelists: 24,
    technology: "Java",
    tags: ["AWM"],
    color: "pink",
  },
  {
    id: 5,
    title: "VP Drive - 10th August",
    time: "2 PM - 3 PM",
    duration: "60 Mins",
    day: "Wednesday",
    panelists: 10,
    technology: "Python",
    tags: ["Shoaib", "Chetan"],
    color: "teal",
  },
]

export default function HiringEventsView() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState("Month")
  const [expandedMonths, setExpandedMonths] = useState<Record<string, boolean>>({
    JULY: true,
    AUG: true,
    SEP: false,
  })

  const toggleMonth = (month: string) => {
    setExpandedMonths((prev) => ({
      ...prev,
      [month]: !prev[month],
    }))
  }

  const groupedEvents = {
    JULY: mockEvents.filter((event) => event.title.includes("July")),
    AUG: mockEvents.filter((event) => event.title.includes("August")),
    SEP: [],
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-semibold">2025</h2>
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            This Month
          </Badge>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <Button
              variant={viewMode === "Week" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("Week")}
              className={viewMode === "Week" ? "bg-white shadow-sm" : ""}
            >
              Week
            </Button>
            <Button
              variant={viewMode === "Month" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("Month")}
              className={viewMode === "Month" ? "bg-white shadow-sm" : ""}
            >
              Month
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedEvents).map(([month, events]) => (
          <div key={month} className="space-y-4">
            <div className="flex items-center space-x-3">
              <h3 className="text-lg font-semibold">{month}</h3>
              <Badge variant="secondary">
                {events.length} Event{events.length !== 1 ? "s" : ""}
              </Badge>
              <Button variant="ghost" size="icon" onClick={() => toggleMonth(month)} className="ml-auto">
                {expandedMonths[month] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>

            {expandedMonths[month] && (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <CreateEventModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  )
}

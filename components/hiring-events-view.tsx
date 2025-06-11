"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Plus, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import EventCard from "@/components/event-card"
import CreateEventModal from "@/components/create-event-modal"
import { mockEvents } from "@/data/mock-data"

export default function HiringEventsView() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState("Month")
  const [currentMonth, setCurrentMonth] = useState("This Month")
  const [expandedMonths, setExpandedMonths] = useState<Record<string, boolean>>({
    JULY: true,
    AUG: true,
    SEP: false,
  })

  // Filter states
  const [filters, setFilters] = useState({
    technology: "All Technologies",
    eventType: "All Types",
    status: "All Status",
    dateRange: "",
  })
  const [appliedFilters, setAppliedFilters] = useState(filters)

  const toggleMonth = (month: string) => {
    setExpandedMonths((prev) => ({
      ...prev,
      [month]: !prev[month],
    }))
  }

  const applyFilters = () => {
    setAppliedFilters(filters)
    setIsFilterModalOpen(false)
  }

  const clearFilters = () => {
    const emptyFilters = {
      technology: "All Technologies",
      eventType: "All Types",
      status: "All Status",
      dateRange: "",
    }
    setFilters(emptyFilters)
    setAppliedFilters(emptyFilters)
  }

  const filterEvents = (events: typeof mockEvents) => {
    return events.filter((event) => {
      if (
        appliedFilters.technology !== "All Technologies" &&
        !event.technology.toLowerCase().includes(appliedFilters.technology.toLowerCase())
      ) {
        return false
      }
      if (
        appliedFilters.eventType !== "All Types" &&
        !event.title.toLowerCase().includes(appliedFilters.eventType.toLowerCase())
      ) {
        return false
      }
      if (appliedFilters.status !== "All Status" && event.status !== appliedFilters.status) {
        return false
      }
      return true
    })
  }

  const groupedEvents = {
    JULY: filterEvents(mockEvents.filter((event) => event.title.includes("July"))),
    AUG: filterEvents(mockEvents.filter((event) => event.title.includes("August"))),
    SEP: [],
  }

  const hasActiveFilters = Object.values(appliedFilters).some(
    (value) => value !== "All Technologies" && value !== "All Types" && value !== "All Status",
  )
  const totalFilteredEvents = Object.values(groupedEvents).flat().length

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
          <Select value={currentMonth} onValueChange={setCurrentMonth}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="Last Month">Last Month</SelectItem>
              <SelectItem value="Next Month">Next Month</SelectItem>
              <SelectItem value="All Time">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={viewMode === "Week" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("Week")}
              className={viewMode === "Week" ? "bg-background shadow-sm" : ""}
            >
              Week
            </Button>
            <Button
              variant={viewMode === "Month" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("Month")}
              className={viewMode === "Month" ? "bg-background shadow-sm" : ""}
            >
              Month
            </Button>
          </div>

          <Dialog open={isFilterModalOpen} onOpenChange={setIsFilterModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="relative">
                <Filter className="h-4 w-4 mr-2" />
                Filter
                {hasActiveFilters && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-blue-500 text-white text-xs">
                    {
                      Object.values(appliedFilters).filter(
                        (v) => v !== "All Technologies" && v !== "All Types" && v !== "All Status",
                      ).length
                    }
                  </Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Filter Events</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="technology">Technology</Label>
                  <Select
                    value={filters.technology}
                    onValueChange={(value) => setFilters((prev) => ({ ...prev, technology: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select technology" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Technologies">All Technologies</SelectItem>
                      <SelectItem value="Java">Java</SelectItem>
                      <SelectItem value="Python">Python</SelectItem>
                      <SelectItem value="React">React</SelectItem>
                      <SelectItem value="UX">UX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="eventType">Event Type</Label>
                  <Select
                    value={filters.eventType}
                    onValueChange={(value) => setFilters((prev) => ({ ...prev, eventType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Types">All Types</SelectItem>
                      <SelectItem value="Cohort">Cohort Drive</SelectItem>
                      <SelectItem value="VP">VP Drive</SelectItem>
                      <SelectItem value="BAU">BAU Drive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={filters.status}
                    onValueChange={(value) => setFilters((prev) => ({ ...prev, status: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Status">All Status</SelectItem>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button onClick={clearFilters} variant="outline" className="flex-1">
                    Clear
                  </Button>
                  <Button onClick={applyFilters} className="flex-1">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create
          </Button>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Filters applied:</span>
              <span className="text-sm text-muted-foreground">
                Showing {totalFilteredEvents} of {mockEvents.length} events
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear all
            </Button>
          </div>
        </div>
      )}

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
                {events.length > 0 ? (
                  events.map((event) => <EventCard key={event.id} event={event} />)
                ) : (
                  <div className="col-span-full text-center py-8 text-muted-foreground">
                    No events match the current filters
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <CreateEventModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  )
}

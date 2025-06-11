"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const workflowSections = [
  {
    title: "Before Event/Meeting",
    workflows: [
      {
        id: 1,
        title: "Reminder Event Email",
        description: "Event Reminder emails",
        icon: "📧",
        color: "pink",
      },
      {
        id: 2,
        title: "Cancellation Email",
        description: "Event Cancellation Email",
        icon: "📧",
        color: "pink",
      },
      {
        id: 3,
        title: "Meeting Invite Cancellation",
        description: "Unblock Calendar",
        icon: "📧",
        color: "pink",
      },
    ],
  },
  {
    title: "After Event/Meeting",
    workflows: [
      {
        id: 4,
        title: "Thank You Email",
        description: "Thank you email for all participants",
        icon: "📧",
        color: "blue",
      },
      {
        id: 5,
        title: "Wrap-Up Report",
        description: "Wrap-Up Report that summarizes the participant counts, panel counts and other details",
        icon: "📧",
        color: "blue",
      },
    ],
  },
]

export default function WorkflowsView() {
  const [activeTab, setActiveTab] = useState("Templates")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "Before Event/Meeting": true,
    "After Event/Meeting": true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="p-6">
      <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-2 mb-6">
        <span className="text-yellow-800 text-sm font-medium">Observing Anonymous tiger</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Workflows</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create
          </Button>
        </div>
      </div>

      <div className="flex space-x-8 mb-6">
        <button
          className={`pb-2 border-b-2 ${
            activeTab === "My workflow" ? "border-gray-300 text-gray-600" : "border-transparent text-gray-400"
          }`}
          onClick={() => setActiveTab("My workflow")}
        >
          My workflow
        </button>
        <button
          className={`pb-2 border-b-2 ${
            activeTab === "Templates" ? "border-blue-500 text-blue-600 font-medium" : "border-transparent text-gray-400"
          }`}
          onClick={() => setActiveTab("Templates")}
        >
          Templates
        </button>
      </div>

      <div className="space-y-6">
        {workflowSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <Button variant="ghost" size="icon" onClick={() => toggleSection(section.title)}>
                {expandedSections[section.title] ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>

            {expandedSections[section.title] && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.workflows.map((workflow) => (
                  <Card
                    key={workflow.id}
                    className={`border-l-4 ${workflow.color === "pink" ? "border-l-pink-500" : "border-l-blue-500"}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{workflow.icon}</div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{workflow.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{workflow.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`w-full ${
                          workflow.color === "pink"
                            ? "text-pink-600 border-pink-200 hover:bg-pink-50"
                            : "text-blue-600 border-blue-200 hover:bg-blue-50"
                        }`}
                      >
                        Use workflow
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button variant="outline">Show more</Button>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

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

const myWorkflows = [
  {
    id: 1,
    title: "Custom Interview Reminder",
    description: "Personalized reminder for technical interviews",
    status: "Active",
    lastUsed: "2 days ago",
    usageCount: 15,
  },
  {
    id: 2,
    title: "Follow-up Email Template",
    description: "Custom follow-up email for candidates",
    status: "Draft",
    lastUsed: "1 week ago",
    usageCount: 8,
  },
  {
    id: 3,
    title: "Panel Coordination Workflow",
    description: "Automated panel member coordination",
    status: "Active",
    lastUsed: "Yesterday",
    usageCount: 23,
  },
]

export default function WorkflowsView() {
  const [activeTab, setActiveTab] = useState("templates")
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
      <div className="bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-800 rounded-lg px-4 py-2 mb-6">
        <span className="text-yellow-800 dark:text-yellow-200 text-sm font-medium">Observing Anonymous tiger</span>
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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="my-workflow">My Workflow</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="my-workflow" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myWorkflows.map((workflow) => (
              <Card key={workflow.id} className="border-l-4 border-l-indigo-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{workflow.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{workflow.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Status:</span>
                          <Badge
                            variant={workflow.status === "Active" ? "default" : "secondary"}
                            className={
                              workflow.status === "Active"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                : ""
                            }
                          >
                            {workflow.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Last used:</span>
                          <span>{workflow.lastUsed}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Usage count:</span>
                          <span>{workflow.usageCount}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
                    <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                      Use workflow
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
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
                        <h3 className="font-semibold text-foreground mb-2">{workflow.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{workflow.description}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`w-full ${
                            workflow.color === "pink"
                              ? "text-pink-600 border-pink-200 hover:bg-pink-50 dark:text-pink-400 dark:border-pink-800 dark:hover:bg-pink-900/20"
                              : "text-blue-600 border-blue-200 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:hover:bg-blue-900/20"
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

          <div className="mt-8">
            <Button variant="outline">Show more</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

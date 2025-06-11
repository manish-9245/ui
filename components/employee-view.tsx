"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Users, CheckCircle, AlertCircle } from "lucide-react"
import { employeeAssignments, feedbackData } from "@/data/mock-data"

export default function EmployeeView() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Welcome, Priya Sharma</h2>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          Certified Interviewer
        </Badge>
      </div>

      <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="upcoming">Upcoming Interviews</TabsTrigger>
          <TabsTrigger value="feedback">Pending Feedback</TabsTrigger>
          <TabsTrigger value="certifications">My Certifications</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employeeAssignments.map((assignment) => (
              <Card key={assignment.id} className="border-l-4 border-l-indigo-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">{assignment.eventTitle}</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {assignment.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {assignment.candidates} Candidates
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Badge
                        variant="outline"
                        className={
                          assignment.status === "Confirmed"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-yellow-50 text-yellow-700 border-yellow-200"
                        }
                      >
                        {assignment.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {assignment.status === "Pending" && (
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                        Confirm
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {feedbackData.map((feedback) => (
              <Card key={feedback.id} className="border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{feedback.candidateName}</h3>
                  <p className="text-sm text-gray-500 mb-3">ID: {feedback.candidateId}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {feedback.event}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Deadline: {feedback.deadline}
                    </div>
                    <div className="flex items-center text-sm">
                      {feedback.status === "Pending" ? (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          Pending
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Completed
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    {feedback.status === "Pending" ? (
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Submit Feedback</Button>
                    ) : (
                      <Button variant="outline" className="w-full">
                        View Feedback
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certifications">
          <Card>
            <CardHeader>
              <CardTitle>My Certification Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Behavioral Interview</h3>
                      <p className="text-sm text-gray-500">Certified on May 15, 2025</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Design Interview</h3>
                      <p className="text-sm text-gray-500">Certified on June 2, 2025</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Coding Interview</h3>
                      <p className="text-sm text-gray-500">Not certified</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                    Get Certified
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-10 bg-pink-500 rounded-full mr-3"></div>
                <div>
                  <h3 className="font-medium">Cohort Drive - 2nd July</h3>
                  <p className="text-sm text-gray-500">1 PM - 4 PM • Thursday</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700">Confirmed</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-10 bg-teal-500 rounded-full mr-3"></div>
                <div>
                  <h3 className="font-medium">BAU Drive - 10th July</h3>
                  <p className="text-sm text-gray-500">2 PM - 3 PM • Wednesday</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700">Confirmed</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-10 bg-teal-500 rounded-full mr-3"></div>
                <div>
                  <h3 className="font-medium">VP Drive - 15th July</h3>
                  <p className="text-sm text-gray-500">2 PM - 3 PM • Monday</p>
                </div>
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

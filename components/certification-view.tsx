import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { X, Plus, Search, Bell, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificationData = [
  {
    type: "Behavioral",
    target: "100%",
    feb: "55%",
    mar: "60%",
    apr: "65%",
    aprColor: "text-blue-600",
  },
  {
    type: "Design",
    target: "60%",
    feb: "25%",
    mar: "30%",
    apr: "45%",
    aprColor: "text-blue-600",
  },
  {
    type: "Coding",
    target: "60%",
    feb: "20%",
    mar: "30%",
    apr: "55%",
    aprColor: "text-blue-600",
  },
]

const teamData = [
  {
    sid: "D234543",
    name: "Sunil",
    avatar: "/placeholder.svg?height=32&width=32",
    behavioral: "Yes",
    design: "Yes",
    coding: "No",
    totalParticipation: 6,
    apr25: "0",
    may15: { status: "absent", hasPlus: true },
    jun23: { status: "absent", hasUser: true },
  },
  {
    sid: "F657456",
    name: "Swathi",
    avatar: "/placeholder.svg?height=32&width=32",
    behavioral: "No",
    design: "Yes",
    coding: "No",
    totalParticipation: 4,
    apr25: "0",
    may15: { status: "absent", hasUser: true },
    jun23: { status: "absent", hasUser: true },
  },
  {
    sid: "E876598",
    name: "Ranjan",
    avatar: "/placeholder.svg?height=32&width=32",
    behavioral: "No",
    design: "Yes",
    coding: "Yes",
    totalParticipation: 0,
    apr25: "0",
    may15: { status: "absent", hasPlus: true },
    jun23: { status: "absent", hasPlus: true },
  },
]

export default function CertificationView() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Hiring Events</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            <Badge className="bg-blue-600 text-white">Cohort Certification Summary</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Certification Type</th>
                  <th className="text-left py-3 px-4 font-medium">Target</th>
                  <th className="text-left py-3 px-4 font-medium">10th Feb</th>
                  <th className="text-left py-3 px-4 font-medium">10th Mar</th>
                  <th className="text-left py-3 px-4 font-medium">10th Apr</th>
                </tr>
              </thead>
              <tbody>
                {certificationData.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{row.type}</td>
                    <td className="py-3 px-4">{row.target}</td>
                    <td className="py-3 px-4">{row.feb}</td>
                    <td className="py-3 px-4">{row.mar}</td>
                    <td className={`py-3 px-4 ${row.aprColor}`}>{row.apr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Badge className="bg-blue-600 text-white">My Team Summary</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">SID</th>
                  <th className="text-left py-3 px-4 font-medium">NAME</th>
                  <th className="text-left py-3 px-4 font-medium">Behavioral</th>
                  <th className="text-left py-3 px-4 font-medium">Design</th>
                  <th className="text-left py-3 px-4 font-medium">Coding</th>
                  <th className="text-left py-3 px-4 font-medium">Total Participation</th>
                  <th className="text-left py-3 px-4 font-medium">25th Apr</th>
                  <th className="text-left py-3 px-4 font-medium">15th May</th>
                  <th className="text-left py-3 px-4 font-medium">23rd June</th>
                </tr>
              </thead>
              <tbody>
                {teamData.map((member, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 text-sm">{member.sid}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{member.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{member.behavioral}</td>
                    <td className="py-3 px-4 text-sm">{member.design}</td>
                    <td className="py-3 px-4 text-sm">{member.coding}</td>
                    <td className="py-3 px-4 text-sm">{member.totalParticipation}</td>
                    <td className="py-3 px-4 text-sm">{member.apr25}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1">
                        <X className="h-4 w-4 text-red-500" />
                        {member.may15.hasPlus && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <Plus className="h-2 w-2 text-white" />
                          </div>
                        )}
                        {member.may15.hasUser && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">👤</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1">
                        <X className="h-4 w-4 text-red-500" />
                        {member.jun23.hasUser && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">👤</span>
                          </div>
                        )}
                        {member.jun23.hasPlus && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <Plus className="h-2 w-2 text-white" />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { X, Plus } from "lucide-react"
import { certificationData, teamData } from "@/data/mock-data"

export default function CertificationView() {
  return (
    <div className="p-6 space-y-6">
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

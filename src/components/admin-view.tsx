"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Search,
  Plus,
  MoreHorizontal,
  Settings,
  Users,
  FileText,
  BarChart,
} from "lucide-react";
import { adminUsersData, systemConfigData } from "@/data/mock-data";

export default function AdminView() {
  const [activeTab, setActiveTab] = useState("users");
  const [searchQuery, setSearchQuery] = useState("");
  const [apiKey, setApiKey] = useState("••••••••••••••••••••••••••••••");
  const [webhookUrl, setWebhookUrl] = useState(
    "https://api.hiringconnect.com/webhooks/events"
  );
  const [configStates, setConfigStates] = useState<Record<number, boolean>>(
    systemConfigData.reduce((acc, config) => {
      acc[config.id] = config.status === "Enabled";
      return acc;
    }, {} as Record<number, boolean>)
  );

  const filteredUsers = adminUsersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConfigToggle = (configId: number, checked: boolean) => {
    setConfigStates((prev) => ({
      ...prev,
      [configId]: checked,
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Admin Dashboard</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <h3 className="text-2xl font-bold">124</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Events</p>
                <h3 className="text-2xl font-bold">18</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Workflows</p>
                <h3 className="text-2xl font-bold">9</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <Settings className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">System Health</p>
                <h3 className="text-2xl font-bold">98%</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                <BarChart className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="system">System Configuration</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">ID</th>
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">Role</th>
                      <th className="text-left py-3 px-4 font-medium">
                        Department
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Last Active
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-border">
                        <td className="py-3 px-4 text-sm font-mono">
                          {user.id}
                        </td>
                        <td className="py-3 px-4 font-medium">{user.name}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          {user.email}
                        </td>
                        <td className="py-3 px-4">
                          <Badge
                            variant="outline"
                            className={
                              user.role === "Super Admin"
                                ? "bg-purple-50 text-purple-700 border-purple-200" // uses token defaults
                                : user.role === "Admin"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : "bg-card text-card-foreground border-border"
                            }
                          >
                            {user.role}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm">{user.department}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          {user.lastActive}
                        </td>
                        <td className="py-3 px-4">
                          <Badge
                            variant={
                              user.status === "Active" ? "default" : "secondary"
                            }
                            className={
                              user.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-muted text-muted-foreground"
                            }
                          >
                            {user.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {systemConfigData.map((config) => (
                  <div
                    key={config.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{config.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Last updated: {config.lastUpdated} by {config.updatedBy}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant={
                          configStates[config.id] ? "default" : "secondary"
                        }
                        className={
                          configStates[config.id]
                            ? "bg-green-100 text-green-700"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {configStates[config.id] ? "Enabled" : "Disabled"}
                      </Badge>
                      <Switch
                        checked={configStates[config.id]}
                        onCheckedChange={(checked) =>
                          handleConfigToggle(config.id, checked)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="apiKey"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="font-mono"
                      type="password"
                    />
                    <Button variant="outline">Regenerate</Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="webhookUrl"
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      className="font-mono"
                    />
                    <Button variant="outline">Test</Button>
                  </div>
                </div>

                <div className="pt-4">
                  <Button>Save Configuration</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

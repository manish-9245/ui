"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { dataRefreshLogs, dataSources } from "@/data/mock-data";

export default function DataRefreshView() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRefreshing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Data Refresh</h2>
        <Button onClick={handleRefresh} disabled={isRefreshing}>
          <RefreshCw
            className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
          />
          {isRefreshing ? "Refreshing..." : "Refresh Now"}
        </Button>
      </div>

      {isRefreshing && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Refreshing data...</h3>
                <span className="text-sm text-gray-500">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Last Refresh</p>
                <h3 className="text-lg font-bold">Jul 15, 2025 - 09:30 AM</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <h3 className="text-lg font-bold text-green-600">Healthy</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Data Sources</p>
                <h3 className="text-lg font-bold">4/4 Connected</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Data Points</p>
                <h3 className="text-lg font-bold">1,245</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 font-bold">DB</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="status" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="status">Data Sources</TabsTrigger>
          <TabsTrigger value="logs">Refresh Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="status" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">
                        Source Name
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Last Sync
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Data Points
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataSources.map((source) => (
                      <tr key={source.id} className="border-b">
                        <td className="py-3 px-4">{source.name}</td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              source.status === "Connected"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }
                          >
                            {source.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm">{source.lastSync}</td>
                        <td className="py-3 px-4 text-sm">
                          {source.dataPoints}
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-3 w-3 mr-2" />
                            Sync
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

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">
                        Timestamp
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Duration
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Data Points
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Initiated By
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataRefreshLogs.map((log) => (
                      <tr key={log.id} className="border-b">
                        <td className="py-3 px-4">{log.timestamp}</td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              log.status === "Success"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }
                          >
                            {log.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm">{log.duration}</td>
                        <td className="py-3 px-4 text-sm">{log.dataPoints}</td>
                        <td className="py-3 px-4 text-sm">{log.initiatedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

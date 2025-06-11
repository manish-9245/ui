"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  X,
  Calendar,
  Users,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mockNotifications = [
  {
    id: 1,
    title: "Interview Scheduled",
    message: "New interview scheduled for Cohort Drive - 2nd July",
    time: "2 minutes ago",
    type: "info",
    icon: Calendar,
    unread: true,
  },
  {
    id: 2,
    title: "Feedback Pending",
    message: "Feedback required for candidate Arjun Mehta",
    time: "1 hour ago",
    type: "warning",
    icon: AlertTriangle,
    unread: true,
  },
  {
    id: 3,
    title: "Event Confirmed",
    message: "VP Drive - 15th July has been confirmed",
    time: "3 hours ago",
    type: "success",
    icon: CheckCircle,
    unread: false,
  },
  {
    id: 4,
    title: "New Team Member",
    message: "Neha Gupta has been added to your team",
    time: "1 day ago",
    type: "info",
    icon: Users,
    unread: false,
  },
  {
    id: 5,
    title: "System Maintenance",
    message: "Scheduled maintenance on July 20th at 2 AM",
    time: "2 days ago",
    type: "warning",
    icon: AlertTriangle,
    unread: false,
  },
];

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationModal({
  isOpen,
  onClose,
}: Readonly<NotificationModalProps>) {
  const [notifications, setNotifications] = useState(mockNotifications);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, unread: false }))
    );
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "error":
        return "text-red-600 bg-red-100";
      default:
        return "text-blue-600 bg-blue-100";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-hidden flex flex-col bg-background dark:bg-card">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span className="text-foreground">Notifications</span>
            {unreadCount > 0 && (
              <Badge variant="destructive">{unreadCount}</Badge>
            )}
          </DialogTitle>
          <div className="flex items-center space-x-2">
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                Mark all read
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-2">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <div
                key={notification.id}
                className={cn(
                  "p-3 rounded-lg border cursor-pointer transition-colors hover:bg-muted/50",
                  notification.unread
                    ? "bg-blue-100 border-blue-200 dark:bg-blue-900/20 dark:border-blue-400"
                    : "bg-background dark:bg-card border-border"
                )}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${getTypeColor(
                      notification.type
                    )}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium truncate">
                        {notification.title}
                      </h4>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}

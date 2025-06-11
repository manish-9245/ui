import { Clock, Users, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    time: string;
    duration: string;
    day: string;
    panelists: number;
    technology: string;
    tags: string[];
    color: string;
  };
}

export default function EventCard({ event }: EventCardProps) {
  const colorClasses = {
    pink: "border-l-pink-500 bg-pink-50 dark:bg-pink-900/20",
    teal: "border-l-teal-500 bg-teal-50 dark:bg-teal-900/20",
    blue: "border-l-blue-500 bg-blue-50 dark:bg-blue-900/20",
  };

  return (
    <Card
      className={cn(
        "border-l-4",
        colorClasses[event.color as keyof typeof colorClasses] ||
          colorClasses.blue
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-foreground">{event.title}</h3>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {event.panelists} Panelists
          </div>
          <div className="text-sm text-muted-foreground">{event.duration}</div>
          <div className="text-sm text-muted-foreground">{event.day}</div>
          <div className="text-sm text-muted-foreground">
            Technology: {event.technology}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {event.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

"use client"

import { useState } from "react"
import { X, Calendar, Clock, MapPin, Link, Plus, Minus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface CreateEventModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateEventModal({ isOpen, onClose }: CreateEventModalProps) {
  const [eventName, setEventName] = useState("VP Hiring Drive - 21st August")
  const [location, setLocation] = useState("Zoom: 999 999 9999")
  const [onlineLink, setOnlineLink] = useState("go/cohorthiring")
  const [technology, setTechnology] = useState("Java, Full Stack, AWS")
  const [description, setDescription] = useState("VP Hiring Drive for renegs")
  const [selectedColor, setSelectedColor] = useState("blue")
  const [edPanelists, setEdPanelists] = useState(6)
  const [vpPanelists, setVpPanelists] = useState(10)
  const [associatePanelists, setAssociatePanelists] = useState(12)

  const colors = [
    { name: "blue", class: "bg-blue-500" },
    { name: "pink", class: "bg-pink-500" },
    { name: "teal", class: "bg-teal-500" },
    { name: "purple", class: "bg-purple-500" },
    { name: "orange", class: "bg-orange-500" },
  ]

  const timeSlots = [
    { date: "TUE, JUL 18", startTime: "01:00 PM", endTime: "05:00 PM" },
    { date: "TUE, AUG 21", startTime: "03:00 PM", endTime: "06:00 PM" },
    { date: "TUE, AUG 21", startTime: "04:00 PM", endTime: "05:00 PM" },
    { date: "WED, AUG 22", startTime: "03:00 PM", endTime: "06:00 PM" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Create Hiring Event
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm font-medium">1</span>
            </div>
            <h3 className="text-lg font-semibold">Event Details</h3>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="eventName">Event Name</Label>
              <Input id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} className="mt-1" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <div className="relative mt-1">
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pr-8"
                  />
                  <MapPin className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div>
                <Label htmlFor="onlineLink">Online Event Link</Label>
                <div className="relative mt-1">
                  <Input
                    id="onlineLink"
                    value={onlineLink}
                    onChange={(e) => setOnlineLink(e.target.value)}
                    className="pr-8"
                  />
                  <Link className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-teal-500 text-white">ED</Badge>
                <Badge className="bg-teal-500 text-white">VP</Badge>
                <Badge className="bg-teal-500 text-white">AS</Badge>
              </div>

              {timeSlots.map((slot, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium">{slot.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{slot.startTime}</span>
                    <span className="text-sm">→</span>
                    <span className="text-sm">{slot.endTime}</span>
                  </div>
                  <div className="flex items-center space-x-4 ml-auto">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm w-4 text-center">5</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm w-4 text-center">10</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm w-4 text-center">6</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500">
                      <X className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-blue-500">
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="technology">Technology</Label>
                <Input
                  id="technology"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Event Color</Label>
                <div className="flex space-x-2 mt-1">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-6 h-6 rounded-full ${color.class} ${
                        selectedColor === color.name ? "ring-2 ring-offset-2 ring-gray-400" : ""
                      }`}
                      onClick={() => setSelectedColor(color.name)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>ED Panelists</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setEdPanelists(Math.max(0, edPanelists - 1))}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{edPanelists}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setEdPanelists(edPanelists + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div>
                <Label>VP Panelists</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setVpPanelists(Math.max(0, vpPanelists - 1))}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{vpPanelists}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setVpPanelists(vpPanelists + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div>
                <Label>Associate Panelists</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setAssociatePanelists(Math.max(0, associatePanelists - 1))}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{associatePanelists}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setAssociatePanelists(associatePanelists + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose}>Next →</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

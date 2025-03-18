import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image";
import edit from "../assets/edit.png";

interface ScheduleCardProps {
  className?: string
}

export default function ScheduleCard({ className }: ScheduleCardProps) {
  return (
    <Card className={`border-2 border-gray-300 rounded-3xl relative p-3 m-2 ${className}`}>
      <CardContent className="p-0 w-2">
        <span className="text-base font-normal absolute -top-3 left-2 bg-white px-2">Work Schedule</span>
        <Image src={edit} alt="logo" width={50} height={50}className="absolute -top-4 right-2 px-1" />
      </CardContent>
      <CardContent>
      <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Shift Assigned:</span>
                <span className="text-sm">Morning</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Shift Time:</span>
                <span className="text-sm">9am to 12pm</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">Consultation Time:</span>
                <span className="text-sm">15 mins</span>
              </div>
            </div>
      </CardContent>
    </Card>
  )
}


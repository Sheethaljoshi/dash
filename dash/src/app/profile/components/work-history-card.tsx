import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import edit from "../assets/edit.png";
import add from "../assets/add.png";
;

interface WorkHistoryCardProps {
  className?: string
}

export default function WorkHistoryCard({ className }: WorkHistoryCardProps) {
  return (
    <Card className={`border-2 border-gray-300 rounded-3xl p-3 relative ${className}`}>
      <CardContent className="p-0">
        <h3 className="text-base font-normal absolute -top-3 left-2 bg-white px-2">Work History</h3>
        <div className="absolute -top-4 right-2 flex gap-2 px-1">
        <Image src={edit} alt="logo" width={40} height={40} />
        <Image src={add} alt="logo" width={40} height={40} />
        </div>
      </CardContent>
    </Card>
  )
}



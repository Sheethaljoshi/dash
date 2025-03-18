import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import edit from "../assets/edit.png";
import add from "../assets/add.png";

export default function EducationCard() {
  return (
    <Card className="h-1/3 border-2 relative border-gray-300 rounded-3xl m-2 p-3">
      <CardContent className="p-0">
        <h3 className="text-base font-normal absolute -top-3 left-2 bg-white px-2">Education</h3>
        <div className="absolute -top-4 right-2 flex gap-2 px-1">
        <Image src={edit} alt="logo" width={40} height={40} />
        <Image src={add} alt="logo" width={40} height={40} />
        </div>
      </CardContent>
    </Card>
  )
}


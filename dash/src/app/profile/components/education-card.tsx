import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import edit from "../assets/edit.png";
import add from "../assets/add.png";
import divide from "../assets/divide.png";
import logo from "../assets/logo.png";

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
      <CardContent>
        <div className="flex flex-col gap-2">
        <div className="flex justify-between">
      <div>
                <Image src={logo} alt="logo" width={50} height={60} className="mt-2" />
      </div>
      <div className="flex flex-col">
                <span className="text-sm">Undergraduate Degree (MBBS)</span>
                <span className="text-sm italic text-gray-600">All India Institute of Medical Sciences (AIIMS), New Delhi</span>
        </div>
        <div className="flex flex-col">
                <span className="text-xs font-light text-gray-400">Registration Number</span>
                <span className="text-sm">MBBS/2012/56789</span>
        </div>
        <div>
                <Image src={divide} alt="logo" width={2} height={1} />
        </div>
        <div className="flex flex-col">
        <span className="text-xs font-light text-gray-400">Graduation Year</span>
        <span className="text-sm">2012</span>
        </div>
      </div>
      <div className="flex justify-between">
      <div>
                <Image src={logo} alt="logo" width={50} height={60} className="mt-2" />
      </div>
      <div className="flex flex-col">
                <span className="text-sm">Undergraduate Degree (MBBS)</span>
                <span className="text-sm italic text-gray-600">All India Institute of Medical Sciences (AIIMS), New Delhi</span>
        </div>
        <div className="flex flex-col">
                <span className="text-xs font-light text-gray-400">Registration Number</span>
                <span className="text-sm">MBBS/2012/56789</span>
        </div>
        <div>
                <Image src={divide} alt="logo" width={2} height={1} />
        </div>
        <div className="flex flex-col">
        <span className="text-xs font-light text-gray-400">Graduation Year</span>
        <span className="text-sm">2012</span>
        </div>
      </div>
        </div>
      </CardContent>
    </Card>
  )
}


import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image";
import edit from "../assets/edit.png";
import add from "../assets/add.png";

interface AccreditationCardProps {
  className?: string
}

export default function AccreditationCard({ className }: AccreditationCardProps) {
  return (
    <Card className={`border-2 border-gray-300 rounded-3xl relative  ${className}`}>
      <CardContent className="">
        <h3 className="text-base font-normal absolute -top-3 left-2 bg-white px-2">Accreditation</h3>
        <div className="absolute -top-4 right-2 flex gap-2 px-1">
        <Image src={edit} alt="logo" width={40} height={40} />
        <Image src={add} alt="logo" width={40} height={40} />
        </div>
      </CardContent>
      <CardContent>
      <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">National Medical Commission (NMC) Accreditation</span>
                <span className="text-sm">Registration Number: NMC/2012/56789</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">State Medical Council Certification</span>
                <span className="text-sm">Registration Number: DMC/2012/56789</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">National Medical Commission (NMC) Accreditation</span>
                <span className="text-sm">Registration Number: NMC/2012/56789</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-gray-600">State Medical Council Certification</span>
                <span className="text-sm">Registration Number: DMC/2012/56789</span>
              </div>
            </div>
      </CardContent>
    </Card>
  )
}


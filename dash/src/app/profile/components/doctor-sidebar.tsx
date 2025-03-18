"use client"

import { Sidebar, SidebarContent, SidebarProvider } from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import Image from "next/image";
import sidebar from "../assets/sidebar.png";
import back from "../assets/back.png";

export default function DoctorSidebar() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <SidebarProvider className="lg:w-[120px] w-[0px]">
      <Sidebar className="fixed left-0 top-0 w-[6.33%] min-w-[60px]">
        <SidebarContent className="flex flex-col items-center">
          <div className="mt-6 w-8 mx-auto">
          <Image src={back} alt="logo" width={32} height={32} />
          </div>
          <div className="mt-48 w-8 mx-auto">
          <Image src={sidebar} alt="sidebar" width={32} height={32} />
          </div>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}


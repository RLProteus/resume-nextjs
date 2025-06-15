import { Resume } from "@/components/resume"
import * as React from "react"
import { ModeToggle } from "@/components/darkmode"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <ModeToggle/>
      <Resume />
    </main>
  )
}

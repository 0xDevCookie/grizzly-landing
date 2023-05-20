import Audits from "@/components/audits"
import CTA from "@/components/cta"
import Features from "@/components/features"
import RoadMap from "@/components/roadmap"
import Stats from "@/components/stats"
import Title from "@/components/title"

export default function IndexPage() {
  return (
    <div>
      <Title/>
      <Stats/>
      <Features/>
      <RoadMap/>
      <Audits/>
      <CTA/>
    </div>

  )
}

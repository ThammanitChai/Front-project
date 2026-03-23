import { MapPin,CalendarDays,  ArrowRight } from "lucide-react"

export default function HowitWork () {
    return (
         <section id="spaces" className="container mx-auto py-16">
            <h2 className="mb-2 text-center font-display font-bold text-4xl">How It Works</h2>
            <p className="mx-auto max-w-md text-center mt-4 text-xl text-muted-foreground">
                Get started in three simple steps
            </p>
            <div className="grid gap-8 sm:grid-cols-3 mt-8 mb-5">
                {[
                { step: "01", icon: MapPin, title: "Browse Spaces", desc: "Explore our curated list of co-working locations across the city." },
                { step: "02", icon: CalendarDays, title: "Reserve a Spot", desc: "Pick your preferred date and time, then book instantly online." },
                { step: "03", icon: ArrowRight, title: "Show Up & Work", desc: "Arrive at your reserved space and enjoy a productive day." },
                ].map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="relative flex flex-col rounded-lg border bg-card p-6 text-center">
              <span className="mb-3 inline-block font-display text-4xl font-bold text-gray-400">{step}</span>
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
            <button className="px-8 w-100 h-12 bg-blue-900 mt-8 rounded font-bold text-white flex flex-row items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </button>
</div>
      </section>

    )
}
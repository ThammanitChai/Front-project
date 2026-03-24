import { Wifi, Coffee, Users } from "lucide-react"

export default function Features () {
    return(
         <section className="border-b border-gray-400 py-16">
        <div className="container mx-auto grid gap-8 sm:grid-cols-3">
          {[
            { icon: Wifi, title: "High-Speed WiFi", desc: "Blazing fast internet for all your needs" },
            { icon: Coffee, title: "Free Amenities", desc: "Coffee, snacks, and printing included" },
            { icon: Users, title: "Community", desc: "Network with like-minded professionals" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-400">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
}
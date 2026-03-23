import { CalendarDays, Mail, Phone, MapPin } from "lucide-react"

export default function Footer () {
    return (
        <footer className="border-t bg-blue-900 py-12 text-white">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 font-display text-xl font-bold">
                <CalendarDays className="h-6 w-6" />
                <span>WorkSpace</span>
              </div>
              <p className="mt-3 text-sm text-primary-foreground/60">
                Modern co-working spaces designed for productivity and collaboration.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm text-primary-foreground/60">
                <li>our space</li>
                <li>Sign In</li>
                <li>Register</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-primary-foreground/60">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@workspace.com</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (02) 123-4567</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bangkok, Thailand</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} WorkSpace. All rights reserved.
          </div>
        </div>
      </footer>

    )
    
}
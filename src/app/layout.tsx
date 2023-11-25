import './globals.css'
import { Navigation } from "@/components/Navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <div className="page-container">
          <Navigation />
          {children}
        </div>
    </html>
  )
}

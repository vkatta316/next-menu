import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <div className="page-container">
          {children}
        </div>
    </html>
  )
}

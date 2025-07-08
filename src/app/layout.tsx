import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import CartMenu from '@/components/CartMenu'


export const metadata = {
  title: "Xeno Store - فضل متجر إلكتروني",
  description: "اكتشف منتجاتنا المميزة بأفضل الأسعار، فقط على Xeno Store.",
  keywords: ["متجر", "Xeno", "منتجات", "شراء", "أونلاين"],
  openGraph: {
    title: "Xeno Store",
    description: "منتجاتك المفضلة في مكان واحد."
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/xeno.ico" />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />

          <CartMenu />
        </CartProvider>
      </body>
    </html>
  )
}         
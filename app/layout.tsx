// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { MaxWidthWrapper, cn, ThemeProvider } from "@/lib";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 👈 client wrapper

export const metadata: Metadata = {
  title: "King Ruby Tech",
  description: "Modern digital products and services",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "m-auto min-h-screen bg-background bg-center bg-no-repeat scroll-smooth antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Client Navbar + Top Loader */}
          <Navbar />

          {/* Main content */}
          <MaxWidthWrapper>
            <main className="pt-24">{children}</main>
          </MaxWidthWrapper>

          {/* Toaster */}
          <Toaster position="top-right" expand={false} />

          {/* Analytics */}
          <GoogleAnalytics gaId="" />
          <GoogleTagManager gtmId="" />
        </ThemeProvider>
      </body>
    </html>
  );
}

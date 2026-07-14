import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display: warm, editorial serif with a soft optical axis — the journal's "voice".
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "opsz", "WONK"],
  display: "swap",
});

// Body: humanist sans, highly legible for long-form field notes.
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Metadata / "currently" bar: monospace keeps the engineer signal.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "jacqueline fung · field notes",
  description:
    "an interactive travel journal by a software engineer. i build software, collect cities, and always have a camera with me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Flag JS as present before first paint: only then do reveals start
            hidden. No-JS users get fully visible content, never a blank hero. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        {children}
      </body>
    </html>
  );
}

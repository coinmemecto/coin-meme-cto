import "./globals.css";

export const metadata = {
  title: "Coin-Meme CTO",
  description: "A memecoin experiment that evolved without permission. No roadmap. No promises. Just the formula.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink text-white antialiased">{children}</body>
    </html>
  );
}

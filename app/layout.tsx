import "./globals.css";

export const metadata = {
  title: "Coin-Meme CTO",
  description: "A memecoin that evolved without permission."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

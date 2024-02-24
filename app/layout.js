import "./globals.css";

export const metadata = {
  title: "Kartikey Mishra",
  description: "My Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

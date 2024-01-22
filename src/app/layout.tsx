import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

const mulishFont = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App x Antd",
  description: "Next app template with Antd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulishFont.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}

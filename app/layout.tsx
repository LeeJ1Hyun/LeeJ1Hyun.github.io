import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "utilityplayer",
  description: "개발 경험과 기술적 인사이트를 기록하는 개발자의 블로그입니다.",
  keywords: [
    "개발",
    "프로그래밍",
    "기술블로그",
    "Java",
    "Python",
    "Spring",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
  authors: [{ name: "개발자", url: "https://github.com/LeeJ1Hyun" }],
  creator: "개발자",
  publisher: "utilityplayer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://LeeJ1Hyun.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://LeeJ1Hyun.github.io",
    title: "utilityplayer | 개발 블로그",
    description:
      "개발 경험과 기술적 인사이트를 기록하는 개발자의 블로그입니다.",
    siteName: "utilityplayer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "개발자의 기록",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "utilityplayer | 개발 블로그",
    description:
      "개발 경험과 기술적 인사이트를 기록하는 개발자의 블로그입니다.",
    images: ["/og-image.png"],
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "utilityplayer",
              description:
                "개발 경험과 기술적 인사이트를 기록하는 개발자의 블로그입니다.",
              url: "https://LeeJ1Hyun.github.io",
              author: {
                "@type": "Person",
                name: "개발자",
                url: "https://github.com/LeeJ1Hyun",
              },
              publisher: {
                "@type": "Organization",
                name: "utilityplayer",
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

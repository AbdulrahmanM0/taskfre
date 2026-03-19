import Provider from "@/components/layout/Provider";
import "@/public/styles/globals.scss"
export default function RootLayout({ children }) {

  return (
    <html lang="ar">
      <body dir="rtl">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
import "@/styles/globals.scss"
import { CookiesProvider } from "react-cookie"
import { SessionProvider, useSession } from "next-auth/react"
import { StoreProvider } from "@/utils/Store"
import { useRouter } from "next/router"
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({
  subsets: ["cyrillic"],
  variable: "--font-ubuntu",
  weight: "400",
})
type Props = {
  Component: any
  pageProps: any
  session: any
}
type AuthProps = {
  children: JSX.Element
}

export default function MyApp({ session, Component, pageProps }: Props) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <CookiesProvider>
          {Component.auth ? (
            <Auth>
              <Component
                {...pageProps}
                className={`${ubuntu.variable} font-sans`}
              />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </CookiesProvider>
      </StoreProvider>
    </SessionProvider>
  )
}

function Auth({ children }: AuthProps): JSX.Element {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=login required")
    },
  })
  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}

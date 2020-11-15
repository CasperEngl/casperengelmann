import { ReactNode } from 'react'
import { Head } from 'blitz'

type FrontendLayoutProps = {
  title?: string
  children: ReactNode
}

const FrontendLayout = ({ title, children }: FrontendLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'blitzcrank'}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&amp;display=swap"
        />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white">
        <div className="py-32 container">{children}</div>
      </main>
    </>
  )
}

export default FrontendLayout

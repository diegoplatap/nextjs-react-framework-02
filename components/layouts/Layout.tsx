import { FC } from "react"
import Head from "next/head"
import { NavBar } from "../ui"

interface LayoutProps  {
    children?: React.ReactNode
    title?: string
}


export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
    <Head>
        <title>{title ?? 'Pokemon App'}</title>
        <meta name="author" content="Diego Plata"/>
        <meta name="description" content={`Información sobre el pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
    </Head>
    <NavBar />
    <main style={{
      // padding: '0px 2px',
      // marginLeft: '16px'
    }}>
        {children}
    </main>
    </>
  )
}

import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.svg"
import {Container} from "../styles/pages/app"

import Image from "next/future/image"
import { CartContext, CartContextProvider } from "../contexts/CartContext"
import { ShoppingBag, X } from "phosphor-react"
import { Cart } from "../components/cart"
import { useContext } from "react"
import { Header } from "../components/header"

globalStyles()

function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <CartContextProvider>
        <Header/>

        <Cart/>

        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}

export default App

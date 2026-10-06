import { useCallback, useEffect, useRef, useState } from 'react'
import { JerseySprite } from './components/JerseyArt.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Bestsellers from './components/Bestsellers.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import CustomKit from './components/CustomKit.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const [toast, setToast] = useState({ message: '', visible: false })
  const timer = useRef(null)

  const showToast = useCallback((message) => {
    setToast({ message, visible: true })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2200)
  }, [])

  useEffect(() => () => clearTimeout(timer.current), [])

  const addToCart = (productName) => {
    setCartCount((c) => c + 1)
    showToast(`${productName} added to cart`)
  }

  return (
    <>
      <JerseySprite />
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <Bestsellers onAdd={addToCart} />
        <WhyChoose />
        <CustomKit onSave={(name, number) => showToast(`Customization saved: ${name} · #${number}`)} />
      </main>
      <Footer onSubscribe={() => showToast('You\u2019re on the list — check your inbox for 10% off')} />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}

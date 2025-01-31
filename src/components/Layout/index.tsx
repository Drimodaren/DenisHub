import Footer from './Footer'
import Header from './Header'
import Main from './Main'

export default function Layout() {
  return (
    <div className={'flex flex-col w-full justify-between my-auto items-center py-6 h-screen'}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

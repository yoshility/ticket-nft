import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Main } from "./components/Main"
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </>
  );
}

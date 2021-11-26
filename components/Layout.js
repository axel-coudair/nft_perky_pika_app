import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <main >
            <Navbar/>
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}

export default Layout
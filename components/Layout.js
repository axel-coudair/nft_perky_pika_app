import Navbar from "./Navbar"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <main >
            <Navbar/>
            <Header/>
            {children}
        </main>
    )
}

export default Layout
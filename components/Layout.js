import Navbar from "./Navbar/Navbar"
import Navbar from "./Header/Header"


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
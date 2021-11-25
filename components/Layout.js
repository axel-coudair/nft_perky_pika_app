import Navbar from "./Navbar/Navbar"
import Header from "./Header/Header"
import TextBlock from "./TextBlock/TextBlock"



const Layout = ({ children }) => {
    return (
        <main >
            <Navbar/>
            <Header/>
            <TextBlock/>
            {children}
        </main>
    )
}

export default Layout
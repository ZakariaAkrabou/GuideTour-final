// Layout.jsx
import Header from './../Header/header';
import Routers from '../../routes/router';
import Footer from './../Footer/footer';

const Layout = ({ children }) => {
    return (
        <>
           <Header />
           <main>
               {children}
           </main>
           <Routers /> 
           <Footer />
        </>
    );
}

export default Layout;

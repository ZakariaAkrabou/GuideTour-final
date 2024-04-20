import Header from './../Header/header';
import Footer from './../Footer/footer';
import Routers from '../../routes/router';

const Layout = () => {
    return (
        <>
           <Header />
           <Routers /> 
           <Footer />
           
        </>
    );
}

export default Layout;

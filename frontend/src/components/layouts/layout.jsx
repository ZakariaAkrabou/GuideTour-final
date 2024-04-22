// Layout.jsx
import Header from './../Header/header';
import Routers from '../../routes/router';

const Layout = ({ children }) => {
    return (
        <>
           <Header />
           <main>
               {children}
           </main>
           <Routers /> 
        </>
    );
}

export default Layout;

import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Layout/Main";


export default function Layout() {
    return (
        <div className={'flex flex-col w-full justify-between my-auto items-center py-6 h-screen'}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
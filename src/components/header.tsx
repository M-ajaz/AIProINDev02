import { HeaderMenuList, Logo } from "@/components";

// --------------------------------------------------------------

const Header = () => {
    return (
        <div id="header" className="w-full flex justify-center py-4 md:py-7 sticky top-0 z-[1000] bg-white shadow-sm" >
            <div className="w-full max-w-[1450px] flex justify-between items-center px-4 md:px-6" >
                <Logo />
                <HeaderMenuList />
            </div>
        </div>
    )
}

export default Header;
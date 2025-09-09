"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MenuList } from '@/utils/constants';

// --------------------------------------------------------------

const HeaderMenuList = () => {
    const [open, setOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleNavigation = (menu: any) => {
        if (menu?.name === "services") {
            setOpen(!open);
            return
        } if (menu?.name !== "industries") {
            router.push(menu?.link)
            setMobileMenuOpen(false); // Close mobile menu after navigation
        }
    }

    return (
        <>
            {/* Desktop Menu */}
            <div className='hidden lg:flex gap-6 items-center text-primary capitalize font-medium'>
                {MenuList.map((menu, index) => (
                    <div
                        key={index}
                        className='relative'
                        onClick={() => handleNavigation(menu)}
                    >
                        <p
                            className={`${(menu?.name !== "industries") && "cursor-pointer"} text-xl xl:text-2xl hover:text-secondry transition-colors`}
                        >
                            {menu?.name || ""}
                        </p>
                        {menu?.name === "services" && (
                            <div className='flex flex-col gap-2 absolute top-full right-0 bg-white p-4 w-fit rounded-2xl shadow-2xl z-50'>
                                {menu?.children?.length > 0 && open && menu?.children?.map((child: Record<string, any>, index: number) => (
                                    <span
                                        key={index}
                                        className='text-nowrap text-lg cursor-pointer hover:text-secondry transition-colors'
                                        onClick={() => router.push(child?.link)}
                                    >
                                        {child?.name || ""}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
                className='lg:hidden flex flex-col gap-1 p-2'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
                <span className={`w-6 h-0.5 bg-primary transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-primary transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-primary transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className='lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50'>
                    <div className='flex flex-col p-4'>
                        {MenuList.map((menu, index) => (
                            <div key={index} className='py-3 border-b border-gray-100 last:border-b-0'>
                                <p
                                    className={`${(menu?.name !== "careers" && menu?.name !== "industries") && "cursor-pointer"} text-lg font-medium text-primary capitalize`}
                                    onClick={() => handleNavigation(menu)}
                                >
                                    {menu?.name || ""}
                                </p>
                                {menu?.name === "services" && menu?.children?.length > 0 && (
                                    <div className='flex flex-col gap-2 mt-2 pl-4'>
                                        {menu?.children?.map((child: Record<string, any>, childIndex: number) => (
                                            <span
                                                key={childIndex}
                                                className='text-base cursor-pointer text-gray-600 hover:text-primary transition-colors'
                                                onClick={() => {
                                                    router.push(child?.link)
                                                    setMobileMenuOpen(false)
                                                }}
                                            >
                                                {child?.name || ""}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default HeaderMenuList;
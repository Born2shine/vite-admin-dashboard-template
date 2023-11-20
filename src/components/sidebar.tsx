import { images } from "@/assets";
import { cn } from "@/lib/utils";
import { routesPath } from "@/utils";
import { getStorageItem, setStorageItem } from "@/utils/hooks/useLocalStorage";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { ArrowLeftRight, BarChart2, BookText, Box, ChevronRight, ClipboardList, Component, LayoutDashboard, LogOutIcon, Package, PlusSquare, Settings, ShoppingBag, ShoppingCart, Tag, Truck, Users, Users2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

interface IProps {
    showSidebar: any;
    setShowSidebar: (state: any) => any;
}

const { DASHBOARD, PRODUCTS, SUPPORT, ALL_SETTLEMENTS, RECONCILIATION, USERS, TRANSACTIONS, MY_COMPONENT } = routesPath

const navigationPath = [
    {
        id: crypto.randomUUID().toString(),
        title: 'Main',
        links: [
            {
                id: crypto.randomUUID().toString(),
                title: 'Dashboard',
                accessor: 'Dashboard',
                icon: <LayoutDashboard className="w-4 h-4" />,
                path: DASHBOARD,
                collapsed: false,
                subLinks: []
            },
            // {
            //     id: crypto.randomUUID().toString(),
            //     title: 'Application',
            //     accessor: 'Application',
            //     icon: <Smartphone className="w-4 h-4" />,
            //     path: 'DASH',
            //     collapsed: false,
            //     subLinks: []
            // }
        ],
    },
    {
        id: crypto.randomUUID().toString(),
        title: 'Inventory',
        links: [
            {
                id: crypto.randomUUID().toString(),
                title: 'Products',
                accessor: 'Products',
                icon: <Box className="w-4 h-4" />,
                path: PRODUCTS,
                collapsed: false,
                subLinks: []
            },
            {
                id: crypto.randomUUID().toString(),
                title: 'Create Product',
                accessor: 'Create Product',
                icon: <PlusSquare className="w-4 h-4" />,
                path: 'Create Product',
                collapsed: false,
                subLinks: []
            },
            {
                id: crypto.randomUUID().toString(),
                title: 'Category',
                accessor: 'Category',
                icon: <Package className="w-4 h-4" />,
                path: 'Category',
                collapsed: false,
                subLinks: []
            },
            {
                id: crypto.randomUUID().toString(),
                title: 'Brand',
                accessor: 'Brand',
                icon: <Tag className="w-4 h-4" />,
                path: 'Brand',
                collapsed: false,
                subLinks: []
            }
        ],
    },
    {
        id: crypto.randomUUID().toString(),
        title: 'Sales',
        links: [
            {
                id: crypto.randomUUID().toString(),
                title: 'Sales',
                accessor: 'Sales',
                icon: <ShoppingCart className="w-4 h-4" />,
                path: SUPPORT,
                collapsed: false,
                subLinks: []
            },
            {
                id: crypto.randomUUID().toString(),
                title: 'Shipment',
                accessor: 'Shipment',
                icon: <Truck className="w-4 h-4" />,
                path: 'SUPPORTSS',
                collapsed: false,
                subLinks: []
            },
            {
                id: crypto.randomUUID().toString(),
                title: 'Customers',
                accessor: 'Customers',
                icon: <Users className="w-4 h-4" />,
                path: 'SUPPORTs',
                collapsed: false,
                subLinks: []
            },
            {
                id: crypto.randomUUID().toString(),
                title: 'Pos',
                accessor: 'Pos',
                icon: <ShoppingBag className="w-4 h-4" />,
                path: 'POS',
                collapsed: false,
                subLinks: []
            },
            {
                id: crypto.randomUUID().toString(),
                title: 'Invoices',
                accessor: 'Invoices',
                icon: <ClipboardList className="w-4 h-4" />,
                path: 'SUPPORT',
                collapsed: false,
                subLinks: []
            },
            {
                id: crypto.randomUUID().toString(),
                title: 'Sales Return',
                accessor: 'Sales Return',
                icon: <ArrowLeftRight className="w-4 h-4" />,
                path: 'SUPPORT',
                collapsed: false,
                subLinks: []
            },
        ],
    },
    {
        id: crypto.randomUUID().toString(),
        title: 'Purchases',
        links: [
            {
                id: crypto.randomUUID().toString(),
                title: 'Purchases',
                accessor: 'Purchases',
                icon: <ShoppingBag className="w-4 h-4" />,
                path: '#Purchases',
                collapsed: false,
                subLinks: [
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Vendor',
                        accessor: 'Vendor',
                        path: ALL_SETTLEMENTS,
                    },
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Purchase Order',
                        accessor: 'Purchase Order',
                        path: RECONCILIATION,
                    },
                ]
            }
        ],
    },
    {
        id: crypto.randomUUID().toString(),
        title: 'Expenses',
        links: [
            {
                id: crypto.randomUUID().toString(),
                title: 'Expenses',
                accessor: 'Expenses',
                icon: <BookText className="w-4 h-4" />,
                path: USERS,
                collapsed: false,
                subLinks: []
            }
        ],
    },
    {
        id: crypto.randomUUID().toString(),
        title: 'Report',
        links: [
            {
                id: crypto.randomUUID().toString(),
                title: 'Report',
                icon: <BarChart2 className="w-4 h-4" />,
                path: '#Report',
                accessor: 'Report',
                collapsed: false,
                subLinks: [
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Sales Report',
                        accessor: 'Sales Report',
                        path: ALL_SETTLEMENTS,
                    },
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Product Report',
                        accessor: 'Product Report',
                        path: 'RECONCILIATION3',
                    },
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Purchase Report',
                        accessor: 'Purchase Report',
                        path: 'RECONCILIATION2',
                    },
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Invoice Report',
                        accessor: 'Invoice Report',
                        path: 'RECONCILIATION1',
                    },
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'User Report',
                        accessor: 'User Report',
                        path: 'RECONCILIATION',
                    },
                ]
            }
        ],
    },
    {
        id: crypto.randomUUID().toString(),
        title: 'Manage Users',
        links: [
            {
                id: crypto.randomUUID().toString(),
                title: 'Manage Users',
                accessor: 'Manage Users',
                icon: <Users2 className="w-4 h-4" />,
                path: TRANSACTIONS,
                collapsed: false,
                subLinks: []
            }
        ],
    },
    {
        id: crypto.randomUUID().toString(),
        title: 'Components',
        links: [
            {
                id: crypto.randomUUID().toString(),
                title: 'Components',
                accessor: 'Components',
                icon: <Component className="w-4 h-4" />,
                path: MY_COMPONENT,
                collapsed: false,
                subLinks: []
            }
        ],
    },
    {
        id: crypto.randomUUID().toString(),
        title: 'Settings',
        links: [
            {
                id: crypto.randomUUID().toString(),
                title: 'Settings',
                accessor: 'Settings',
                icon: <Settings className="w-4 h-4" />,
                path: '#Settings',
                collapsed: false,
                subLinks: [
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'General Settings',
                        accessor: 'General Settings',
                        path: ALL_SETTLEMENTS,
                    },
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Email Settings',
                        accessor: 'Email Settings',
                        path: RECONCILIATION,
                    },
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Payment Settings',
                        accessor: 'Payment Settings',
                        path: RECONCILIATION,
                    },
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Currency Settings',
                        accessor: 'Currency Settings',
                        path: RECONCILIATION,
                    },
                    {
                        id: crypto.randomUUID().toString(),
                        title: 'Tax Rates',
                        accessor: 'Tax Rates',
                        path: RECONCILIATION,
                    },
                ]
            },
            {
                id: crypto.randomUUID().toString(),
                title: 'Logout',
                accessor: 'Logout',
                icon: <LogOutIcon className="w-4 h-4" />,
                path: '/',
                collapsed: false,
                subLinks: []
            }
        ],
    },

]



const Sidebar = ({ setShowSidebar, showSidebar }: IProps) => {
    const collapsibleData = getStorageItem('collapsible')
    const activeNavData = getStorageItem('activeNav')

    const [navigationState, setNavigationState] = useState(navigationPath);
    const [collapsible, setCollapsible] = useState({ path: "/dashboard", collapsed: false })
    const [activeNav, setActiveNav] = useState('Dashboard')

    const toggleCollapsed = (linkId: string) => {
        const currentState = [...navigationState]
        let newState = currentState.map(data => {
            let links = data.links.map(link => {
                return link.id === linkId ? { ...link, collapsed: !link.collapsed } : link
            })
            return { ...data, links: links }
        })
        setNavigationState(newState)
    };

    const NAVIGATION_MENU = useMemo(() => navigationState, [navigationState])
    // console.log(navigationState)

    const { width } = useWindowSize()
    const navigate = useNavigate()

    const normal = 'relative p-2.5 block flex items-center gap-x-2'
    const defaultLink = normal + ' text-grey-500 pl-4 dark:text-slate-400 dark:hover:text-slate-300 hover:text-primary hover:p-2.5 hover:pl-4'
    const activeLink = normal + ' text-white bg-primary rounded-[4px] pl-4 dark:text-slate-300'

    const location = useLocation();


    useEffect(() => {
        if (width < 768) {
            // dispatch an action to close sidebar
            setShowSidebar(false)
        } else {
            setShowSidebar(true)
        }
    }, [width])

    // Set the default active link
    // If store has active link, set active link to store link
    useEffect(() => {
        if (collapsibleData && activeNavData) {
            setActiveNav(activeNavData)
            setCollapsible(collapsibleData)
            return
        }
        setStorageItem('collapsible', collapsible)
        setStorageItem('activeNav', activeNav)
    }, [])

    // Update store link to selected link
    useEffect(() => {
        setStorageItem('collapsible', collapsible)
        setStorageItem('activeNav', activeNav)
    }, [collapsible, activeNav])

    return (
        <>
            {showSidebar && width < 768 && <div className='absolute w-screen h-screen left-0 bg-neutral-50/5 z-20 cursor-pointer'
                onClick={() => setShowSidebar(!showSidebar)}
            ></div>}
            <nav className={`fixed top-0 left-0 h-screen bg-white w-[14rem] pt-4 z-30 transition-all duration-500 ease-in-out border-r md:relative md:x-7 lg:w-[16rem] ${showSidebar || width >= 768 ? 'translate-x-0' : '-translate-x-full'} dark:bg-gray-800`}>
                <div className="flex justify-center pl5 border-b pb-4">
                    <img src={images.logo} alt="" />
                    {/* <span className="text-2xl text-primary font-GilroyBold tracking-widest"> NATOPAY <sup></sup></span> */}
                </div>
                <section className="mt-4 h-[85vh] flex flex-col justify-between">
                    <div className="flex-1 h-[60% overflow-y-scroll">
                        {
                            NAVIGATION_MENU?.map((navigation) => (
                                <div key={navigation.id} className="relative pb-4">
                                    <span className="block font-normal pl-5 pb-3 text-sm">{navigation.title}</span>
                                    {
                                        navigation?.links?.map((link) => (
                                            <div className="mx-7" key={link.id}>
                                                <NavLink
                                                    key={link.id}
                                                    to={link?.path}
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        setCollapsible({
                                                            ...collapsible,
                                                            path: link.path,
                                                            collapsed: false
                                                        })
                                                        toggleCollapsed(link.id)
                                                        if (link.subLinks.length > 0) {
                                                            setCollapsible({
                                                                ...collapsible,
                                                                path: link.path,
                                                                collapsed: !collapsible.collapsed
                                                            })
                                                            setActiveNav(link.accessor)
                                                            return
                                                        }
                                                        setActiveNav(link.accessor)
                                                        setShowSidebar(false)
                                                        navigate(link.path)
                                                    }}
                                                    className={cn(`relative p-2.5 items-center gap-x-2`,
                                                        ((link?.path === collapsible?.path) || (link.accessor === activeNav && link.path === collapsible?.path)) ? activeLink : defaultLink
                                                    )}
                                                >
                                                    <>
                                                        <span>{link.icon}</span>
                                                        <span className="text-sm md:text-[.95rem]">{link.title}</span>
                                                        {link.subLinks.length > 0 && <span
                                                        >
                                                            <ChevronRight className={cn(`h-3.5 w-3.5 absolute right-2 top-3.5 text-gray-500 transition-all ease-in-out duration-300`,
                                                                link.collapsed ? 'rotate-90' : 'rotate-0',
                                                                link.accessor === activeNav ? 'text-white' : 'text-gray-500'
                                                            )
                                                            } />

                                                        </span>}
                                                    </>
                                                    {/* {location.pathname === link.path && <span className="absolute h-7 w-1 bg-primary -left-7"></span>} */}
                                                </NavLink>

                                                <div className={cn(
                                                    `h-0 transition-all ease-in-out duration-300 overflow-hidden`
                                                )} style={{ height: link.collapsed ? `${2.3 * link.subLinks.length}rem` : '0' }}>
                                                    <div className="flex flex-col gap-y-3">
                                                        {
                                                            link.subLinks.map((link) => (
                                                                <div key={link.id} className={`first:pt-2 last:mb-3`}>
                                                                    <Link
                                                                        key={link.path}
                                                                        to={link.path}
                                                                        className={cn(
                                                                            `relative pl-10 text-sm hover:text-primary`,
                                                                            location.pathname === link.path && 'text-primary font-GilroyMedium'
                                                                        )}
                                                                    >
                                                                        {link.title}
                                                                        {<span className={cn("absolute h-1 w-1 rounded-full bg-gray-400 left-7 top-1 z-10",
                                                                            location.pathname === link.path && 'bg-primary'
                                                                        )}></span>}
                                                                    </Link>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <span className="block mt-2 border-b border-b-gray-100 w-[82%] mx-auto"></span>
                                </div>
                            ))
                        }
                    </div>
                    {/* <div className="h-[30%] mx-6 md:mx-10 rounded-xl bg-white border flex flex-col items-center pt-4">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@zpay" />
                            <AvatarFallback>ZTH</AvatarFallback>
                        </Avatar>
                        <span className="block w-[8rem] text-sm text-center mt-3 text-gray-500 truncate">Super Admin</span>
                        <Button
                            className="font-normal bg-background bg-none border border-red-500 h-7 px-7 rounded-[8px] mt-6 text-red-400 text-[11px] hover:bg-red-400 hover:text-white hover:border-white"
                            onClick={() => navigate('/')}
                        >
                            <LogOutIcon className="h-3 w-3 mr-1" />
                            Logout
                        </Button>
                    </div> */}
                </section>
            </nav>
        </>
    )
}

export default Sidebar
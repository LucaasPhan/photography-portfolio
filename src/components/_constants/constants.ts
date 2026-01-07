export interface PageSchema {
    page_name: string,
    href: string,
}

export const PAGE_INFO: PageSchema[] = [
    {
        page_name: "Home",
        href: "/",
    },
    {
        page_name: "Gallery",
        href: "/gallery",
    },
    {
        page_name: "About",
        href: "/about",
    },
    {
        page_name: "Contact",
        href: "/contact",
    }
]
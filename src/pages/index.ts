import { create } from "zustand"
import {type ReactNode} from "react"
import * as Icons from "@tabler/icons-react";

import * as PageAnalytics from "@/pages/pageAnalytics";
import * as PageControllers from "@/pages/pageControllers";
import * as PageAbout from "@/pages/pageAbout";

type PageId = string

// Typ einer Seite
export type Page = {
    id: PageId,
    title: string,
    icon: Icons.Icon,
    component: () => ReactNode,
    enabled: boolean,
}

// interner Store für aktuelle Seite
type PageStore = {
    pages: Page[]
    currentPageId: PageId
    setCurrentPage: (id: PageId) => void
}

const RegisteredPages: Page[] = [
    PageAnalytics.DATA,
    PageControllers.DATA,
    PageAbout.DATA,
]

export const DefaultPageID: PageId = PageAnalytics.DATA.id

export const usePageStore = create<PageStore>((set) => ({
    pages: RegisteredPages,
    currentPageId: DefaultPageID,
    setCurrentPage: (id) => set({ currentPageId: id }),
}))

export const useCurrentPage = () => {
    const { currentPageId, pages } = usePageStore()
    return pages.find((p) => p.id === currentPageId)
}


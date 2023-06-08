export type SideMenuProps = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

export interface MenuItem {
    label: string;
    icon: React.ReactElement;
    to: string;
    children?: MenuItem[];
    id: number;
}

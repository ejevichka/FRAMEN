import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CampaignsIcon from "@mui/icons-material/Assignment";
import ReportsIcon from "@mui/icons-material/BarChart";
import AccountIcon from "@mui/icons-material/AccountBox";
import ProfileIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import BillingIcon from "@mui/icons-material/MonetizationOn";
import InvoicesIcon from "@mui/icons-material/Receipt";
import TransactionsIcon from "@mui/icons-material/AccountBalanceWallet";
import OrganizationsIcon from "@mui/icons-material/Business";
import { MenuItem } from "./SideMenu.types";

export const menuItems: MenuItem[] = [
    {
        label: "Home",
        icon: <HomeIcon />,
        id: 1,
        to: "/",
    },
    {
        label: "Campaigns",
        icon: <CampaignsIcon />,
        to: "/campaigns",
        id: 2,
    },
    {
        label: "Reports",
        icon: <ReportsIcon />,
        to: "/reports",
        id: 3,
    },
    {
        label: "Account",
        icon: <AccountIcon />,
        to: "/account",
        id: 4,
        children: [
            {
                label: "Profile",
                icon: <ProfileIcon />,
                to: "/profile",
                id: 5,
            },
            {
                label: "Settings",
                icon: <SettingsIcon />,
                to: "/settings",
                id: 6,
            },
            {
                label: "Organizations",
                icon: <OrganizationsIcon />,
                to: "/organizations",
                id: 7,
            },
            {
                label: "Billing",
                icon: <BillingIcon />,
                to: "/billing",
                id: 8,
                children: [
                    {
                        label: "Invoices",
                        icon: <InvoicesIcon />,
                        to: "/invoices",
                        id: 9,
                    },
                    {
                        label: "Transactions",
                        icon: <TransactionsIcon />,
                        to: "/transactions",
                        id: 10,
                    },
                ],
            },
        ],
    },
];

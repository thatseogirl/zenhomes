import React from "react";
import DashboardOverview from "./Dashboard/DashboardOverview";
import Sidebar from "./sidebar/Sidebar";

import { Flex } from "./styles/Flex.styled";

export default function LandLordDashboard() {
    return (
        <>
            <Flex>
                <Sidebar />
                <DashboardOverview />
            </Flex>
        </>
    );
}

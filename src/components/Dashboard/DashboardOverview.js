import React from "react";
import Table from "react-bootstrap/Table";

import Sidebar from "../sidebar/Sidebar";
import Container from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { Box } from "../styles/Dashboard.styled";

export default function DashboardOverview({ tenantsData }) {
    return (
        <Container>
            <Flex>
                <div>
                    <Sidebar />
                </div>
                <Box>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Tenants Name</th>
                                <th>Maintenance</th>
                                <th>Rent</th>
                                <th>Property Type</th>
                                <th>Initial Deposit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tenantsData.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.tenantsName}</td>
                                    <td>{data.maintenance}</td>
                                    <td>{data.paidRent}</td>
                                    <td>{data.propertyType}</td>
                                    <td>${data.initialDeposit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Box>
            </Flex>
        </Container>
    );
}

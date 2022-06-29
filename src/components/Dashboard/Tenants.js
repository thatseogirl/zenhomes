import React from "react";

import Card from "react-bootstrap/Card";
import Sidebar from "../sidebar/Sidebar";
import { Flex } from "../styles/Flex.styled";
import { Grid, Color } from "../styles/Tenants.styled";
import Container from "../styles/Container.styled";

export default function Tenants({ tenantsData }) {
    return (
        <Container>
            <Flex>
                <div>
                    <Sidebar />
                </div>
                <Grid>
                    {tenantsData.map((data) => (
                        <Card key={data.id} style={{ height: "300px" }}>
                            <Card.Img
                                variant='top'
                                src={data.image}
                                style={{ height: "150px" }}
                            />
                            <Card.Body>
                                <Card.Title>
                                    Tenants Name: <Color>{data.tenantsName}</Color>
                                </Card.Title>
                                <Card.Title>
                                    Address: <Color>{data.address}</Color>
                                </Card.Title>
                                <Card.Title>
                                    Rent Status: <Color> {data.paidRent}</Color>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                </Grid>
            </Flex>
        </Container>
    );
}

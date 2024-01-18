import React from "react";
import { Card, CardBody, CardTitle, Container } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <>
      <section className="d-flex justify-content-center">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3 className="font-weight-bold">
                Welcome to Silicon Valley's premier dive cafe!
              </h3>
            </CardTitle>
          </CardBody>
        </Card>
      </section>
      <Container>
        <Card>
          <CardTitle className="text-center">
            <h2 className="text-center">Snacks</h2>
          </CardTitle>
          <CardBody>
            <h4 className="text-center">{snacks.length}</h4>
          </CardBody>
        </Card>
        <Card>
          <CardTitle>
            <h2 className="text-center">Drinks</h2>
          </CardTitle>
          <CardBody>
            <h4 className="text-center">{drinks.length}</h4>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default Home;

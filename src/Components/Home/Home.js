import React from "react";
import OfferSlider from "../OfferSlider";
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
  } from 'reactstrap';

function Home() {
  return (
    <div>
        <OfferSlider></OfferSlider>
        <section className="featured-products my-4">
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="d-flex justify-content-between">
                                <Button>Buy Now</Button>
                                <Button>Add to Cart</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="d-flex justify-content-between">
                                <Button>Buy Now</Button>
                                <Button>Add to Cart</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="d-flex justify-content-between">
                                <Button>Buy Now</Button>
                                <Button>Add to Cart</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="d-flex justify-content-between">
                                <Button>Buy Now</Button>
                                <Button>Add to Cart</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="d-flex justify-content-between">
                                <Button>Buy Now</Button>
                                <Button>Add to Cart</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="d-flex justify-content-between">
                                <Button>Buy Now</Button>
                                <Button>Add to Cart</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="d-flex justify-content-between">
                                <Button>Buy Now</Button>
                                <Button>Add to Cart</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="d-flex justify-content-between">
                                <Button>Buy Now</Button>
                                <Button>Add to Cart</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  );
}
export default Home;

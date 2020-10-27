import React, { useState, useEffect, useMemo } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Fade from "react-reveal/Fade";
import axios from "axios";

function Products() {
  useEffect(() => {
    // axios.get('https://my-json-server.typicode.com/niyasmnassar/demo/db').then(res => {setItems(res.data)});
    axios
      .get("https://my-json-server.typicode.com/niyasmnassar/demo/db")
      .then((res) => {
        setProCategory(res.data.procategory);
        setCatlist(res.data.categorylist);
        console.log(res.data.procategory);
        console.log(res.data.categorylist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [proCategory, setProCategory] = useState([]);
  const [catlist, setCatlist] = useState([]);

  const [filter, setFilter] = useState('all')

  const filteredProducts = useMemo(() => {
    if (filter === 'all') return proCategory
    console.log(proCategory);
    return proCategory.filter(cat => cat.category === filter)
  }, [filter])

  console.log(filter)

  const addToCart = () => {
    setCart([...cart]);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Nav>
              {catlist.map((types) => (
                <NavItem>
                  <NavLink onClick={() => setFilter(types.category)}>{types.category}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
        </Row>
        <Row>
          {filteredProducts.map((cat, i) => (
            <Col lg="3" md="4" sm="6" xs="12" className="mb-4" key={i}>
              <Fade down>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={cat.proimg}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{cat.title}</CardTitle>
                    <CardSubtitle>
                      {cat.quantity}
                      {cat.type}
                    </CardSubtitle>
                    <CardText className="mt-2">
                      <span className="mx-1">
                        Price: <del>{cat.price}</del>
                      </span>
                      <span className="mx-1">Our Price: {cat.ourprice}</span>
                    </CardText>
                    <div className="d-flex justify-content-between">
                      <Button className="btn-block" href="/MyCart" onClick={() => addToCart()}>Add to Cart</Button>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Products;

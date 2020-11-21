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

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('category');

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
      const sortArray = type => {
        const types = {
          price: 'price',
          category: 'category',
        };
        console.log(types);
        const sortProperty = types[type];
        const sorted = [setProCategory].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
      };
      sortArray(sortType);

  }, [sortType]);


  const [proCategory, setProCategory] = useState([]);
  const [catlist, setCatlist] = useState([]);
  const [filter, setFilter] = useState('all');
  
  

  // const filteredProducts = useMemo(() => {
  //   if (filter === 'all') return proCategory
  //   return proCategory.filter(cat => cat.category === filter)
  // }, [filter])

  // console.log(filter)

  return (
    <div>
      <Container>
        <Row>
          <Col md="4" className="ml-auto d-flex">
            <select className="ml-auto mb-3" onChange={(e) => setSortType(e.target.value)}>
              <option value="price">Price</option>
              <option value="category">Category</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <Nav>
              {catlist.map((types) => (
                <NavItem>
                  <NavLink onClick={() => setFilter(types.category)}>{types.category}</NavLink>
                </NavItem>
              ))}
            </Nav> */}
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="3" sm="6">
          <h6 className="text-left">FILTER</h6>
          <input type="range" multiple />
          </Col>
          <Col lg="9" md="9" sm="6">
            <Row>
              {proCategory.map((cat, i) => (
                <Col lg="4" md="4" sm="6" xs="12" className="mb-4" key={i}>
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
                          <Button className="btn-block" href="/MyCart">Add to Cart</Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Products;

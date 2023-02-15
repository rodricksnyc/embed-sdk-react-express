import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { EmbedSDKInit } from "./components/EmbedInit";
import EmbedDashboard from "./components/EmbedDashboard1";

import SideNav from "./components/SideNav";

import FlipCards from "./components/FlipCards";

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

function App() {
    EmbedSDKInit();
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage();
  }, []);

  async function getMessage() {
    const result = await fetch("/api/message");
    const json = await result.json();

    setMessage(json);
  }

  return (

    <div className="main overflow-hidden">
      <Container fluid className="padding-0">

      <section className="block0">
    			<div className="heros" id="home">

        <div className="header d-flex align-items-center ps-4">
          <div className="hdr-container">
            <a href={'https://looker.bytecode.io'}>



            </a>




          </div>

          <div className="end">




          </div>

        </div>

    </div>
    </section>


    <div className="firstdiv position-relative">

      {/*<div className="abso">
            <object type="image/svg+xml" data={"./images/Selena.svg"} className="img-fluid avatar" alt=""></object>
      </div>*/}
      <Container className="addMargin">


      <section className="block10">

      <div id="overview" className="heros">

        <Row className="mt-5">

     <h2 className="text-center pt-5">Preschool Environments Toolkit</h2>

          <Col xs={12} md={12}>


          <p>The IDC Preschool Environments Toolkit includes materials and resources that provide information and support to state education agencies (SEAs) and local education agencies (LEAs) to collect, report, analyze, and use preschool environments data. Specifically, this toolkit includes information about the different federal reporting requirements including the EDFacts data collection, the relationship of this collection to Indicator 6 of the State Performance Plan/Annual Performance Report (SPP/APR), and how states and LEAs can use these data for program improvement.</p>


          <h3 className="text-center mt-5 mb-5">Preschool Environments</h3>

          <p>The Preschool Grants Program, Section 619 of Part B of the Individuals with Disabilities Education Act (IDEA), is a federal grant program available to help states provide free, appropriate special education and related services for children with disabilities ages 3 through 5 in the least restrictive environment</p>

<p>In order to be eligible for these grants, states must serve all eligible children with disabilities ages 3 through 5 and have an approved application under Part B of IDEA. The goal of preschool special education services is to enable young children to be active and successful participants in home, school, and community settings resulting in positive outcomes for children and their families.</p>




          </Col>



        </Row>

      <Row className="mt-2">
        <Col xs={12} lg={12} md={12}>

        <FlipCards />


        </Col>

        </Row>
</div>
</section>

<section className="block5">
      <div id="survey" className="heros">

      <Row className="mt-5">

        <Col xs={12}  md={12}>


  <h3 className="text-center mt-5 mb-5">Why Do Preschool Educational Environments Data Matter?</h3>
  <p>Educational Environments data are one of the annual types of data states report to the U.S. Department of Education (Department), Office of Special Education Programs (OSEP). Before states report these data, educators engage in many activities and steps that lead up to and are part of the decisionmaking process regarding placement of children in the least restrictive educational environments. Despite the expansion of early childhood programs, there has not yet been a proportionate expansion of inclusive early learning opportunities for young children with disabilities. If states and LEAs are to have high-quality data to use for program improvement, it is crucial that they understand the process of collecting and reporting the preschool educational environments data.</p>



    <h3 className="text-center mt-5 mb-5">Why Do Preschool Educational Environments Data Matter?</h3>
    <p>Educational Environments data are one of the annual types of data states report to the U.S. Department of Education (Department), Office of Special Education Programs (OSEP). Before states report these data, educators engage in many activities and steps that lead up to and are part of the decisionmaking process regarding placement of children in the least restrictive educational environments. Despite the expansion of early childhood programs, there has not yet been a proportionate expansion of inclusive early learning opportunities for young children with disabilities. If states and LEAs are to have high-quality data to use for program improvement, it is crucial that they understand the process of collecting and reporting the preschool educational environments data.</p>




      <h3 className="text-center mt-5 mb-5">Why Do Preschool Educational Environments Data Matter?</h3>
      <p>Educational Environments data are one of the annual types of data states report to the U.S. Department of Education (Department), Office of Special Education Programs (OSEP). Before states report these data, educators engage in many activities and steps that lead up to and are part of the decisionmaking process regarding placement of children in the least restrictive educational environments. Despite the expansion of early childhood programs, there has not yet been a proportionate expansion of inclusive early learning opportunities for young children with disabilities. If states and LEAs are to have high-quality data to use for program improvement, it is crucial that they understand the process of collecting and reporting the preschool educational environments data.</p>


        </Col>

      </Row>

</div>
</section>



    <Row className="mt-5 mb-5">
      <Col xs={12} md={2}>



      </Col>

      <Col xs={12} md={10}>



        </Col>
    </Row>

    <Row className="mt-5 mb-5">
      <Col xs={12}>

      </Col>
    </Row>

      </Container>


  </div>

  <div className="Seconddiv">
  <Container fluid className="showOnSubmit">

    <Row className="mt-5 mb-5">
      <Col xs={12}>
        <div className="d-flex justify-content-center">




        </div>
      </Col>
    </Row>
  </ Container>
  </div>

          <div className="footer">
          </div>


      </ Container>



              <SideNav />

      </div>

  );
}

export default App;

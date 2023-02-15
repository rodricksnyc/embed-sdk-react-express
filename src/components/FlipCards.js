import React, {useState} from 'react'
import { Accordion, Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


function FlipCards(props) {

const cards = [
  {
    id: "one1",
    link: "",
    front: "What is the IDEA requirement for educational environments, and how does it apply to preschool?",
    image: "https://ixd-studio.wesdemo.com/idc-preschool/static/media/1-Clipboard.214d2714.svg",
    back: "IDEA regulations require that, to the maximum extent appropriate, children with disabilities, including preschool children, are educated with children who do not have disabilities; and attendance in special classes, separate schooling, or other removals of children with disabilities from the regular educational environment occur only if the nature or severity of the disability is such that education in regular classes."
  },
  {
    id: "two",
    link: "",
    front: "What data are collected about preschool educational environments and how are they used?",
    image: "https://ixd-studio.wesdemo.com/idc-preschool/static/media/1-Data.d4fba6d7.svg",
    back: "States annually report to the U.S. Department of Education (Department) data for preschool children with disabilities, including the educational environments where they are receiving special education and related services. States can use these educational environments data to evaluate progress in increasing the amount of time preschool children with disabilities spend with peers without disabilities."
  },

  {
    id: "three",
    link: "",
    image: "https://ixd-studio.wesdemo.com/idc-preschool/static/media/1-Environments.c5035044.svg",
    front: "What are the environments where preschool children spend their time and receive their special education and related services?",
    back: "Young children with disabilities should have access to inclusive high-quality early childhood programs where they receive individualized and appropriate support to meet high expectations. These inclusive environments include a wide array of settings throughout the community. Environments can range from regular early childhood programs such as public preschool, Head Start, private preschools, or childcare programs to environments such as special education classrooms or homes."
  },

  {
    id: "four",
    link: "",
    image: "https://ixd-studio.wesdemo.com/idc-preschool/static/media/4-target.6485d480.svg",
    front: "How does the percentage of each race/ethnicity of the 3-year-olds in the selected environment across all eight LEAs in the region match the racial/ethnic diversity?",
    back: "States have the ability to complete a more sophisticated data analysis when they include more detailed data about children and their demographics and location of services. For example, the data could include information about a child’s or group of children’s preschool environment based on racial/ethnic composition of the children in the preschool environment and percentage or count of children with disabilities in the same preschool environment. "
  },

];






return (






       <Row>
          {cards.map((card) => (

         <Col sm={12} md={6} lg={3} className="mt-5 mb-5">
          <a href={card.link} id={card.id}>
             <div
               tabIndex={card.id}
               className="flip-card-outer">
               <div
                 className="flip-card-inner">
                 <div className="card front">
                   <div className="card-body flex-column d-flex justify-content-center align-items-center text-center">
                    <img className="mb-2" src={card.image}/>
                     <p className="card-text">{card.front}</p>

                     <svg width="20" aria-hidden="true" focusable="false" data-prefix="far" data-icon="repeat" class="svg-inline--fa fa-repeat " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#5514e6" d="M512 256c0 83.813-68.187 152-152 152H136.535l55.762 54.545c4.775 4.67 4.817 12.341.094 17.064l-16.877 16.877c-4.686 4.686-12.284 4.686-16.971 0l-104-104c-4.686-4.686-4.686-12.284 0-16.971l104-104c4.686-4.686 12.284-4.686 16.971 0l16.877 16.877c4.723 4.723 4.681 12.393-.094 17.064L136.535 360H360c57.346 0 104-46.654 104-104 0-19.452-5.372-37.671-14.706-53.258a11.991 11.991 0 0 1 1.804-14.644l17.392-17.392c5.362-5.362 14.316-4.484 18.491 1.847C502.788 196.521 512 225.203 512 256zM62.706 309.258C53.372 293.671 48 275.452 48 256c0-57.346 46.654-104 104-104h223.465l-55.762 54.545c-4.775 4.67-4.817 12.341-.094 17.064l16.877 16.877c4.686 4.686 12.284 4.686 16.971 0l104-104c4.686-4.686 4.686-12.284 0-16.971l-104-104c-4.686-4.686-12.284-4.686-16.971 0l-16.877 16.877c-4.723 4.723-4.681 12.393.094 17.064L375.465 104H152C68.187 104 0 172.187 0 256c0 30.797 9.212 59.479 25.019 83.447 4.175 6.331 13.129 7.209 18.491 1.847l17.392-17.392a11.991 11.991 0 0 0 1.804-14.644z"></path></svg>

                   </div>
                 </div>
                <div className="card back">
                   <div className="card-body flex-column d-flex justify-content-center align-items-center text-center">
                     <p className="card-text small">{card.back}</p>
                    <svg width="20" aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right footer-promo__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#5514e6" d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                   </div>
                 </div>
               </div>
             </div>

            </a>
         </Col>

          ))}
       </Row>




      )




}


export default FlipCards;

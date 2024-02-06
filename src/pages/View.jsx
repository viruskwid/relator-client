import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function View() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />
      <div style={{ height: "auto" }} className="w-auto">
        <div className="row mt-5 w-auto ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
          <div id="carouselExampleInterval" class="carousel slide ms-3" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img  style={{ height: "400px" }} src="https://www.keralaplot.com/oc-content/uploads/18/3947.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img  style={{ height: "400px" }} src="https://www.keralaplot.com/oc-content/uploads/18/3949.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img  style={{ height: "400px" }} src="https://www.buykerala.properties/wp-content/uploads/2019/04/IMG_20190329_091724014.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            <div className="mt-4 ms-5">
              <div class="card bg-success me-5" style={{ width: "auto" }}>
                <div class="card-body">
                  <h5 class="card-title text-light fw-semibold ">
                    Villa for sale in Kizhkabalam, 1500 sqft
                  </h5>
                  <p class="card-text text-light">Kochi,Kerala</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1  "></div>
          <div className="col-lg-4 d-flex flex-column  justify-content-center">
            <div
              class="card bg-dark text-center shadow "
              style={{ width: "16rem", height: "260x" }}
            >
              <img
                style={{ height: "150px", width: "155px" }}
                src="https://img.freepik.com/premium-photo/studio-shot-handsome-indian-businessman-against-white-background_251136-81759.jpg"
                class="card-img-top rounded-circle img-fluid ms-5 mt5"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-light">Ajmal MK</h5>
                <p class="card-text text-light ">Malappuram,kerala</p>
                <button onClick={() => setOpen(!open)} class="btn btn-outline-success text-light">
                  Contact<i class="fa-solid fa-phone ms-2"></i>
                </button>
                <Collapse in={open}>
        <div id="example-collapse-text">
        <div className="d-flex flex-column shadow card p-3 justify-content-center mt-3 bg-black border-success  " id='example-collapse-text'>
           <div className="">
            <button className="text-light btn btn-black"><i class="fa-solid fa-phone  me-2"></i>+91 923 6482 536</button>
            <hr className='mt-1 ms-5' style={{color:'white',width:'40%'}}/>
            <button className="btn-outline-success bg-black text-light  btn ">Contact on whatsapp<i class="fa-brands fa-whatsapp text-success ms-1"></i></button>
           </div>
        </div>
        </div>
      </Collapse>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default View;

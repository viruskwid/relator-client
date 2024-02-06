import React from "react";

function MyProperties() {
  return (
    <>
      <div
        style={{ width: "auto" }}
        class="card d-flex flex-row bg-black  border-success shadow"
      >
       <div>
            <img
              style={{ width: "90px", height: "90px" }}
              src="https://www.track2realty.track2media.com/wp-content/uploads/2011/02/overvew.jpg"
              class="card-img-top"
              alt="..."
            />
       </div>
        <div class="card-body d-flex justify-content-between ">
          <h5 class="card-title text-light ">Villa</h5>
          <div>
              <button className="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProperties;

import React from "react";
import "./box.css";

export const GiftBox = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12"></div>
        <div className="col-12 mt-5 d-flex justify-content-center">
          <div className="box">
            <div className="box-body">
              <div className="box-lid">
                <div className="box-bowtie"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

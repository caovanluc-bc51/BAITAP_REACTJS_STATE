import React, { Component } from "react";
import data from "../../data/dataGlasses.json";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
export default class BaiTapChonKinh extends Component {
  state = {
    urlImage: "./glassesImage/v1.png",
    glassName: data[0].name,
    description:data[0].desc,
  };
  handleGlass = (v) => {
    this.setState({
      urlImage: `./glassesImage/${v}.png`,
    });
  };
  handleTitleAndDesc = (index) =>{
    this.setState({
      glassName:data[index].name,
      description:data[index].desc,
    })
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <div className="text-center ">
              <img
                className="img-fluid item"
                src="./glassesImage/model.jpg"
                alt=""
              />
              <div className="overlay">
                <img
                  className="img-fluid"
                  src={this.state.urlImage}
                  alt=""
                />
              </div>
              <div className="card-body des">
                <h4>TÊN SẢN PHẨM: {this.state.glassName}</h4>
                <p>MÔ TẢ: {this.state.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2 pt-3">
            <div className="border d-flex align-items-center p-4 style">
              <img
                className="img-fluid"
                src="./glassesImage/g1.jpg"
                alt=""
                onClick={() => {this.handleGlass("v1");this.handleTitleAndDesc(0)}}
              ></img>
            </div>
          </div>
          <div className="col-2 pt-3">
            <div className="border d-flex align-items-center p-4 style">
              <img
                className="img-fluid"
                src="./glassesImage/g2.jpg"
                alt=""
                onClick={() => {this.handleGlass("v2");this.handleTitleAndDesc(1)}}
              ></img>
            </div>
          </div>
          <div className="col-2 pt-3">
            <div className="border d-flex align-items-center p-4 style">
              <img
                className="img-fluid"
                src="./glassesImage/g3.jpg"
                alt=""
                onClick={() => {this.handleGlass("v3");this.handleTitleAndDesc(2)}}
              ></img>
            </div>
          </div>
          <div className="col-2 pt-3">
            <div className="border d-flex align-items-center p-4 style">
              <img
                className="img-fluid"
                src="./glassesImage/g4.jpg"
                alt=""
                onClick={() => {this.handleGlass("v4");this.handleTitleAndDesc(3)}}
              ></img>
            </div>
          </div>
          <div className="col-2 pt-3">
            <div className="border d-flex align-items-center p-4 style">
              <img
                className="img-fluid"
                src="./glassesImage/g5.jpg"
                alt=""
                onClick={() => {this.handleGlass("v5");this.handleTitleAndDesc(4)}}
              ></img>
            </div>
          </div>
          <div className="col-2 pt-3">
            <div className="border d-flex align-items-center p-4 style">
              <img
                className="img-fluid"
                src="./glassesImage/g6.jpg"
                alt=""
                onClick={() => {this.handleGlass("v6");this.handleTitleAndDesc(5)}}
              ></img>
            </div>
          </div>
          <div className="col-2 pt-3">
            <div className="border d-flex align-items-center p-4 style">
              <img
                className="img-fluid"
                src="./glassesImage/g7.jpg"
                alt=""
                onClick={() => {this.handleGlass("v7");this.handleTitleAndDesc(6)}}
              ></img>
            </div>
          </div>
          <div className="col-2 pt-3">
            <div className="border d-flex align-items-center p-4 style">
              <img
                className="img-fluid"
                src="./glassesImage/g8.jpg"
                alt=""
                onClick={() => {this.handleGlass("v8");this.handleTitleAndDesc(7)}}
              ></img>
            </div>
          </div>
          <div className="col-2 pt-3">
            <div className="border d-flex align-items-center p-4 style">
              <img
                className="img-fluid"
                src="./glassesImage/g9.jpg"
                alt=""
                onClick={() => {this.handleGlass("v9");this.handleTitleAndDesc(8)}}
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import React, { useState, useEffect } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Mandala from "../../components/art/Mandala";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";

export default function Rdraw() {
  const [alpha, setalpha] = useState(200);
  const [boldness, setboldness] = useState(0);
  const [bordercolor, setbordercolor] = useState({
    rgb: { r: 25, g: 194, b: 209 },
  });
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  const handlealpha = (e) => {
    setalpha(e.target.value);
  };
  const handleboldness = (e) => {
    setboldness(e.target.value);
  };
  const handlebordercolor = (color) => {
    setbordercolor(color);
  };
  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };

  return (
    <>
      <div className="containerrrrr">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <h1 className="header-title">Mandala</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <span className="link-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              fugit beatae, dignissimos, ducimus exercitationem culpa a quo
              aperiam quibusdam aliquid autem delectus quos soluta eos sint ex
              vero doloribus. Iste?
            </span>
          </nav>
          <div className="main-art">
            <Mandala
              alph={alpha}
              bold={boldness}
              border={bordercolor}
              background={backgroundcolor}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div className="slider1">
              <h5>Alpha Value</h5>
              <Stack direction="row" alignItems="center" className="slider">
                50
                <PrettoSlider
                  min={50}
                  max={250}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={alpha}
                  onChange={handlealpha}
                />
                250
              </Stack>
            </div>
            <div className="slider1">
              <h5>StrokeWeight Of Border</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={2}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={boldness}
                  onChange={handleboldness}
                />
                2
              </Stack>
            </div>
            <div className="colorpicker">
              <h5>Border Color</h5>
              <SwatchesPicker
                color={bordercolor.rgb}
                onChangeComplete={handlebordercolor}
              />
            </div>
            <div className="colorpicker">
              <h5>Background Color</h5>
              <SwatchesPicker
                color={backgroundcolor.rgb}
                onChangeComplete={handlebackgroundcolor}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
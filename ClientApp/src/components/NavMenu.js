import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { InfoButton } from "./InfoButton";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header className="primary">
        <div className="primary-header">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="primary-header__flag"
            href="https://www.hsd.state.nm.us/lookingforinformation/community_assistance_and_community_services_block_grant/"
          >
            <svg
              className="primary-header__flag"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Layer_1"
              height="100px"
              fill="black"
              viewBox="0 0 1000 1000"
              enable-background=" 0 0 1000 1000"
            >
              <path
                className="flag-style"
                opacity="1.000000"
                stroke="none"
                d=" M257.000000,1001.000000   C194.641754,1001.000000 132.283524,1001.000000 69.545471,1000.542358   C69.159538,831.679382 69.151138,663.274109 69.147972,494.868866   C69.144920,332.615143 69.147934,170.361420 69.141190,8.107707   C69.141090,5.738470 69.049103,3.369236 69.000000,1.000000   C356.691559,1.000000 644.383118,1.000000 932.149658,1.345634   C932.433716,3.471223 932.825684,5.251161 932.825867,7.031133   C932.852844,300.161346 932.851746,593.291565 932.851746,886.421814   C932.851746,888.178528 932.851746,889.935242 932.851746,892.023560   C780.176941,892.023560 628.237488,892.023560 475.962433,892.023560   C473.797668,910.671875 463.233307,923.296753 447.727692,932.181396   C444.605377,933.970459 440.707275,935.309692 437.161774,935.321350   C379.005005,935.512390 320.847443,935.456848 262.690033,935.456848   C260.772125,935.456848 258.854187,935.456909 256.539520,935.456909   C256.539520,947.325012 256.479706,958.459473 256.556885,969.593018   C256.629425,980.062500 256.846527,990.531067 257.000000,1001.000000  M514.500000,812.975952   C588.990234,812.860168 663.480713,812.808838 737.970703,812.604675   C782.962585,812.481384 827.953613,812.097900 872.945435,811.914490   C876.227661,811.901062 878.081665,811.608459 878.087097,807.439026   C878.140198,766.674805 878.596741,725.910583 878.563721,685.146790   C878.522827,634.573669 877.936157,584.000854 877.935242,533.427917   C877.934204,476.977692 878.407654,420.527649 878.528076,364.077209   C878.724243,272.099091 878.801453,180.120682 878.928467,88.142395   C878.930969,86.370338 878.928772,84.598274 878.928772,82.739792   C634.433289,82.739792 390.544037,82.739792 146.013809,82.739792   C146.013809,363.365875 146.013809,643.538391 146.013809,923.699890   C157.079758,923.699890 168.025894,923.699890 179.490112,923.699890   C179.490112,900.731323 179.490112,877.985657 179.490112,854.843628   C248.604263,854.843628 317.197968,854.843628 385.650360,854.843628   C389.229156,837.358276 399.726257,825.849182 414.579407,817.658630   C420.519592,814.382996 426.573883,812.800781 433.507629,812.881592   C460.168518,813.192139 486.835358,812.988403 514.500000,812.975952  z"
              />

              <path
                className="flag-style"
                opacity="1.000000"
                stroke="none"
                d=" M263.792297,103.774101   C308.947571,83.517204 354.982239,80.399590 402.381500,93.008026   C450.525085,105.814461 483.996063,138.011505 512.833374,176.750031   C521.581726,166.583817 529.394043,157.056656 537.677856,147.958725   C569.085327,113.464493 607.869080,91.658302 654.155579,86.405441   C730.331055,77.760612 791.270508,105.981895 836.147400,167.885910   C860.390137,201.326797 873.137390,239.379700 876.093445,280.511658   C880.890930,347.265656 861.352051,406.028748 817.480530,456.726593   C744.344849,541.242065 671.343018,625.873291 598.283386,710.454590   C570.086975,743.097717 541.886841,775.737610 513.312683,808.813843   C507.419922,802.038147 501.649628,795.442139 495.920837,788.810303   C399.342499,677.007996 302.725281,565.239258 206.220978,453.373016   C175.895676,418.220428 157.620758,377.429993 151.900543,331.404388   C142.971893,259.563110 161.693268,196.063858 211.084641,142.401840   C225.986969,126.210960 243.443802,113.285767 263.792297,103.774101  z "
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="primary-header__title"
            href="https://www.linkedin.com/in/royclaudio/"
          >
            Roy Claudio{" "}
          </a>
          <InfoButton
            info=" 
          I moved to Albuqurque, New Mexico at the age of 2, I was born in Ciudad Juárez.
          I graduated with a Computer Science degree from UNM.
          Everyday I strive to set a good example for my family."
          />
        </div>
        <nav class="navMenu">
          <a href="/">Home</a>
          <a className="links" href="/fetch-data">
            Homeless
            <span className="dot"></span>
          </a>
          <a href="/counter">Administrators</a>
          <a className="links" href="/fetch-data">
            Resources
            <span className="dot"></span>
          </a>
          <a className="links">
            Links
            <span className="popuptext">
              <a href="https://www.cabq.gov/family/services/homeless-services">
                NM |&nbsp; Resources{" "}
              </a>
              <a href="https://www.rentassistance.us">
                {" "}
                US |&nbsp; Rent Assistance
              </a>
              <a href="https://www.publichousing.com">
                {" "}
                US |&nbsp;Public Housing
              </a>
            </span>
          </a>
          <div class="dot"></div>
        </nav>
      </header>
    );
  }
}

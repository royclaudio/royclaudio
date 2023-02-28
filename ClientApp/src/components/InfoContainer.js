import React, { Component } from "react";
import "./InfoContainerStyle.css";

export class InfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }
  clicked() {
    if (this.state.hide === false) {
      this.setState({
        hide: true,
      });
    } else {
      this.setState({
        hide: false,
      });
    }
  }
  clickedshare() {
    if (this.state.share === false) {
      this.setState({
        share: true,
      });
    } else {
      this.setState({
        share: false,
      });
    }
  }
  render() {
    let infobio =
      "204 Beds (188 beds during the winter season beginning November 15 to March 15 only)Clientele: Single Males and Single Females; 204 Beds (188 beds during the winter season beginning November 15 to March 15 only)Clientele: Single Males and Single Females.";
    let title = "Albuquerque Rescue Mission - steelbridge";
    let Picturesrc =
      "https://www.homelessshelterdirectory.org/gallery/1444__txu.jpg";
    let Address = "525 2nd St SW Albuquerque, NM - 87102";
    return (
      <div className="container-info">
        <div className="info-header">
          <h6>{this.props.type}</h6>
          <h2>
            <a
              target="_blank"
              className="title-style"
              href="https://twitter.com/home"
            >
              {this.props.title}
            </a>
          </h2>
        </div>
        <div className="grid-container">
          <button
            className={
              this.state.hide ? "profilebutton active" : "profilebutton"
            }
            onClick={() => this.clicked()}
          >
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#5b85b9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  opacity="0.4"
                  d="M10.7402 15.5302L14.2602 12.0002L10.7402 8.47021"
                  stroke="#5b85b9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
          <button className="searchbutton">
            <a
              target="_blank"
              href={
                "http://www.google.co.in/search?q=" +
                this.props.title +
                " " +
                this.props.address
              }
            >
              <svg
                fill="#000000"
                height="50px"
                width="50px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M169.015,271.195c1.081,20.695,4.306,41.847,9.315,61.643h48.093v-61.643H169.015z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M391.974,179.162h-54.818c4.716,20.089,7.73,41.128,8.746,61.643h63.895C407.824,218.778,401.615,197.952,391.974,179.162 z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M91.262,179.162c-9.642,18.79-15.85,39.616-17.824,61.643h65.145c0.959-20.738,3.842-41.667,8.428-61.643H91.262z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M178.33,179.162c-5.007,19.796-8.234,40.949-9.315,61.643h57.408v-61.643H178.33z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M138.584,271.195H73.438c1.974,22.027,8.182,42.853,17.824,61.643h55.75C142.426,312.862,139.542,291.933,138.584,271.195 z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M345.903,271.195c-1.016,20.515-4.031,41.554-8.746,61.643h54.818c9.642-18.79,15.85-39.616,17.824-61.643H345.903z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M305.216,99.572c4.992,7.671,9.689,16.313,14.038,25.889c3.342,7.36,6.412,15.175,9.197,23.31h43.531 C354.278,127.286,331.372,110.245,305.216,99.572z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M164.573,386.433c-3.284-7.383-6.291-15.151-9.008-23.205h-44.312c17.83,21.639,40.935,38.771,67.324,49.427 C173.581,404.901,168.895,396.145,164.573,386.433z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M192.339,137.922c-1.558,3.502-3.046,7.129-4.469,10.85h38.553V91.881C214.35,99.302,202.453,115.193,192.339,137.922z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M111.255,148.772h44.311c2.717-8.053,5.722-15.822,9.009-23.205c4.321-9.712,9.007-18.468,14.005-26.223 C152.19,110.002,129.085,127.134,111.255,148.772z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M187.87,363.227c1.423,3.722,2.911,7.348,4.469,10.85c10.114,22.729,22.01,38.62,34.083,46.041v-56.891H187.87z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M256.813,91.79v56.981h39.301C285.465,121.593,271.517,100.671,256.813,91.79z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M328.451,363.227L328.451,363.227c-2.785,8.136-5.856,15.95-9.198,23.31c-4.348,9.576-9.045,18.218-14.038,25.889 c26.156-10.673,49.062-27.714,66.766-49.199H328.451z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M256.813,363.228v56.981c14.704-8.882,28.652-29.803,39.301-56.981H256.813z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M305.922,179.162h-49.109v61.643h58.681C314.374,219.54,310.973,198.517,305.922,179.162z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M256.813,271.195v61.643h49.109c5.051-19.355,8.451-40.378,9.572-61.643H256.813z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M501.316,313.259l-27.683,10.397c6.37-21.832,9.603-44.473,9.603-67.656c0-64.538-25.134-125.214-70.768-170.85 c-45.635-45.636-106.311-70.768-170.85-70.768S116.404,39.515,70.768,85.149C25.133,130.785,0,191.461,0,256 s25.133,125.214,70.768,170.85c45.636,45.636,106.311,70.768,170.85,70.768s125.213-25.133,170.85-70.768l-21.489-21.489 c-39.897,39.896-92.941,61.867-149.361,61.867C125.147,467.228,30.39,372.471,30.39,256S125.147,44.772,241.618,44.772 S452.847,139.529,452.847,256c0,16.627-1.903,32.931-5.652,48.783l-7.286-19.399l-1.267,0.476l-27.183,10.209l13.901,37.014 l13.549,36.076l73.09-27.45L501.316,313.259z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
          </button>
          <div>
            <div className="">
              <div className="sharecontainer">
                <button
                  className={this.state.share ? "socials active" : "socials"}
                >
                  <a
                    target="_blank"
                    href={
                      "https://www.linkedin.com/search/results/all/?keywords=" +
                      this.props.title +
                      "&origin=GLOBAL_SEARCH_HEADER&sid=uPE"
                    }
                  >
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <rect
                          x="2"
                          y="2"
                          width="28"
                          height="28"
                          rx="14"
                          fill="#1275B1"
                        ></rect>{" "}
                        <path
                          d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
                          fill="white"
                        ></path>{" "}
                        <path
                          d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z"
                          fill="white"
                        ></path>{" "}
                        <path
                          d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
                          fill="white"
                        ></path>{" "}
                      </g>
                    </svg>
                  </a>
                </button>
                <button
                  className={this.state.share ? "socials active" : "socials"}
                >
                  <a
                    target="_blank"
                    href={
                      "https://www.facebook.com/search/top?q=" +
                      this.props.title
                    }
                  >
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#1877F2"
                          d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                        ></path>
                        <path
                          fill="#ffffff"
                          d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </button>
                <button
                  className={
                    this.state.share ? "sharebutton active" : "sharebutton"
                  }
                  onClick={() => this.clickedshare()}
                >
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M8.5 10H6.5C6.22386 10 6 10.2239 6 10.5V19.5C6 19.7761 6.22386 20 6.5 20H16.5C16.7761 20 17 19.7761 17 19.5V10.5C17 10.2239 16.7761 10 16.5 10H14.5"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M11.5 14V3M11.5 3L8 6M11.5 3L15 6"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
                <button
                  className={this.state.share ? "socials active" : "socials"}
                >
                  <a
                    href={
                      "https://twitter.com/search?q=" +
                      this.props.title +
                      "&src=typed_query"
                    }
                  >
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          fill="#1DA1F2"
                        ></circle>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z"
                          fill="white"
                        ></path>{" "}
                      </g>
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.hide ? (
          <div className="moreinfoslide">
            <h6>
              <a
                className="title-style"
                href={
                  "http://www.google.co.in/search?q=" +
                  this.props.title +
                  " " +
                  this.props.address
                }
              >
                {this.props.address}
              </a>
            </h6>
            <p>{this.props.info}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default InfoContainer;

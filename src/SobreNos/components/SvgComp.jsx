function SVGBackground() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,160L48,186.7C96,213,192,267,288,256C384,245,480,171,576,144C672,117,768,139,864,149.3C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
  
  export default SVGBackground;
  
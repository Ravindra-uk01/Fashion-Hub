import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <span className="topbarIcon">icon</span>
          </div>
          <div className="topbarIconContainer">
            <span className="topbarIcon">icon</span>
          </div>
          <div className="topbarIconContainer">
            <span className="topbarIcon">icon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

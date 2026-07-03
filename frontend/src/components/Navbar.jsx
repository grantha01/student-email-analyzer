import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-left">

        <div className="logo">
          📧
        </div>

        <div className="logo-text">
          <h2>AI Student Email Analyzer</h2>
          <p>Understand Emails in Seconds</p>
        </div>

      </div>

      <div className="navbar-right">

        <div className="avatar">
          G
        </div>

        <div className="user-info">
          <h3>Grantha</h3>
          <p>Student</p>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
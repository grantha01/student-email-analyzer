import "../styles/Sidebar.css";

function Sidebar() {
  const menuItems = [
    { icon: "🏠", name: "Dashboard" },
    { icon: "📧", name: "Email Analyzer" },
    { icon: "📂", name: "History" },
    { icon: "⚙️", name: "Settings" },
  ];

  return (
    <div className="sidebar">

      <h2 className="sidebar-title">
        Navigation
      </h2>

      {menuItems.map((item) => (

        <div
          key={item.name}
          className="menu-item"
        >
          <span className="menu-icon">
            {item.icon}
          </span>

          <span>
            {item.name}
          </span>

        </div>

      ))}

      <hr />

      <p className="version">
        Version 1.0
      </p>

    </div>
  );
}

export default Sidebar;
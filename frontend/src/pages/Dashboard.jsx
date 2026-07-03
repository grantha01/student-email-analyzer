import "../styles/Dashboard.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EmailInput from "../components/EmailInput";
import UploadSection from "../components/UploadSection";
import AnalyzeButton from "../components/AnalyzeButton";
import ResultsGrid from "../components/ResultsGrid";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1 className="dashboard-title">
            AI Student Email Analyzer
          </h1>

          <p className="dashboard-subtitle">
            Paste an email or upload a file and let AI analyze it.
          </p>

          <div className="top-section">
            <EmailInput />

            <div className="actions-row">
              <UploadSection />

              <AnalyzeButton />
            </div>
          </div>

          <ResultsGrid />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        📧 Student Email Analyzer
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        AI-Powered Smart Email Assistant for Students
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Login with Google
      </button>
    </div>
  );
}

export default Home;
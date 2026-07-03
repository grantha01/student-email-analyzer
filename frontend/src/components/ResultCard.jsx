import "../styles/ResultCard.css";

function ResultCard({ title, content }) {
  return (
    <div className="result-card">
      <h3 className="result-title">{title}</h3>

      <p className="result-content">
        {content || "Waiting for AI analysis..."}
      </p>
    </div>
  );
}

export default ResultCard;
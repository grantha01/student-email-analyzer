import "../styles/ResultsGrid.css";
import ResultCard from "./ResultCard";

function ResultsGrid() {
  const cards = [
    "Summary",
    "Tone",
    "Spam Detection",
    "Grammar Suggestions",
    "Important Deadlines",
    "Action Items",
    "Suggested Reply",
    "Confidence Score",
  ];

  return (
    <section className="results-section">
      <h2 className="results-title">Analysis Results</h2>

      <div className="results-grid">
        {cards.map((title) => (
          <ResultCard
            key={title}
            title={title}
            content=""
          />
        ))}
      </div>
    </section>
  );
}

export default ResultsGrid;
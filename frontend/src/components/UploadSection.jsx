function UploadSection() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Upload TXT / PDF</h2>

      <input
        type="file"
        accept=".txt,.pdf"
        style={{
          marginTop: "10px",
        }}
      />
    </div>
  );
}

export default UploadSection;
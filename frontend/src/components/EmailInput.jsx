function EmailInput() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Paste Email</h2>

      <textarea
        placeholder="Paste your email here..."
        rows="12"
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          resize: "vertical",
        }}
      />
    </div>
  );
}

export default EmailInput;
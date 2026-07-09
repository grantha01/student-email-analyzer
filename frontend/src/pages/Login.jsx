function Login() {

  const handleGoogleLogin = () => {
    window.location.href =
      "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "120px",
      }}
    >
      <h1>Student Email Analyzer</h1>

      <p>Login using your Google Account</p>

      <button
        onClick={handleGoogleLogin}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Continue with Google
      </button>
    </div>
  );
}

export default Login;
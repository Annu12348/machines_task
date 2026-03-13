import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleSuccess = () => {
  const navigate = useNavigate();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      setHasToken(true);
    }
  }, []);

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Google sign-in successful</h2>
        <p className="text-slate-500 mb-6">
          {hasToken
            ? "Your account has been authenticated. Click continue to go to dashboard."
            : "Finalizing your sign-in. Please wait..."}
        </p>
        <button
          onClick={handleContinue}
          disabled={!hasToken}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GoogleSuccess;
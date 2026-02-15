import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../utils/axios";

const ProtectRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await instance.get("/me", { withCredentials: true }); 
        setIsAuth(true);
      } catch (error) {
        setIsAuth(false);
        navigate("/login"); 
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  return isAuth ? children : null;
};

export default ProtectRoutes;

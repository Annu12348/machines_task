import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../utils/axios";
import { useDispatch } from "react-redux";
import { setAdminUser } from "../redux/reducer/AdminUserSlice";

const ProtectRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await instance.get("/me", { withCredentials: true }); 
        setIsAuth(true);
        dispatch(setAdminUser(result.data.admin))
      } catch (error) {
        setIsAuth(false);
        navigate("/login"); 
        dispatch(setAdminUser(null))
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return isAuth ? children : null;
};

export default ProtectRoutes;

import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";
import Sensor from "./pages/sensor/Tables";
import Node from "./pages/node/Tables";
import User from "./pages/user/Tables";
import Maps from "./pages/Maps";
import React, { useState } from "react";

import Footer from "./components/Footer";

// Tailwind CSS Style Sheet
import "./assets/styles/tailwind.css";
import Login from "./pages/Login";
import Cookies from "universal-cookie";
import axios from "./api/axios";
import { useQuery } from "react-query";
import ProfileCard from "components/ProfileCard";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

const cookies = new Cookies();
const VALIDATE_TOKEN_URL = "/api/ValidateTokenAdmin";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { isLoading, error, data, isFetching } = useQuery(
    ["isLogin"],
    () => isAuth(),
    { keepPreviousData: true }
  );
  const isAuth = async () => {
    let token = cookies.get("token");
    if (token) {
      try {
        const res = await axios.get(VALIDATE_TOKEN_URL, {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        });

        if (res.data?.status) {
          setIsLogin(res.data?.status);
          return res.data.status;
        } else {
          cookies.remove("token");
          setIsLogin(false);
        }
      } catch (err) {
        cookies.remove("token");
        setIsLogin(false);
      }
    } else {
      cookies.remove("token");
      setIsLogin(false);
    }
  };

  return (
    <>
      {/* {isLoading && "isLoading"}
      {error && "error"}
      {isFetching && "isFetching"} */}
      {!isLogin ? (
        <Routes>
          <Route exact element={<PublicRoute isAuthenticated={isLogin} />}>
            <Route exact path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />

          </Route>
        </Routes>
      ) : (
        <>
          <Sidebar />
          <div className="md:ml-64">
            <Routes>
              <Route exact element={<PrivateRoute isAuthenticated={isLogin} />}>
                <Route path="/sensors" element={<Sensor />} />
              </Route>
              <Route exact element={<PrivateRoute isAuthenticated={isLogin} />}>
                <Route path="/nodes" element={<Node />} />
              </Route>
              <Route exact element={<PrivateRoute isAuthenticated={isLogin} />}>
                <Route path="/" element={<Dashboard />} />
              </Route>
              <Route exact element={<PrivateRoute isAuthenticated={isLogin} />}>
                <Route path="/users" element={<User />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default App;

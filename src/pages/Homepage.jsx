import React, { useEffect } from "react";
import Hero from "../components/Hero";
import TrendingBlogs from "../components/TrendingBlogs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Homepage = () => {
  const isVerified = useSelector((state) => state.isVerified.value);
  const expiry = useSelector((state) => state.isVerified.expiry);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isVerified || expiry < Date.now()) {
      navigate("/captcha");
    }
  },[]);

  return (
    <>
      <Hero />
      <TrendingBlogs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Homepage;

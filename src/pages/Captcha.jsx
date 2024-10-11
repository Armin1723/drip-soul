import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../redux/features/captcha/verificationSlice";
import { useNavigate } from "react-router-dom";
import VisitorAPI from "visitorapi";

const Loader = () => {
  return (
    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
  );
};

const Captcha = () => {
  const isVerified = useSelector((state) => state.isVerified.value);
  const expiry = useSelector((state) => state.isVerified.expiry);
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isVerified && expiry > Date.now() + 100) {
      navigate("/");
    }
  }, []);

  const dispatch = useDispatch();

  const startVerification = () => {
    setState({ isLoading: true });
    // VisitorAPI(
    //     "dGQmy2yaXMhGshUFyGtr",
    //     data => {
    //         console.log(data);
    //     }
    // );
    setTimeout(() => {
      setState({ isLoading: false });
      dispatch(verify());
      navigate("/");
    }, 1000);
    
  };
  return (
    <div className="container flex h-screen w-screen justify-center items-start">
      <div className="captchaBox hover:shadow-[0_0_50px_#1c1c1c] bg-gray-300 flex gap-4 justify-between items-center border-2 rounded-lg mt-12 p-4 px-12 border-gray-700 shadow-[0_0_25px#1c1c1c]">
        <div className="flex rounded-lg border-lg justify-center items-center p-2">
          {state.isLoading ? (
            <Loader />
          ) : (
            <div
              className="rounded-lg border border-black w-6 aspect-square cursor-pointer"
              onClick={() => startVerification()}
            ></div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <p>Verify Your Identity.</p>
        </div>
      </div>
    </div>
  );
};

export default Captcha;

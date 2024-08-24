import axios from "axios";
import * as React from "react";
import {useNavigate} from 'react-router-dom'

interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = () => {
  // Handle logout logic here
  const navigate=useNavigate()
  const handleLogout = async() => {
    console.log("Logging out...");
    // Implement logout functionality here, e.g., clear cookies, redirect to login page

    try {
      const response = await axios.post("http://localhost:3000/user/logout",{}, {
        withCredentials: true,
      });
      // console.log("fdvef",response.data.id);

      if (response.status === 200) {
        navigate('/login')
        console.log("Logout sucessfully",response.data.message);
      } else {
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error in Axios request:",
          error.response?.data || error.message
        );
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <>
      <div className="bg-slate-900">
        <div className="container p-2 mx-auto">
          <nav className="py-5 flex items-center justify-between">
            <div className="text-base text-white">URLShotner</div>
            <button
              onClick={handleLogout}
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

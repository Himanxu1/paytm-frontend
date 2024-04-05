import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
    const { username } = useContext(UserContext);
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    };

    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
                PayTM App
            </div>
            <div
                className="flex"
                onMouseEnter={() => setShowLogout(true)}
                onMouseLeave={() => setShowLogout(false)}
            >
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello {username}
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div
                        className="flex flex-col justify-center h-full text-xl"
                        onClick={handleLogout}
                    >
                        U
                    </div>
                    {showLogout && (
                        <div className="absolute p-2 p-4 top-14 right-10 bg-white border border-gray-200 p-2 rounded shadow">
                           <div className="flex flex-col">
                            <button onClick={handleLogout} className="p-2 hover:text-red-400">Logout</button>
                          
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

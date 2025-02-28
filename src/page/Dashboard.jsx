import React, { useState } from "react";
import Sidebar from "../component/SideBar";
import Header from "../component/Header";
import QuickAccess from "../component/QuickAccess";
import Analytics from "../component/Analytics";
import ChartCard from "../component/ChartCard";
import RecentCardRequests from "../component/RecentCardRequests";
import PieCharts from "../component/PieChart";
import LineCharts from "../component/LineCharts";
import { FiTrash2, FiEdit2, FiSearch, FiPlus } from "react-icons/fi";
import CardSchemeModal from "../component/CardSchemeModal";
import CardRequest from "../component/CardRequest";
import CardRequestDetails from "../component/RequestDetails";
import Success from "../component/Success";
import CardProfile from "../component/CardProfile";
import ProfileDetails from "../component/ProfileDetails";
import AddProfile from "../component/AddProfile";
import CardScheme from "../component/CardScheme";

function Dashboard() {
  const [SidebarSelected, setSidebarSelected] = useState("Request Details");
  const data = [
    { scheme: "Verve1", panLength: 18 },
    { scheme: "Verve2", panLength: 18 },
    { scheme: "Verve3", panLength: 18 },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [RequestDetails, setRequestDetails] = useState()
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [isAddProfileOpen, setIsAddProfileOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingScheme, setEditingScheme] = useState(null);




  return (
    <div className="flex">
      <Sidebar setSidebarSelected={setSidebarSelected} />
      <div className="flex-1 bg-[#F8FBFF]">
        <Header  
          title={SidebarSelected}
        />
        {SidebarSelected === "Dashboard" && (
          <div>
            <div className="px-5 -mt-3">
              <h2 className="text-xl font-bold mb-2">
                Hi Nazeer, what would you like to do today?
              </h2>
              <p className="text-gray-500 -mt-1 mb-4">
                Last login: 26/11/2024 14:39:58
              </p>
            </div>
            <div className="px-5">
              <QuickAccess />
              <div className="flex items-center justify-between mb-3 -mt-3 gap-2">
                <p className="text-2xl font-semibold">Analytics</p>
                <hr className="w-full border-t border-[#E2E2E2] mt-2" />
              </div>
              <Analytics />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mx-5">
              <ChartCard title="Monthly Issuance" />
              <RecentCardRequests />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-5 mb-5">
              <LineCharts title="This Week's Income" />
              <PieCharts title="Card Status Distribution" />
            </div>
          </div>
        )}
        {SidebarSelected === "Branch" && (
          <div>
            <h1>Branch</h1>
          </div>
        )}
        {SidebarSelected === "Role" && (
          <div>
            <h1>Role</h1>
          </div>
        )}
        {SidebarSelected === "Users" && (
          <div>
            <h1>Users</h1>
          </div>
        )}
        {SidebarSelected === "Card Scheme" && (
          <CardScheme 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            editingScheme={editingScheme}
            setEditingScheme={setEditingScheme}
          />
        )}
        <CardSchemeModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingScheme(null);
          }}
          editingScheme={editingScheme}
        />
        {SidebarSelected === "Card Profile" && (
          <CardProfile 
            setSidebarSelected={setSidebarSelected}
          />
        )}
        {SidebarSelected === "Create Profile" && (
          <ProfileDetails 
            setIsAddProfileOpen={setIsAddProfileOpen}
          />
        )}
        <AddProfile 
            isOpen={isAddProfileOpen}
            onClose={()=> setIsAddProfileOpen(false)}
        />

        {SidebarSelected === "Card Request" && <CardRequest setSidebarSelected={setSidebarSelected} />}
        {SidebarSelected === "Request Details" && <CardRequestDetails setIsSuccessOpen={setIsSuccessOpen} />}
        <Success 
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
        />

      </div>
    </div>
  );
}

export default Dashboard;

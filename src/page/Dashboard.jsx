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

function Dashboard() {
  const [SidebarSelected, setSidebarSelected] = useState("Dashboard");
  const data = [
    { scheme: "Verve", panLength: 18 },
    { scheme: "Verve", panLength: 18 },
    { scheme: "Verve", panLength: 18 },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar setSidebarSelected={setSidebarSelected} />
      <div className="flex-1 bg-[#F8FBFF]">
        <Header />
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
          <div className="px-6 bg-gray-50 min-h-screen">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Card Scheme</h2>
              <p className="text-gray-500 -mt-1 mb-2">
                Add, view and edit card schemes here.
              </p>
            </div>
            <hr className="w-full border-t border-[#98A2B3] mb-4" />

            <div className="flex justify-between items-center mb-4">
              <div className="relative w-1/3">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by scheme name"
                  className="w-[400px] pl-10 pr-4 py-2 border border-[#D0D5DD] bg-white rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#014DAF] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#014DAF] cursor-pointer"
              >
                <FiPlus /> Add Scheme
              </button>
            </div>

            <hr className="w-full border-t border-[#98A2B3] mb-4" />

            <div className="bg-white rounded-sm overflow-hidden">
              <table className="w-full border-collapse">
                <thead className="bg-[#F9FAFB] font-extralight text-[#475467] border border-[#EAECF0] text-left">
                  <tr>
                    <th className="p-3 border-r border-[#EAECF0]">
                      Scheme Name
                    </th>
                    <th className="p-3 border-r border-[#EAECF0]">
                      PAN Length
                    </th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className="border border-[#EAECF0]">
                      <td className="p-3 border-r border-[#EAECF0]">
                        {row.scheme}
                      </td>
                      <td className="p-3 border-r border-[#EAECF0]">
                        {row.panLength}
                      </td>
                      <td className="p-3 flex gap-3">
                        <button className="text-[#475467]">
                          <FiTrash2 />
                        </button>
                        <button className="text-[#475467]">
                          <FiEdit2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <CardSchemeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {SidebarSelected === "Card Request" && <CardRequest />}
      </div>
    </div>
  );
}

export default Dashboard;

import { Users, Search, Plus, Edit, Trash2, Eye } from "lucide-react";
import Layout from "@/components/Layout";

export default function Patients() {
  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 45,
      gender: "Male",
      status: "Active",
      department: "Cardiology",
      phone: "+1 (555) 123-4567",
      email: "john.doe@email.com",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 32,
      gender: "Female",
      status: "Active",
      department: "Orthopedics",
      phone: "+1 (555) 234-5678",
      email: "sarah.j@email.com",
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 58,
      gender: "Male",
      status: "Admitted",
      department: "Neurology",
      phone: "+1 (555) 345-6789",
      email: "michael.b@email.com",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 27,
      gender: "Female",
      status: "Active",
      department: "Emergency",
      phone: "+1 (555) 456-7890",
      email: "emily.d@email.com",
    },
    {
      id: 5,
      name: "Robert Wilson",
      age: 61,
      gender: "Male",
      status: "Discharged",
      department: "Cardiology",
      phone: "+1 (555) 567-8901",
      email: "robert.w@email.com",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-blue-100 text-blue-800";
      case "Admitted":
        return "bg-orange-100 text-orange-800";
      case "Discharged":
        return "bg-slate-100 text-slate-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Patients</h1>
            <p className="text-slate-600">Manage and view all patient records</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            <Plus size={20} /> Add Patient
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search patients by name, ID, or phone..."
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Admitted</option>
            <option>Discharged</option>
          </select>
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Age</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Gender</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Department</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="border-b border-slate-200 hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{patient.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{patient.age}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{patient.gender}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{patient.department}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full font-semibold text-xs ${getStatusColor(patient.status)}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{patient.phone}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded transition">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded transition">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-slate-600">Showing 1-5 of 2,450 patients</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              1
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition">
              2
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition">
              3
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

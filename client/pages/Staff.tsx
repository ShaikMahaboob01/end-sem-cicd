import { Users, Search, Plus, Mail, Phone, Briefcase, MapPin, Edit, Trash2, Eye } from "lucide-react";
import Layout from "@/components/Layout";

export default function Staff() {
  const staffMembers = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Senior Cardiologist",
      department: "Cardiology",
      email: "s.mitchell@hospital.com",
      phone: "+1 (555) 123-4567",
      status: "On Duty",
      specialization: "Cardiac Surgery",
    },
    {
      id: 2,
      name: "Dr. Michael Brown",
      role: "Orthopedic Surgeon",
      department: "Orthopedics",
      email: "m.brown@hospital.com",
      phone: "+1 (555) 234-5678",
      status: "On Duty",
      specialization: "Joint Replacement",
    },
    {
      id: 3,
      name: "Dr. James Wilson",
      role: "Neurologist",
      department: "Neurology",
      email: "j.wilson@hospital.com",
      phone: "+1 (555) 345-6789",
      status: "Off Duty",
      specialization: "Neurosurgery",
    },
    {
      id: 4,
      name: "Dr. Jennifer Lee",
      role: "Emergency Medicine Specialist",
      department: "Emergency",
      email: "j.lee@hospital.com",
      phone: "+1 (555) 456-7890",
      status: "On Duty",
      specialization: "Trauma Care",
    },
    {
      id: 5,
      name: "Nurse Maria Garcia",
      role: "Head Nurse",
      department: "Cardiology",
      email: "m.garcia@hospital.com",
      phone: "+1 (555) 567-8901",
      status: "On Duty",
      specialization: "Patient Care",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Duty":
        return "bg-green-100 text-green-800";
      case "Off Duty":
        return "bg-slate-100 text-slate-800";
      case "On Leave":
        return "bg-yellow-100 text-yellow-800";
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
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Staff Management</h1>
            <p className="text-slate-600">Manage doctors, nurses, and hospital staff</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            <Plus size={20} /> Add Staff
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search staff by name, role, or department..."
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>All Departments</option>
            <option>Cardiology</option>
            <option>Orthopedics</option>
            <option>Neurology</option>
            <option>Emergency</option>
          </select>
          <select className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>All Statuses</option>
            <option>On Duty</option>
            <option>Off Duty</option>
            <option>On Leave</option>
          </select>
        </div>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {staffMembers.map((staff) => (
            <div key={staff.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{staff.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{staff.role}</p>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full font-semibold text-xs ${getStatusColor(staff.status)}`}>
                  {staff.status}
                </span>
              </div>

              <div className="space-y-2 mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2 text-slate-600">
                  <Briefcase size={18} />
                  <span className="text-sm">{staff.department}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  <span className="text-sm">{staff.specialization}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail size={18} />
                  <span className="text-sm">{staff.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone size={18} />
                  <span className="text-sm">{staff.phone}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition font-semibold text-sm">
                  <Eye size={16} /> View
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition font-semibold text-sm">
                  <Edit size={16} /> Edit
                </button>
                <button className="px-3 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Department Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department Distribution */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Staff by Department</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">Cardiology</p>
                  <p className="text-sm text-slate-600">12 staff</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "67%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">Orthopedics</p>
                  <p className="text-sm text-slate-600">10 staff</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "56%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">Neurology</p>
                  <p className="text-sm text-slate-600">8 staff</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "44%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">Emergency</p>
                  <p className="text-sm text-slate-600">15 staff</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: "83%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">Administrative</p>
                  <p className="text-sm text-slate-600">9 staff</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-cyan-600 h-2 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Summary */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Duty Status Overview</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-green-900">Staff On Duty</p>
                  <p className="text-2xl font-bold text-green-600">72</p>
                </div>
                <p className="text-xs text-green-700 mt-1">Currently active and working</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">Staff Off Duty</p>
                  <p className="text-2xl font-bold text-slate-600">10</p>
                </div>
                <p className="text-xs text-slate-600 mt-1">Currently off duty</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-yellow-900">On Leave</p>
                  <p className="text-2xl font-bold text-yellow-600">5</p>
                </div>
                <p className="text-xs text-yellow-700 mt-1">On approved leave</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-blue-900">Total Staff</p>
                  <p className="text-2xl font-bold text-blue-600">89</p>
                </div>
                <p className="text-xs text-blue-700 mt-1">Hospital workforce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

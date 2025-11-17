import { Calendar, Search, Plus, Clock, User, MapPin, Phone } from "lucide-react";
import Layout from "@/components/Layout";

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      doctor: "Dr. Sarah Mitchell",
      date: "2024-01-15",
      time: "09:00 AM",
      department: "Cardiology",
      status: "Scheduled",
      room: "Room 101",
    },
    {
      id: 2,
      patientName: "Sarah Johnson",
      doctor: "Dr. Michael Brown",
      date: "2024-01-15",
      time: "10:30 AM",
      department: "Orthopedics",
      status: "Scheduled",
      room: "Room 205",
    },
    {
      id: 3,
      patientName: "Michael Brown",
      doctor: "Dr. James Wilson",
      date: "2024-01-15",
      time: "02:00 PM",
      department: "Neurology",
      status: "In Progress",
      room: "Room 301",
    },
    {
      id: 4,
      patientName: "Emily Davis",
      doctor: "Dr. Jennifer Lee",
      date: "2024-01-15",
      time: "03:30 PM",
      department: "Emergency",
      status: "Completed",
      room: "ER-01",
    },
    {
      id: 5,
      patientName: "Robert Wilson",
      doctor: "Dr. David Garcia",
      date: "2024-01-16",
      time: "10:00 AM",
      department: "Cardiology",
      status: "Scheduled",
      room: "Room 102",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "bg-blue-100 text-blue-800";
      case "In Progress":
        return "bg-orange-100 text-orange-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
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
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Appointments</h1>
            <p className="text-slate-600">Schedule and manage patient appointments</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            <Plus size={20} /> Schedule Appointment
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search appointments by patient name or doctor..."
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>All Statuses</option>
            <option>Scheduled</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>

        {/* Appointments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{appointment.patientName}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-600">
                      <User size={18} />
                      <span className="text-sm">Dr. {appointment.doctor.replace("Dr. ", "")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={18} />
                      <span className="text-sm">{appointment.department} - {appointment.room}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={18} />
                      <span className="text-sm">{appointment.date} at {appointment.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`inline-block px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition text-sm font-semibold">
                      Edit
                    </button>
                    <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition text-sm font-semibold">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Schedule */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Upcoming Schedule Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-blue-600" size={24} />
                <span className="text-sm text-slate-600">Morning (6 AM - 12 PM)</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">32</p>
              <p className="text-xs text-slate-600 mt-1">appointments scheduled</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-orange-600" size={24} />
                <span className="text-sm text-slate-600">Afternoon (12 PM - 6 PM)</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">42</p>
              <p className="text-xs text-slate-600 mt-1">appointments scheduled</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-purple-600" size={24} />
                <span className="text-sm text-slate-600">Evening (6 PM - 12 AM)</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">18</p>
              <p className="text-xs text-slate-600 mt-1">appointments scheduled</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-green-600" size={24} />
                <span className="text-sm text-slate-600">Total Today</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">156</p>
              <p className="text-xs text-slate-600 mt-1">appointments scheduled</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { BarChart3, Users, Calendar, Activity, TrendingUp, Clock, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">Welcome back to Hospital Management System</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Patients */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Total Patients</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">2,450</p>
                <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                  <TrendingUp size={16} /> +12% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          {/* Today's Appointments */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Today's Appointments</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">156</p>
                <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                  <TrendingUp size={16} /> +8 pending
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          {/* Active Staff */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Active Staff</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">89</p>
                <p className="text-slate-600 text-sm mt-2 flex items-center gap-1">
                  <Clock size={16} /> 23 on duty
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Activity className="text-purple-600" size={24} />
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">System Status</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">99.9%</p>
                <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                  <Activity size={16} /> All systems operational
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-orange-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition text-center">
                <div className="text-2xl mb-2">➕</div>
                <p className="text-sm font-semibold text-slate-900">Add Patient</p>
              </button>
              <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition text-center">
                <div className="text-2xl mb-2">📅</div>
                <p className="text-sm font-semibold text-slate-900">Book Appointment</p>
              </button>
              <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition text-center">
                <div className="text-2xl mb-2">👨‍⚕️</div>
                <p className="text-sm font-semibold text-slate-900">Add Staff</p>
              </button>
              <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition text-center">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm font-semibold text-slate-900">View Reports</p>
              </button>
              <button className="p-4 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition text-center">
                <div className="text-2xl mb-2">📋</div>
                <p className="text-sm font-semibold text-slate-900">Manage Records</p>
              </button>
              <button className="p-4 bg-rose-50 hover:bg-rose-100 rounded-lg transition text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <p className="text-sm font-semibold text-slate-900">Settings</p>
              </button>
            </div>
          </div>

          {/* Alerts & Notifications */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Alerts</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertCircle className="text-yellow-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-semibold text-yellow-900">Bed Availability Low</p>
                  <p className="text-xs text-yellow-700">Only 5 beds available</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-semibold text-blue-900">Maintenance Scheduled</p>
                  <p className="text-xs text-blue-700">Tonight 2-4 AM</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <Activity className="text-green-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-semibold text-green-900">All Critical Tests Passed</p>
                  <p className="text-xs text-green-700">CI/CD deployment successful</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Patient Admission: John Doe</p>
                  <p className="text-xs text-slate-600">Ward A - Room 102</p>
                </div>
                <p className="text-xs text-slate-500">2 hours ago</p>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Appointment Completed: Jane Smith</p>
                  <p className="text-xs text-slate-600">Cardiology</p>
                </div>
                <p className="text-xs text-slate-500">4 hours ago</p>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <p className="text-sm font-semibold text-slate-900">New Staff Added: Dr. Michael</p>
                  <p className="text-xs text-slate-600">Orthopedic Department</p>
                </div>
                <p className="text-xs text-slate-500">6 hours ago</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">System Backup Completed</p>
                  <p className="text-xs text-slate-600">All data secured</p>
                </div>
                <p className="text-xs text-slate-500">8 hours ago</p>
              </div>
            </div>
          </div>

          {/* Department Statistics */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Department Statistics</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">Cardiology</p>
                  <p className="text-sm text-slate-600">234 patients</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">Orthopedics</p>
                  <p className="text-sm text-slate-600">189 patients</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "63%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">Neurology</p>
                  <p className="text-sm text-slate-600">156 patients</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "52%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">Emergency</p>
                  <p className="text-sm text-slate-600">142 patients</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: "47%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

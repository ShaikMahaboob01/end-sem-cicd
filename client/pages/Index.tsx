import { Link } from "react-router-dom";
import { Users, Calendar, Activity, BarChart3, ArrowRight, Shield, Zap, Clock } from "lucide-react";
import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-medium text-blue-600">Modern Healthcare Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Hospital Management System
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Streamline patient care, manage staff, and optimize hospital operations with our comprehensive management platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl"
              >
                Access Dashboard <ArrowRight size={20} />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-900 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold"
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto pt-12 border-t border-slate-200">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">500+</p>
                <p className="text-slate-600 text-sm">Active Hospitals</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">50K+</p>
                <p className="text-slate-600 text-sm">Daily Patients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">99.9%</p>
                <p className="text-slate-600 text-sm">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Core Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to manage your hospital efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1: Patient Management */}
          <Link
            to="/patients"
            className="group p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
              <Users className="text-blue-600" size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Patient Management</h3>
            <p className="text-slate-600 text-sm mb-4">
              Manage patient records, medical history, and personal information seamlessly.
            </p>
            <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 gap-1 transition">
              Explore <ArrowRight size={16} />
            </div>
          </Link>

          {/* Feature 2: Appointments */}
          <Link
            to="/appointments"
            className="group p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition cursor-pointer"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
              <Calendar className="text-green-600" size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Appointment Scheduling</h3>
            <p className="text-slate-600 text-sm mb-4">
              Schedule, manage, and track patient appointments with real-time notifications.
            </p>
            <div className="flex items-center text-green-600 font-semibold group-hover:gap-2 gap-1 transition">
              Explore <ArrowRight size={16} />
            </div>
          </Link>

          {/* Feature 3: Staff Management */}
          <Link
            to="/staff"
            className="group p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition cursor-pointer"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition">
              <Activity className="text-purple-600" size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Staff Management</h3>
            <p className="text-slate-600 text-sm mb-4">
              Manage doctor schedules, staff assignments, and department operations.
            </p>
            <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 gap-1 transition">
              Explore <ArrowRight size={16} />
            </div>
          </Link>

          {/* Feature 4: Analytics */}
          <Link
            to="/dashboard"
            className="group p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition cursor-pointer"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition">
              <BarChart3 className="text-orange-600" size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Analytics & Reports</h3>
            <p className="text-slate-600 text-sm mb-4">
              Real-time analytics, reporting, and data-driven insights for better decision making.
            </p>
            <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 gap-1 transition">
              Explore <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose HMS?
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Secure & Compliant</h3>
                    <p className="text-slate-600 text-sm mt-1">
                      HIPAA-compliant with enterprise-grade security and encryption.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Fast & Reliable</h3>
                    <p className="text-slate-600 text-sm mt-1">
                      99.9% uptime with lightning-fast performance and auto-scaling.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Easy to Use</h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Intuitive interface requiring minimal training for staff adoption.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Start Using HMS <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">2,450</p>
                      <p className="text-sm text-slate-600">Active Patients</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Calendar className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">156</p>
                      <p className="text-sm text-slate-600">Appointments Today</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Activity className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">89</p>
                      <p className="text-sm text-slate-600">Staff Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Automated Deployment with GitHub Actions
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl">
            This HMS frontend is automatically built, tested, and deployed to production on every push to main branch using GitHub Actions CI/CD pipeline.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-lg mb-2">Automated Testing</h3>
              <p className="text-slate-300 text-sm">
                All tests run automatically on every commit to ensure code quality.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-lg mb-2">Build Optimization</h3>
              <p className="text-slate-300 text-sm">
                Production builds are optimized for performance and bundle size.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-lg mb-2">Continuous Deployment</h3>
              <p className="text-slate-300 text-sm">
                Deploy to production automatically after successful builds and tests.
              </p>
            </div>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition font-semibold"
          >
            View GitHub Repository <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Hospital Operations?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of hospitals using HMS to improve patient care and operational efficiency.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold shadow-lg"
          >
            Get Started Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}

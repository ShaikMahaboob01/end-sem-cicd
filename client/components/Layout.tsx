import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-slate-900 text-lg">HMS</p>
              <p className="text-xs text-slate-500">Hospital Management</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link to="/dashboard" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Dashboard
            </Link>
            <Link to="/patients" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Patients
            </Link>
            <Link to="/appointments" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Appointments
            </Link>
            <Link to="/staff" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Staff
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-slate-50">
            <div className="px-4 py-3 space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/patients"
                className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Patients
              </Link>
              <Link
                to="/appointments"
                className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Appointments
              </Link>
              <Link
                to="/staff"
                className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Staff
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                HMS
              </h3>
              <p className="text-slate-400 text-sm">
                Modern Hospital Management System for efficient healthcare operations.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
                <li><Link to="/patients" className="hover:text-white transition">Patients</Link></li>
                <li><Link to="/appointments" className="hover:text-white transition">Appointments</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-slate-400 text-sm">
              © 2024 Hospital Management System. All rights reserved. | Deployed with GitHub Actions CI/CD
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

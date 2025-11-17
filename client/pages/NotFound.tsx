import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8">
          <p className="text-8xl font-bold text-blue-600 mb-4">404</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
          <p className="text-xl text-slate-600 mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-slate-500">Requested path: <code className="bg-slate-100 px-2 py-1 rounded font-mono text-sm">{location.pathname}</code></p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            <Home size={20} /> Return to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-900 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold"
          >
            <ArrowLeft size={20} /> Go Back
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// interface Application {
//   id: number;
//   brand_name: string;
//   category: string;
//   email: string;
//   details: string;
//   count: number;
//   status: string;
//   created_at: string;
// }

// export default function AdminDashboard() {
//   const [applications, setApplications] = useState<Application[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Mengambil data dari Backend Laravel
//   const fetchApplications = async () => {
//     try {
//       const res = await fetch("https://backend-back2eras.vercel.app//api/applications");
//       const data = await res.json();
//       setApplications(data);
//     } catch (error) {
//       console.error("Failed to fetch data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   // Fungsi Accept
//   const handleAccept = async (id: number) => {
//     await fetch(`https://backend-back2eras.vercel.app//api/applications/${id}/accept`, { method: "PUT" });
//     Swal.fire("Approved!", "Tenant has been approved.", "success");
//     fetchApplications(); // Refresh data
//   };

//   // Fungsi Reject
//   const handleReject = async (id: number) => {
//     await fetch(`https://backend-back2eras.vercel.app//api/applications/${id}/reject`, { method: "PUT" });
//     Swal.fire("Rejected!", "Tenant has been rejected.", "error");
//     fetchApplications();
//   };

//   // Fungsi Delete
//   const handleDelete = async (id: number) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "This will permanently delete the application.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#ff1493",
//       cancelButtonColor: "#13bbad",
//       confirmButtonText: "Yes, delete it!"
//     });

//     if (result.isConfirmed) {
//       await fetch(`https://backend-back2eras.vercel.app//api/applications/${id}`, { method: "DELETE" });
//       Swal.fire("Deleted!", "Application has been deleted.", "success");
//       fetchApplications();
//     }
//   };

//   if (loading) return <div className="min-h-screen bg-black text-white p-10 font-anton text-2xl">Loading Dashboard...</div>;

//   return (
//     <div className="min-h-screen bg-[#144333] text-[#eaddce] font-roboto py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* <h1 className="font-anton text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493] mb-10">
//           Admin Dashboard - Applications
//         </h1> */}

//         <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
//             Admin Dashboard - Applications
//           </h1>
//           <Link href="/admin/categories" className="bg-[#fadf29] text-black font-anton px-6 py-3 uppercase hover:bg-white transition-colors border-2 border-black shadow-[4px_4px_0px_#ff1493]">
//             Manage Categories
//           </Link>

//         <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
//                 <th className="p-4 border-b-2 border-black">ID</th>
//                 <th className="p-4 border-b-2 border-black">Brand Name</th>
//                 <th className="p-4 border-b-2 border-black">Category</th>
//                 <th className="p-4 border-b-2 border-black">Email</th>
//                 <th className="p-4 border-b-2 border-black">Pax (Count)</th>
//                 <th className="p-4 border-b-2 border-black">Status</th>
//                 <th className="p-4 border-b-2 border-black text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.length === 0 ? (
//                 <tr><td colSpan={7} className="p-8 text-center text-gray-400">No applications found.</td></tr>
//               ) : (
//                 applications.map((app) => (
//                   <tr key={app.id} className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors">
//                     <td className="p-4">{app.id}</td>
//                     <td className="p-4 font-bold text-[#fadf29]">{app.brand_name}</td>
//                     <td className="p-4">{app.category}</td>
//                     <td className="p-4">{app.email}</td>
//                     <td className="p-4 text-center">{app.count}</td>
//                     <td className="p-4">
//                       <span className={`px-3 py-1 rounded text-xs font-bold uppercase ${
//                         app.status === 'approved' ? 'bg-green-500/20 text-green-400' :
//                         app.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
//                         'bg-yellow-500/20 text-yellow-400'
//                       }`}>
//                         {app.status}
//                       </span>
//                     </td>
//                     <td className="p-4 flex gap-2 justify-center">
//                       <button onClick={() => handleAccept(app.id)} className="bg-[#0fdff8] text-black font-anton px-3 py-1 hover:bg-white transition-colors">Accept</button>
//                       <button onClick={() => handleReject(app.id)} className="bg-[#ff1493] text-white font-anton px-3 py-1 hover:bg-white hover:text-black transition-colors">Reject</button>
//                       <button onClick={() => handleDelete(app.id)} className="bg-red-700 text-white font-anton px-3 py-1 hover:bg-red-500 transition-colors">Delete</button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// interface Application {
//   id: number;
//   brand_name: string;
//   category: string;
//   email: string;
//   details: string;
//   count: number;
//   status: string;
//   created_at: string;
// }

// export default function AdminDashboard() {
//   const [applications, setApplications] = useState<Application[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchApplications = async () => {
//     try {
//       const res = await fetch("https://backend-back2eras.vercel.app//api/applications");
//       const data = await res.json();
//       setApplications(data);
//     } catch (error) {
//       console.error("Failed to fetch data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   const handleAccept = async (id: number) => {
//     await fetch(`https://backend-back2eras.vercel.app//api/applications/${id}/accept`, { method: "PUT" });
//     Swal.fire("Approved!", "Tenant has been approved.", "success");
//     fetchApplications(); 
//   };

//   const handleReject = async (id: number) => {
//     await fetch(`https://backend-back2eras.vercel.app//api/applications/${id}/reject`, { method: "PUT" });
//     Swal.fire("Rejected!", "Tenant has been rejected.", "error");
//     fetchApplications();
//   };

//   const handleDelete = async (id: number) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "This will permanently delete the application.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#ff1493",
//       cancelButtonColor: "#13bbad",
//       confirmButtonText: "Yes, delete it!"
//     });

//     if (result.isConfirmed) {
//       await fetch(`https://backend-back2eras.vercel.app//api/applications/${id}`, { method: "DELETE" });
//       Swal.fire("Deleted!", "Application has been deleted.", "success");
//       fetchApplications();
//     }
//   };

//   if (loading) return <div className="text-white font-anton text-2xl">Loading Dashboard...</div>;

//   return (
//     <div className="max-w-7xl mx-auto text-[#eaddce]">
//       <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493] mb-10">
//         Dashboard - Applications
//       </h1>

//       <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
//               <th className="p-4 border-b-2 border-black">ID</th>
//               <th className="p-4 border-b-2 border-black">Brand Name</th>
//               <th className="p-4 border-b-2 border-black">Category</th>
//               <th className="p-4 border-b-2 border-black">Email</th>
//               <th className="p-4 border-b-2 border-black text-center">Pax</th>
//               <th className="p-4 border-b-2 border-black">Status</th>
//               <th className="p-4 border-b-2 border-black text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applications.length === 0 ? (
//               <tr><td colSpan={7} className="p-8 text-center text-gray-400">No applications found.</td></tr>
//             ) : (
//               applications.map((app) => (
//                 <tr key={app.id} className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors">
//                   <td className="p-4">{app.id}</td>
//                   <td className="p-4 font-bold text-[#fadf29]">{app.brand_name}</td>
//                   <td className="p-4">{app.category}</td>
//                   <td className="p-4">{app.email}</td>
//                   <td className="p-4 text-center">{app.count}</td>
//                   <td className="p-4">
//                     <span className={`px-3 py-1 rounded text-xs font-bold uppercase ${
//                       app.status === 'approved' ? 'bg-green-500/20 text-green-400' :
//                       app.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
//                       'bg-yellow-500/20 text-yellow-400'
//                     }`}>
//                       {app.status}
//                     </span>
//                   </td>
//                   <td className="p-4 flex gap-2 justify-center">
//                     <button onClick={() => handleAccept(app.id)} className="bg-[#0fdff8] text-black font-anton px-3 py-1 hover:bg-white transition-colors">Accept</button>
//                     <button onClick={() => handleReject(app.id)} className="bg-[#ff1493] text-white font-anton px-3 py-1 hover:bg-white hover:text-black transition-colors">Reject</button>
//                     <button onClick={() => handleDelete(app.id)} className="bg-red-700 text-white font-anton px-3 py-1 hover:bg-red-500 transition-colors">Del</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface Application {
  id: number;
  brand_name: string;
  category: string;
  email: string;
  details: string;
  count: number;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      const res = await fetch("https://backend-back2eras.vercel.app//api/applications");
      const data = await res.json();
      setApplications(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleAccept = async (id: number) => {
    await fetch(`https://backend-back2eras.vercel.app//api/applications/${id}/accept`, { method: "PUT" });
    Swal.fire("Approved!", "Tenant has been approved.", "success");
    fetchApplications(); 
  };

  const handleReject = async (id: number) => {
    await fetch(`https://backend-back2eras.vercel.app//api/applications/${id}/reject`, { method: "PUT" });
    Swal.fire("Rejected!", "Tenant has been rejected.", "error");
    fetchApplications();
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the application.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff1493",
      cancelButtonColor: "#13bbad",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      await fetch(`https://backend-back2eras.vercel.app//api/applications/${id}`, { method: "DELETE" });
      Swal.fire("Deleted!", "Application has been deleted.", "success");
      fetchApplications();
    }
  };

  if (loading) return <div className="text-white font-anton text-2xl">Loading Dashboard...</div>;

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493] mb-10">
        Dashboard - Applications
      </h1>

      <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
              <th className="p-4 border-b-2 border-black">ID</th>
              <th className="p-4 border-b-2 border-black">Brand Name</th>
              <th className="p-4 border-b-2 border-black">Category</th>
              <th className="p-4 border-b-2 border-black">Email</th>
              <th className="p-4 border-b-2 border-black text-center">Pax</th>
              <th className="p-4 border-b-2 border-black">Status</th>
              <th className="p-4 border-b-2 border-black text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr><td colSpan={7} className="p-8 text-center text-gray-400">No applications found.</td></tr>
            ) : (
              applications.map((app) => (
                <tr key={app.id} className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors">
                  <td className="p-4">{app.id}</td>
                  <td className="p-4 font-bold text-[#fadf29]">{app.brand_name}</td>
                  <td className="p-4">{app.category}</td>
                  <td className="p-4">{app.email}</td>
                  <td className="p-4 text-center">{app.count}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded text-xs font-bold uppercase ${
                      app.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                      app.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2 justify-center">
                    <button onClick={() => handleAccept(app.id)} className="bg-[#0fdff8] text-black font-anton px-3 py-1 hover:bg-white transition-colors">Accept</button>
                    <button onClick={() => handleReject(app.id)} className="bg-[#ff1493] text-white font-anton px-3 py-1 hover:bg-white hover:text-black transition-colors">Reject</button>
                    <button onClick={() => handleDelete(app.id)} className="bg-red-700 text-white font-anton px-3 py-1 hover:bg-red-500 transition-colors">Del</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
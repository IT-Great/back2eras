// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Swal from "sweetalert2";

// interface VendorCategory {
//   id: number;
//   name: string;
//   image_url: string;
//   subtitle: string | null;
//   features: string;
// }

// export default function ManageCategories() {
//   const [categories, setCategories] = useState<VendorCategory[]>([]);

//   const fetchCategories = async () => {
//     const res = await fetch("https://backend-back2eras.vercel.app//api/vendor-categories");
//     const data = await res.json();
//     setCategories(data);
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleAddEdit = async (cat?: VendorCategory) => {
//     const { value: formValues } = await Swal.fire({
//       title: cat ? "Edit Category" : "Add New Category",
//       html: `
//         <div style="display:flex; flex-direction:column; gap:10px;">
//           <input id="cat-name" class="swal2-input" placeholder="Category Name (e.g. Retail)" value="${cat?.name || ''}" style="margin:0;">
//           <input id="cat-img" class="swal2-input" placeholder="Image URL" value="${cat?.image_url || ''}" style="margin:0;">
//           <input id="cat-sub" class="swal2-input" placeholder="Subtitle (Optional)" value="${cat?.subtitle || ''}" style="margin:0;">
//           <textarea id="cat-feat" class="swal2-textarea" placeholder="Features (Comma separated)" style="margin:0;">${cat?.features || ''}</textarea>
//         </div>
//       `,
//       background: "#144333", color: "#eaddce", confirmButtonColor: "#0fdff8", cancelButtonColor: "#ff1493",
//       showCancelButton: true, confirmButtonText: "Save",
//       preConfirm: () => {
//         return {
//           name: (document.getElementById("cat-name") as HTMLInputElement).value,
//           image_url: (document.getElementById("cat-img") as HTMLInputElement).value,
//           subtitle: (document.getElementById("cat-sub") as HTMLInputElement).value,
//           features: (document.getElementById("cat-feat") as HTMLTextAreaElement).value,
//         };
//       }
//     });

//     if (formValues) {
//       const url = cat ? `https://backend-back2eras.vercel.app//api/vendor-categories/${cat.id}` : "https://backend-back2eras.vercel.app//api/vendor-categories";
//       const method = cat ? "PUT" : "POST";
      
//       await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formValues)
//       });
//       Swal.fire("Saved!", "Category has been saved.", "success");
//       fetchCategories();
//     }
//   };

//   const handleDelete = async (id: number) => {
//     const res = await Swal.fire({ title: "Delete?", text: "This cannot be undone.", icon: "warning", showCancelButton: true });
//     if (res.isConfirmed) {
//       await fetch(`https://backend-back2eras.vercel.app//api/vendor-categories/${id}`, { method: "DELETE" });
//       Swal.fire("Deleted!", "", "success");
//       fetchCategories();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#144333] text-[#eaddce] font-roboto py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-10">
//           <div>
//             <Link href="/admin/apply" className="text-[#fadf29] uppercase font-bold tracking-widest text-sm mb-2 inline-block hover:text-[#ff1493]">&larr; Back to Applications</Link>
//             <h1 className="font-anton text-4xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">Manage Categories</h1>
//           </div>
//           <button onClick={() => handleAddEdit()} className="bg-[#0fdff8] text-black font-anton px-6 py-3 uppercase hover:bg-white transition-colors">Add Category</button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {categories.map(cat => (
//             <div key={cat.id} className="bg-black border-2 border-[#13bbad] p-6 rounded relative">
//               <img src={cat.image_url} alt={cat.name} className="w-full h-48 object-cover mb-4 rounded border border-gray-700" />
//               <h2 className="font-anton text-2xl text-[#fadf29] uppercase">{cat.name}</h2>
//               <div className="mt-4 flex gap-2">
//                 <button onClick={() => handleAddEdit(cat)} className="bg-[#0fdff8] text-black font-bold px-4 py-1 text-sm uppercase">Edit</button>
//                 <button onClick={() => handleDelete(cat.id)} className="bg-[#ff1493] text-white font-bold px-4 py-1 text-sm uppercase">Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// interface VendorCategory {
//   id: number;
//   name: string;
//   image_url: string;
//   subtitle: string | null;
//   features: string;
// }

// export default function ManageCategories() {
//   const [categories, setCategories] = useState<VendorCategory[]>([]);

//   const fetchCategories = async () => {
//     const res = await fetch("https://backend-back2eras.vercel.app//api/vendor-categories");
//     const data = await res.json();
//     setCategories(data);
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleAddEdit = async (cat?: VendorCategory) => {
//     const { value: formValues } = await Swal.fire({
//       title: cat ? "Edit Category" : "Add New Category",
//       html: `
//         <div style="display:flex; flex-direction:column; gap:10px;">
//           <input id="cat-name" class="swal2-input" placeholder="Category Name (e.g. Retail)" value="${cat?.name || ''}" style="margin:0;">
//           <input id="cat-img" class="swal2-input" placeholder="Image URL" value="${cat?.image_url || ''}" style="margin:0;">
//           <input id="cat-sub" class="swal2-input" placeholder="Subtitle (Optional)" value="${cat?.subtitle || ''}" style="margin:0;">
//           <textarea id="cat-feat" class="swal2-textarea" placeholder="Features (Comma separated)" style="margin:0;">${cat?.features || ''}</textarea>
//         </div>
//       `,
//       background: "#144333", color: "#eaddce", confirmButtonColor: "#0fdff8", cancelButtonColor: "#ff1493",
//       showCancelButton: true, confirmButtonText: "Save",
//       preConfirm: () => {
//         return {
//           name: (document.getElementById("cat-name") as HTMLInputElement).value,
//           image_url: (document.getElementById("cat-img") as HTMLInputElement).value,
//           subtitle: (document.getElementById("cat-sub") as HTMLInputElement).value,
//           features: (document.getElementById("cat-feat") as HTMLTextAreaElement).value,
//         };
//       }
//     });

//     if (formValues) {
//       const url = cat ? `https://backend-back2eras.vercel.app//api/vendor-categories/${cat.id}` : "https://backend-back2eras.vercel.app//api/vendor-categories";
//       const method = cat ? "PUT" : "POST";
      
//       await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formValues)
//       });
//       Swal.fire("Saved!", "Category has been saved.", "success");
//       fetchCategories();
//     }
//   };

//   const handleDelete = async (id: number) => {
//     const res = await Swal.fire({ title: "Delete?", text: "This cannot be undone.", icon: "warning", showCancelButton: true, confirmButtonColor: "#ff1493" });
//     if (res.isConfirmed) {
//       await fetch(`https://backend-back2eras.vercel.app//api/vendor-categories/${id}`, { method: "DELETE" });
//       Swal.fire("Deleted!", "", "success");
//       fetchCategories();
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto text-[#eaddce]">
      
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
//         <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
//           Manage Categories
//         </h1>
//         <button onClick={() => handleAddEdit()} className="bg-[#0fdff8] text-black font-anton px-6 py-3 uppercase hover:bg-white transition-colors shadow-[4px_4px_0px_#ff1493]">
//           + Add Category
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {categories.length === 0 ? (
//            <p className="text-gray-400">No categories found. Start by adding one.</p>
//         ) : (
//           categories.map(cat => (
//             <div key={cat.id} className="bg-black border-2 border-[#13bbad] p-6 rounded relative shadow-[6px_6px_0px_#13bbad]">
//               <img src={cat.image_url} alt={cat.name} className="w-full h-48 object-cover mb-4 rounded border border-gray-700" />
//               <h2 className="font-anton text-2xl text-[#fadf29] uppercase">{cat.name}</h2>
//               <p className="text-sm text-gray-400 mt-2 line-clamp-2">{cat.features}</p>
              
//               <div className="mt-6 flex gap-3">
//                 <button onClick={() => handleAddEdit(cat)} className="flex-1 bg-[#0fdff8] text-black font-bold px-4 py-2 text-sm uppercase hover:bg-white transition-colors">Edit</button>
//                 <button onClick={() => handleDelete(cat.id)} className="flex-1 bg-[#ff1493] text-white font-bold px-4 py-2 text-sm uppercase hover:bg-red-600 transition-colors">Delete</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
      
//     </div>
//   );
// }

/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface VendorCategory {
  id: number;
  name: string;
  image_url: string;
  subtitle: string | null;
  features: string;
}

export default function ManageCategories() {
  const [categories, setCategories] = useState<VendorCategory[]>([]);

  const fetchCategories = async () => {
    const res = await fetch("https://backend-back2eras.vercel.app//api/vendor-categories");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddEdit = async (cat?: VendorCategory) => {
    const { value: formValues } = await Swal.fire({
      title: cat ? "Edit Category" : "Add New Category",
      html: `
        <div style="display:flex; flex-direction:column; gap:10px;">
          <input id="cat-name" class="swal2-input" placeholder="Category Name (e.g. Retail)" value="${cat?.name || ''}" style="margin:0;">
          <input id="cat-img" class="swal2-input" placeholder="Image URL" value="${cat?.image_url || ''}" style="margin:0;">
          <input id="cat-sub" class="swal2-input" placeholder="Subtitle (Optional)" value="${cat?.subtitle || ''}" style="margin:0;">
          <textarea id="cat-feat" class="swal2-textarea" placeholder="Features (Comma separated)" style="margin:0;">${cat?.features || ''}</textarea>
        </div>
      `,
      background: "#144333", color: "#eaddce", confirmButtonColor: "#0fdff8", cancelButtonColor: "#ff1493",
      showCancelButton: true, confirmButtonText: "Save",
      preConfirm: () => {
        return {
          name: (document.getElementById("cat-name") as HTMLInputElement).value,
          image_url: (document.getElementById("cat-img") as HTMLInputElement).value,
          subtitle: (document.getElementById("cat-sub") as HTMLInputElement).value,
          features: (document.getElementById("cat-feat") as HTMLTextAreaElement).value,
        };
      }
    });

    if (formValues) {
      const url = cat ? `https://backend-back2eras.vercel.app//api/vendor-categories/${cat.id}` : "https://backend-back2eras.vercel.app//api/vendor-categories";
      const method = cat ? "PUT" : "POST";
      
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      });
      Swal.fire("Saved!", "Category has been saved.", "success");
      fetchCategories();
    }
  };

  const handleDelete = async (id: number) => {
    const res = await Swal.fire({ title: "Delete?", text: "This cannot be undone.", icon: "warning", showCancelButton: true, confirmButtonColor: "#ff1493" });
    if (res.isConfirmed) {
      await fetch(`https://backend-back2eras.vercel.app//api/vendor-categories/${id}`, { method: "DELETE" });
      Swal.fire("Deleted!", "", "success");
      fetchCategories();
    }
  };

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
          Manage Categories
        </h1>
        <button onClick={() => handleAddEdit()} className="bg-[#0fdff8] text-black font-anton px-6 py-3 uppercase hover:bg-white transition-colors shadow-[4px_4px_0px_#ff1493]">
          + Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.length === 0 ? (
           <p className="text-gray-400">No categories found. Start by adding one.</p>
        ) : (
          categories.map(cat => (
            <div key={cat.id} className="bg-black border-2 border-[#13bbad] p-6 rounded relative shadow-[6px_6px_0px_#13bbad]">
              <img src={cat.image_url} alt={cat.name} className="w-full h-48 object-cover mb-4 rounded border border-gray-700" />
              <h2 className="font-anton text-2xl text-[#fadf29] uppercase">{cat.name}</h2>
              <p className="text-sm text-gray-400 mt-2 line-clamp-2">{cat.features}</p>
              
              <div className="mt-6 flex gap-3">
                <button onClick={() => handleAddEdit(cat)} className="flex-1 bg-[#0fdff8] text-black font-bold px-4 py-2 text-sm uppercase hover:bg-white transition-colors">Edit</button>
                <button onClick={() => handleDelete(cat.id)} className="flex-1 bg-[#ff1493] text-white font-bold px-4 py-2 text-sm uppercase hover:bg-red-600 transition-colors">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
}
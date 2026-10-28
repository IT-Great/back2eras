/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
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
//     const res = await fetch("https://back.back2eras.com/api/vendor-categories");
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
//       const url = cat ? `https://back.back2eras.com/api/vendor-categories/${cat.id}` : "https://back.back2eras.com/api/vendor-categories";
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
//       await fetch(`https://back.back2eras.com/api/vendor-categories/${id}`, { method: "DELETE" });
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
//     const res = await fetch("https://back.back2eras.com/api/vendor-categories");
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
//       const url = cat ? `https://back.back2eras.com/api/vendor-categories/${cat.id}` : "https://back.back2eras.com/api/vendor-categories";
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
//       await fetch(`https://back.back2eras.com/api/vendor-categories/${id}`, { method: "DELETE" });
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
//     const res = await fetch("https://back.back2eras.com/api/vendor-categories");
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
//       const url = cat ? `https://back.back2eras.com/api/vendor-categories/${cat.id}` : "https://back.back2eras.com/api/vendor-categories";
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
//       await fetch(`https://back.back2eras.com/api/vendor-categories/${id}`, { method: "DELETE" });
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
//     const res = await fetch("https://back.back2eras.com/api/vendor-categories");
//     const data = await res.json();
//     setCategories(data);
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleAddEdit = async (cat?: VendorCategory) => {
//     const { value: formData } = await Swal.fire({
//       title: cat ? "Edit Category" : "Add New Category",
//       html: `
//         <div style="display:flex; flex-direction:column; gap:10px; text-align:left;">
//           <input id="cat-name" class="swal2-input" placeholder="Category Name (e.g. Retail)" value="${cat?.name || ''}" style="margin:0;">
          
//           <div style="margin-top:10px; border:1px solid #13bbad; padding:10px; border-radius:5px;">
//             <label style="color:#eaddce; font-size:12px; font-weight:bold;">1. UPLOAD IMAGE FILE (Optional)</label>
//             <input id="cat-file" type="file" accept="image/*" style="margin-top:5px; width:100%; color:white; font-size:14px;">
            
//             <div style="text-align:center; font-size:12px; color:#fadf29; margin:10px 0;">-- OR --</div>
            
//             <label style="color:#eaddce; font-size:12px; font-weight:bold;">2. IMAGE URL (If not uploading file)</label>
//             <input id="cat-img" class="swal2-input" placeholder="https://..." value="${cat?.image_url || ''}" style="margin:0; width:100%;">
//           </div>

//           <input id="cat-sub" class="swal2-input" placeholder="Subtitle (Optional)" value="${cat?.subtitle || ''}" style="margin:0; margin-top:5px;">
//           <textarea id="cat-feat" class="swal2-textarea" placeholder="Features (Comma separated)" style="margin:0;">${cat?.features || ''}</textarea>
//         </div>
//       `,
//       background: "#144333", color: "#eaddce", confirmButtonColor: "#0fdff8", cancelButtonColor: "#ff1493",
//       showCancelButton: true, confirmButtonText: "Save",
//       preConfirm: () => {
//         const name = (document.getElementById("cat-name") as HTMLInputElement).value;
//         const fileInput = document.getElementById("cat-file") as HTMLInputElement;
//         const imageUrl = (document.getElementById("cat-img") as HTMLInputElement).value;
//         const subtitle = (document.getElementById("cat-sub") as HTMLInputElement).value;
//         const features = (document.getElementById("cat-feat") as HTMLTextAreaElement).value;
        
//         const file = fileInput.files?.[0];

//         if (!name || !features || (!file && !imageUrl)) {
//           Swal.showValidationMessage('Name, features, and an Image (File OR URL) are required!');
//           return false;
//         }

//         const data = new FormData();
//         data.append("name", name);
//         data.append("features", features);
//         if (subtitle) data.append("subtitle", subtitle);
//         if (file) data.append("image_file", file);
//         else data.append("image_url", imageUrl);
        
//         // Trik khusus framework Laravel untuk menangani File Update (PUT via POST)
//         if (cat) data.append("_method", "PUT"); 

//         return data;
//       }
//     });

//     if (formData) {
//       const url = cat ? `https://back.back2eras.com/api/vendor-categories/${cat.id}` : "https://back.back2eras.com/api/vendor-categories";
      
//       // Catatan: Selalu gunakan method "POST" saat mengirim file (FormData). 
//       // Laravel akan merubahnya menjadi PUT otomatis karena kita sudah menyisipkan "_method=PUT".
//       await fetch(url, {
//         method: "POST", 
//         body: formData // TIDAK ADA headers JSON disini
//       });
//       Swal.fire("Saved!", "Category has been saved.", "success");
//       fetchCategories();
//     }
//   };

//   const handleDelete = async (id: number) => {
//     const res = await Swal.fire({ title: "Delete?", text: "This cannot be undone.", icon: "warning", showCancelButton: true, confirmButtonColor: "#ff1493" });
//     if (res.isConfirmed) {
//       await fetch(`https://back.back2eras.com/api/vendor-categories/${id}`, { method: "DELETE" });
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
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      // PERBAIKAN: Menghapus double api/api menjadi api/ saja
      const res = await fetch("https://back.back2eras.com/api/vendor-categories", {
        headers: { "Accept": "application/json" }
      });
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddEdit = async (cat?: VendorCategory) => {
    const { value: formData } = await Swal.fire({
      title: cat ? "Edit Category" : "Add New Category",
      html: `
        <div style="display:flex; flex-direction:column; gap:10px; text-align:left;">
          <input id="cat-name" class="swal2-input" placeholder="Category Name (e.g. Retail)" value="${cat?.name || ''}" style="margin:0;">
          
          <div style="margin-top:10px; border:1px solid #13bbad; padding:10px; border-radius:5px;">
            <label style="color:#eaddce; font-size:12px; font-weight:bold;">1. UPLOAD IMAGE FILE (Optional)</label>
            <input id="cat-file" type="file" accept="image/*" style="margin-top:5px; width:100%; color:white; font-size:14px;">
            
            <div style="text-align:center; font-size:12px; color:#fadf29; margin:10px 0;">-- OR --</div>
            
            <label style="color:#eaddce; font-size:12px; font-weight:bold;">2. IMAGE URL (If not uploading file)</label>
            <input id="cat-img" class="swal2-input" placeholder="https://..." value="${cat?.image_url || ''}" style="margin:0; width:100%;">
          </div>

          <input id="cat-sub" class="swal2-input" placeholder="Subtitle (Optional)" value="${cat?.subtitle || ''}" style="margin:0; margin-top:5px;">
          <textarea id="cat-feat" class="swal2-textarea" placeholder="Features (Comma separated)" style="margin:0;">${cat?.features || ''}</textarea>
        </div>
      `,
      background: "#144333", color: "#eaddce", confirmButtonColor: "#0fdff8", cancelButtonColor: "#ff1493",
      showCancelButton: true, confirmButtonText: "Save",
      preConfirm: () => {
        const name = (document.getElementById("cat-name") as HTMLInputElement).value;
        const fileInput = document.getElementById("cat-file") as HTMLInputElement;
        const imageUrl = (document.getElementById("cat-img") as HTMLInputElement).value;
        const subtitle = (document.getElementById("cat-sub") as HTMLInputElement).value;
        const features = (document.getElementById("cat-feat") as HTMLTextAreaElement).value;
        
        const file = fileInput.files?.[0];

        if (!name || !features || (!file && !imageUrl)) {
          Swal.showValidationMessage('Name, features, and an Image (File OR URL) are required!');
          return false;
        }

        const data = new FormData();
        data.append("name", name);
        data.append("features", features);
        if (subtitle) data.append("subtitle", subtitle);
        if (file) data.append("image_file", file);
        else data.append("image_url", imageUrl);
        
        if (cat) data.append("_method", "PUT"); 

        return data;
      }
    });

    if (formData) {
      const url = cat ? `https://back.back2eras.com/api/vendor-categories/${cat.id}` : "https://back.back2eras.com/api/vendor-categories";
      
      try {
        const res = await fetch(url, {
          method: "POST", 
          headers: { "Accept": "application/json" },
          body: formData 
        });

        if (res.ok) {
          Swal.fire("Saved!", "Category has been saved successfully.", "success");
          fetchCategories();
        } else {
          const errorData = await res.json();
          Swal.fire("Error!", errorData.message || "Failed to save category.", "error");
        }
      } catch (error) {
        Swal.fire("Error!", "Server connection failed.", "error");
      }
    }
  };

  const handleDelete = async (id: number) => {
    const res = await Swal.fire({ title: "Delete Category?", text: "This cannot be undone.", icon: "warning", showCancelButton: true, confirmButtonColor: "#ff1493", cancelButtonColor: "#13bbad", confirmButtonText: "Yes, delete it" });
    if (res.isConfirmed) {
      try {
        await fetch(`https://back.back2eras.com/api/vendor-categories/${id}`, { 
          method: "DELETE",
          headers: { "Accept": "application/json" } 
        });
        Swal.fire("Deleted!", "Category has been deleted.", "success");
        fetchCategories();
      } catch (error) {
        Swal.fire("Error!", "Failed to delete category.", "error");
      }
    }
  };

  if (loading) return <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">Loading Categories...</div>;

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

      {/* PERUBAHAN: Tampilan List Tabel (Sama seperti Manage Stories) */}
      <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
              <th className="p-4 border-b-2 border-black w-16">ID</th>
              <th className="p-4 border-b-2 border-black w-32">Image</th>
              <th className="p-4 border-b-2 border-black">Category Info</th>
              <th className="p-4 border-b-2 border-black text-center w-40">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-gray-400">No categories found. Start by adding one.</td></tr>
            ) : (
              categories.map((cat) => (
                <tr key={cat.id} className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors">
                  <td className="p-4">{cat.id}</td>
                  
                  <td className="p-4">
                    <img src={cat.image_url} alt={cat.name} className="w-20 h-16 object-cover rounded border border-gray-600" />
                  </td>
                  
                  <td className="p-4">
                    <div className="font-bold text-[#fadf29] text-lg mb-1">{cat.name}</div>
                    {cat.subtitle && (
                      <div className="text-xs text-[#0fdff8] uppercase tracking-wider mb-2">{cat.subtitle}</div>
                    )}
                    <div className="text-sm text-gray-400 line-clamp-1">{cat.features}</div>
                  </td>
                  
                  <td className="p-4 flex gap-2 justify-center items-center h-full mt-2">
                    <button onClick={() => handleAddEdit(cat)} className="bg-[#0fdff8] text-black font-anton px-4 py-2 text-sm uppercase hover:bg-white transition-colors">Edit</button>
                    <button onClick={() => handleDelete(cat.id)} className="bg-[#ff1493] text-white font-anton px-4 py-2 text-sm uppercase hover:bg-red-500 transition-colors">Del</button>
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
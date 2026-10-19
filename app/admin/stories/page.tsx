/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface Story {
  id: number;
  slug: string;
  category: string;
  title: string;
  published_date: string;
  description: string;
  image_path: string;
}

export default function ManageStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStories = async () => {
    try {
      const res = await fetch("https://backend-back2eras.vercel.app/api/stories");
      const data = await res.json();
      setStories(data);
    } catch (error) {
      console.error("Failed to fetch stories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleAddEdit = async (story?: Story) => {
    const { value: formValues } = await Swal.fire({
      title: story ? "Edit Story" : "Add New Story",
      html: `
        <div style="display:flex; flex-direction:column; gap:15px; text-align:left;">
          <div>
            <label style="color:#eaddce; font-size:14px; font-weight:bold;">Title</label>
            <input id="s-title" class="swal2-input" placeholder="Story Title" value="${story?.title || ''}" style="margin:0; width:100%;">
          </div>
          <div>
            <label style="color:#eaddce; font-size:14px; font-weight:bold;">Category</label>
            <input id="s-cat" class="swal2-input" placeholder="e.g. NEON NOSTALGIA" value="${story?.category || ''}" style="margin:0; width:100%;">
          </div>
          <div>
            <label style="color:#eaddce; font-size:14px; font-weight:bold;">Published Date</label>
            <input id="s-date" type="date" class="swal2-input" value="${story?.published_date || ''}" style="margin:0; width:100%;">
          </div>
          <div>
            <label style="color:#eaddce; font-size:14px; font-weight:bold;">Image URL</label>
            <input id="s-img" class="swal2-input" placeholder="https://images.unsplash.com/..." value="${story?.image_path || ''}" style="margin:0; width:100%;">
          </div>
          <div>
            <label style="color:#eaddce; font-size:14px; font-weight:bold;">Description / Content</label>
            <textarea id="s-desc" class="swal2-textarea" placeholder="Write the story content here..." style="margin:0; width:100%; height:120px;">${story?.description || ''}</textarea>
          </div>
        </div>
      `,
      background: "#144333", color: "#eaddce", confirmButtonColor: "#0fdff8", cancelButtonColor: "#ff1493",
      showCancelButton: true, confirmButtonText: "Save Story",
      width: '600px', // Lebar popup sedikit diperbesar agar lega
      preConfirm: () => {
        const title = (document.getElementById("s-title") as HTMLInputElement).value;
        const category = (document.getElementById("s-cat") as HTMLInputElement).value;
        const published_date = (document.getElementById("s-date") as HTMLInputElement).value;
        const image_path = (document.getElementById("s-img") as HTMLInputElement).value;
        const description = (document.getElementById("s-desc") as HTMLTextAreaElement).value;

        if (!title || !category || !published_date || !image_path || !description) {
          Swal.showValidationMessage('All fields are required!');
          return false;
        }

        return { title, category, published_date, image_path, description };
      }
    });

    if (formValues) {
      const url = story ? `https://backend-back2eras.vercel.app/api/stories/${story.id}` : "https://backend-back2eras.vercel.app/api/stories";
      const method = story ? "PUT" : "POST";
      
      try {
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(formValues)
        });

        if (res.ok) {
          Swal.fire("Saved!", "Story has been saved successfully.", "success");
          fetchStories();
        } else {
          Swal.fire("Error!", "Failed to save story. Please check your data.", "error");
        }
      } catch (error) {
        Swal.fire("Error!", "Server connection failed.", "error");
      }
    }
  };

  const handleDelete = async (id: number) => {
    const res = await Swal.fire({ 
      title: "Delete Story?", 
      text: "This action cannot be undone.", 
      icon: "warning", 
      showCancelButton: true, 
      confirmButtonColor: "#ff1493",
      cancelButtonColor: "#13bbad",
      confirmButtonText: "Yes, delete it!" 
    });
    
    if (res.isConfirmed) {
      try {
        await fetch(`https://backend-back2eras.vercel.app/api/stories/${id}`, { method: "DELETE" });
        Swal.fire("Deleted!", "Story has been deleted.", "success");
        fetchStories();
      } catch (error) {
        Swal.fire("Error!", "Failed to delete story.", "error");
      }
    }
  };

  if (loading) return <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">Loading Stories...</div>;

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
          Manage Stories
        </h1>
        <button onClick={() => handleAddEdit()} className="bg-[#0fdff8] text-black font-anton px-6 py-3 uppercase hover:bg-white transition-colors shadow-[4px_4px_0px_#ff1493]">
          + Add New Story
        </button>
      </div>

      <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
              <th className="p-4 border-b-2 border-black w-16">ID</th>
              <th className="p-4 border-b-2 border-black w-32">Thumbnail</th>
              <th className="p-4 border-b-2 border-black">Title & Category</th>
              <th className="p-4 border-b-2 border-black w-40">Published</th>
              <th className="p-4 border-b-2 border-black text-center w-40">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.length === 0 ? (
              <tr><td colSpan={5} className="p-8 text-center text-gray-400">No stories found. Start by adding one.</td></tr>
            ) : (
              stories.map((story) => (
                <tr key={story.id} className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors">
                  <td className="p-4">{story.id}</td>
                  <td className="p-4">
                    <img src={story.image_path} alt={story.title} className="w-20 h-16 object-cover rounded border border-gray-600" />
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-[#fadf29] text-lg mb-1 line-clamp-1">{story.title}</div>
                    <div className="text-xs text-[#0fdff8] uppercase tracking-wider">{story.category}</div>
                  </td>
                  <td className="p-4 text-sm text-gray-300">{story.published_date}</td>
                  <td className="p-4 flex gap-2 justify-center items-center h-full mt-2">
                    <button onClick={() => handleAddEdit(story)} className="bg-[#0fdff8] text-black font-anton px-4 py-2 text-sm uppercase hover:bg-white transition-colors">Edit</button>
                    <button onClick={() => handleDelete(story.id)} className="bg-[#ff1493] text-white font-anton px-4 py-2 text-sm uppercase hover:bg-red-500 transition-colors">Del</button>
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
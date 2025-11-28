// // "use client";
// // import React, { useState } from "react";
// // import {
// //   Sidebar,
// //   SidebarBody,
// //   SidebarLink
// // } from "@/components/ui/sidebar";
// // import {
// //   IconBrandTabler,
// //   IconSettings,
// //   IconUserBolt,
// //   IconTruck,
// //   IconMenu2,
// //   IconX,
// //   IconArrowAutofitLeft
// // } from "@tabler/icons-react";
// // import { cn } from "@/lib/utils";
// // import { List } from "lucide-react";

// // const SideBarLayout = ({ children }) => {
// //   const [open, setOpen] = useState(false);

// //   const links = [
// //     { label: "Dashboard", href: "/#", icon: <IconBrandTabler className="h-5 w-5" /> },
// //     // { label: "Dashboard", href: "/admin-dashboard", icon: <IconBrandTabler className="h-5 w-5" /> },
// //     // { label: "Customers", href: "/admin-dashboard?tab=customers", icon: <IconUserBolt className="h-5 w-5" /> },
// //     // { label: "Delivery Boys", href: "/delivery-boy", icon: <IconTruck className="h-5 w-5" /> },
// //     // { label: "Subscription Plans", href: "/subscription-plans", icon: <IconSettings className="h-5 w-5" /> },
// //     // { label: "Delivery Status", href: "/delivery-status", icon: <IconSettings className="h-5 w-5" /> },
// //     // // { label: "Logout", href: "/delivery-status", icon: <IconArrowAutofitLeft className="h-5 w-5" /> },
// //     // { label: "Customer Reports", href: "/customer-subscription-report", icon: <List className="h-5 w-5" /> },
// //     // { label: "Delivery", href: "/deliveries", icon: <List className="h-5 w-5" /> },

// //   ];

// //   return (
// //     <div className="flex flex-col md:flex-row w-full h-screen bg-gray-50">

// //       {/* 🔹 Mobile Header */}
// //       <div className="md:hidden flex items-center justify-between w-full p-4 border-b bg-white shadow-sm fixed top-0 left-0 z-40">
// //         <h1 className="font-bold text-lg text-sky-700">Admin Panel</h1>
// //         {open ? (
// //           <IconX size={26} onClick={() => setOpen(false)} className="text-gray-700" />
// //         ) : (
// //           <IconMenu2 size={26} onClick={() => setOpen(true)} className="text-gray-700" />
// //         )}
// //       </div>

// //       {/* 🔹 Mobile Overlay */}
// //       {open && (
// //         <div
// //           onClick={() => setOpen(false)}
// //           className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
// //         />
// //       )}

// //       {/* 🔹 Sidebar Provider Wrapper */}
// //       <Sidebar open={open} setOpen={setOpen}>
// //         <SidebarBody
// //           className={cn(
// //             "p-4 h-full",
// //             "bg-white shadow-md border-r border-gray-200",
// //             "dark:bg-neutral-900 dark:border-neutral-700",
// //             "fixed z-50 top-0 left-0 md:static",
// //             open ? "w-64 translate-x-0" : "-translate-x-full md:translate-x-0 md:w-60",
// //             "transition-all duration-300"
// //           )}
// //         >
// //           <div className="flex flex-col gap-1 mt-16 md:mt-16">
// //             {links.map((link, index) => (
// //               <SidebarLink
// //                 key={index}
// //                 link={link}
// //                 className="text-md font-bold px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all"
// //               />
// //             ))}
// //           </div>
// //         </SidebarBody>
// //       </Sidebar>

// //       {/* 🔹 Main Content */}
// //       <main className="flex-1 p-5 sm:p-8 mt-16 md:mt-0 overflow-y-auto bg-[linear-gradient(to_top,#ffffff,#eef5ff)]">
// //         {children}
// //       </main>

// //     </div>
// //   );
// // };

// // export default SideBarLayout;

// "use client";
// import React, { useState } from "react";
// import {
//   Sidebar,
//   SidebarBody,
//   SidebarLink
// } from "@/components/ui/sidebar";

// import {
//   IconBrandTabler,
//   IconUserBolt,
//   IconTruck,
//   IconSettings,
//   IconArrowAutofitLeft,
//   IconMenu2,
//   IconLogout
// } from "@tabler/icons-react";

// import { cn } from "@/lib/utils";

// const SideBarLayout = ({ children }) => {
//   const [open, setOpen] = useState(true);

//   const links = [
//     { label: "Dashboard", href: "/#", icon: <IconBrandTabler className="h-5 w-5" /> },
//     { label: "Customers", href: "#", icon: <IconUserBolt className="h-5 w-5" /> },
//     { label: "Delivery Boys", href: "#", icon: <IconTruck className="h-5 w-5" /> },
//     { label: "Subscription Plans", href: "#", icon: <IconSettings className="h-5 w-5" /> },
//     { label: "Logout", href: "#", icon: <IconLogout className="h-5 w-5" /> },
//   ];

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-200">

//       {/* ---- SIDEBAR ---- */}
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody
//           className={cn(
//             "backdrop-blur-xl shadow-xl border-r border-white/20 transition-all duration-300",
//             open ? "w-64" : "w-20",
//             "bg-black/80 text-white fixed top-0 left-0 h-screen"
//           )}
//         >
//           {/* LOGO / TITLE */}
//           <div className="flex items-center gap-2 py-6 px-4 text-xl font-bold">
//             <IconBrandTabler className="h-6 w-6 text-blue-400" />
//             {open && <span className="tracking-wide">Admin Panel</span>}
//           </div>

//           {/* LINKS */}
//           <div className="flex flex-col gap-1 mt-6">
//             {links.map((link, index) => (
//               <SidebarLink
//                 key={index}
//                 link={link}
//                 className="text-md font-medium px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
//               />
//             ))}
//           </div>
//         </SidebarBody>
//       </Sidebar>

//       {/* ---- MAIN CONTENT ---- */}
//       <main className="flex-1 p-6 ml-20 md:ml-64 transition-all">

//         {/* TOP NAVBAR */}
//         <div className="flex justify-between items-center bg-white/80 backdrop-blur-md shadow-md px-6 py-4 rounded-xl mb-6 border border-gray-200">
//           <h1 className="text-lg font-semibold text-gray-800">Welcome Back 👋</h1>
//           <button className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
//             <img
//               src="https://i.pravatar.cc/40"
//               className="w-8 h-8 rounded-full"
//             />
//             <span className="font-medium text-gray-700">Admin</span>
//           </button>
//         </div>

//         {/* CONTENT */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-xl shadow-lg p-6 min-h-[80vh] border border-gray-200">
//           {children}
//         </div>

//       </main>
//     </div>
//   );
// };

// export default SideBarLayout;

"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

import {
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconTruck,
  IconArrowAutofitLeft,
  IconMenu2,
  IconLogout,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

const SideBarLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: <IconBrandTabler className="h-5 w-5" />,
    },
    {
      label: "Student",
      href: "/students",
      icon: <IconUserBolt className="h-5 w-5" />,
    },
    {
      label: "Student Form",
      href: "/register",
      icon: <IconUserBolt className="h-5 w-5" />,
    },
    // {
    //   label: "Delivery Boys",
    //   href: "/#",
    //   icon: <IconTruck className="h-5 w-5" />,
    // },
    // {
    //   label: "Subscription Plans",
    //   href: "/#",
    //   icon: <IconSettings className="h-5 w-5" />,
    // },
    // {
    //   label: "Reports",
    //   href: "/#",
    //   icon: <IconArrowAutofitLeft className="h-5 w-5" />,
    // },
    // { label: "Logout", href: "/#", icon: <IconLogout className="h-5 w-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Mobile top bar (only on small screens) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 bg-white shadow-md">
        <h1 className="font-semibold text-slate-800">Admin Panel</h1>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 rounded-md border border-slate-200 bg-slate-50 active:scale-95"
        >
          <IconMenu2 className="h-5 w-5 text-slate-700" />
        </button>
      </div>

      {/* Overlay on mobile when sidebar open */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-20 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody
          className={cn(
            "bg-neutral-950/95 text-white shadow-2xl border-r border-white/10",
            "fixed top-0 left-0 z-40 h-full",
            "transition-all duration-300 ease-in-out",
            "backdrop-blur-xl",
            open
              ? "w-64 translate-x-0"
              : "-translate-x-full md:translate-x-0 md:w-20",
            "pt-4 pb-6 px-3 hidden-scrollbar"
          )}
        >
          {/* Logo + toggle (desktop) */}
          <div className="flex items-center justify-between mb-6 mt-2">
            {/* Logo (only when open) */}
            {open && (
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-500/20 border border-blue-400/40">
                  <IconBrandTabler className="h-5 w-5 text-blue-300" />
                </div>
                <span className="text-base font-semibold tracking-wide">
                  Admin Panel
                </span>
              </div>
            )}

            {/* ❌ Mobile Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="md:hidden flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              <IconArrowAutofitLeft className="h-4 w-4 rotate-180" />
            </button>

            {/* Collapse/Expand (Desktop Only) */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="hidden md:flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition ml-3"
            >
              <IconArrowAutofitLeft
                className={cn("h-4 w-4", open && "rotate-180")}
              />
            </button>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-col gap-1">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>

          {/* Footer info in sidebar */}
          <div className="mt-auto pt-6 border-t border-white/10 text-xs text-neutral-400">
            {/* <p className="mb-1">Tiffin Delivery Admin</p> */}
            <p className="text-[11px] opacity-80">
              © {new Date().getFullYear()} Codepact 
            </p>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* MAIN CONTENT */}
      <main
        className={cn(
          "flex-1 flex flex-col transition-all duration-300",
          "pt-16 md:pt-6 px-4 sm:px-6 lg:px-8",
          open ? "md:ml-64" : "md:ml-20"
        )}
      >
         <Outlet />
      </main>
    </div>
  );
};

export default SideBarLayout;

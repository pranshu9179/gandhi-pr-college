// // // import { useState } from 'react'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from '/vite.svg'
// // // import './App.css'
// // // import SideBarLayout from './layout/SidebarLayout'

// // // function App() {


// // //   return (
// // //     <SideBarLayout>

// // //     </SideBarLayout>
// // //   )
// // // }

// // // export default App


// // import SideBarLayout from "./layout/SidebarLayout";

// // function App() {
// //   return (
// //     <SideBarLayout>
// //       {/* Example child content – replace with your routes/pages later */}
// //       <div className="space-y-4">
// //         <h2 className="text-xl font-semibold text-slate-800">
// //           Today’s Summary
// //         </h2>
// //         <p className="text-sm text-slate-600">
// //           This is dummy content inside <code>App.jsx</code>. Later you can
// //           integrate React Router and render different pages here for Dashboard,
// //           Customers, Delivery Boys, etc.
// //         </p>
// //       </div>
// //     </SideBarLayout>
// //   );
// // }

// // export default App;




// import SideBarLayout from "./layout/SidebarLayout";

// function App() {
//   return (
//     <SideBarLayout>

//       {/* 📊 DASHBOARD CARDS NOW INSIDE APP.jsx */}
//       <div className="space-y-6 pb-6">

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="p-5 rounded-2xl shadow-md bg-white/80 backdrop-blur-xl border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition cursor-pointer">
//             <p className="text-xs uppercase text-slate-500">Total Customers</p>
//             <h2 className="text-2xl font-bold text-slate-900 mt-1">1,245</h2>
//           </div>

//           <div className="p-5 rounded-2xl shadow-md bg-white/80 backdrop-blur-xl border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition cursor-pointer">
//             <p className="text-xs uppercase text-slate-500">Orders Delivered</p>
//             <h2 className="text-2xl font-bold text-slate-900 mt-1">3,842</h2>
//           </div>

//           <div className="p-5 rounded-2xl shadow-md bg-white/80 backdrop-blur-xl border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition cursor-pointer">
//             <p className="text-xs uppercase text-slate-500">Active Plans</p>
//             <h2 className="text-2xl font-bold text-slate-900 mt-1">523</h2>
//           </div>

//           <div className="p-5 rounded-2xl shadow-md bg-white/80 backdrop-blur-xl border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition cursor-pointer">
//             <p className="text-xs uppercase text-slate-500">Revenue</p>
//             <h2 className="text-2xl font-bold text-slate-900 mt-1">₹2,48,920</h2>
//           </div>
//         </div>

//         {/* Page Content Below */}
//         <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 p-6">
//           <h2 className="text-lg font-semibold text-slate-800 mb-2">
//             Dashboard Overview
//           </h2>
//           <p className="text-sm text-slate-600">
//             Content now moved to App.jsx 🔥
//           </p>
//         </div>
//       </div>

//     </SideBarLayout>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBarLayout from "./layout/SidebarLayout";

// Pages
import Dashboard from "./pages/DashBoard";
import Students from "./pages/Students";
import StudentForm from "./pages/StudentForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes under Sidebar */}
        <Route element={<SideBarLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/register" element={<StudentForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

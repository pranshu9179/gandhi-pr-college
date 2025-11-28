// import React, { useState, useEffect } from "react";

// const StudentForm = () => {
//   const [step, setStep] = useState(1);

//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     className: "",
//     schoolName: "",
//     admission: 0,
//     registration: 0,
//     tuition: 0,
//     caution: 0,
//     library: 0,
//     laboratory: 0,
//     identity: 0,
//     practical: 0,
//     sports: 0,
//     activities: 0,
//     development: 0,
//     welfare: 0,
//     examForm: 0,
//     examFees: 0,
//     eligibility: 0,
//     enrollment: 0,
//     others: 0,
//     total: 0,
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   // 🔹 Auto Calculate Total
//   useEffect(() => {
//     const feeKeys = Object.keys(formData).filter(
//       (key) =>
        // !["name", "fatherName", "className", "schoolName", "total"].includes(key)
//     );

//     const totalSum = feeKeys.reduce(
//       (sum, key) => sum + Number(formData[key] || 0),
//       0
//     );

//     setFormData((prev) => ({ ...prev, total: totalSum }));
//   }, [formData]);

//   // 🔹 Save Form to LocalStorage
//   const submitForm = () => {
//     const existing = JSON.parse(localStorage.getItem("students")) || [];
//     const updatedList = [...existing, formData];
//     localStorage.setItem("students", JSON.stringify(updatedList));

//     alert("✔ Student Registered Successfully!");

//     // Reset & Go Back
//     setFormData({
//       name: "",
//       fatherName: "",
//       className: "",
//       schoolName: "",
//       admission: 0,
//       registration: 0,
//       tuition: 0,
//       caution: 0,
//       library: 0,
//       laboratory: 0,
//       identity: 0,
//       practical: 0,
//       sports: 0,
//       activities: 0,
//       development: 0,
//       welfare: 0,
//       examForm: 0,
//       examFees: 0,
//       eligibility: 0,
//       enrollment: 0,
//       others: 0,
//       total: 0,
//     });

//     setStep(1);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex justify-center items-center">
//       <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200">

//         <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 border-b pb-2">
//           Student Registration Form
//         </h1>

//         {/* Step Indicator */}
//         <div className="flex justify-center mb-6">
//           <div className="flex gap-3 sm:gap-4">
//             <div
//               className={`px-3 sm:px-4 py-2 rounded-full text-sm font-semibold text-center ${
//                 step === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               Step 1: Personal Details
//             </div>

//             <div
//               className={`px-3 sm:px-4 py-2 rounded-full text-sm font-semibold text-center ${
//                 step === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               Step 2: Fees Details
//             </div>
//           </div>
//         </div>

//         {/* STEP 1 UI */}
//         {step === 1 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             <div className="flex flex-col">
//               <label className="font-semibold mb-1">Full Name</label>
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
//                 placeholder="Enter full name"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold mb-1">Father / Husband Name</label>
//               <input
//                 name="fatherName"
//                 value={formData.fatherName}
//                 onChange={handleChange}
//                 className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
//                 placeholder="Enter name"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold mb-1">Class</label>
//               <input
//                 name="className"
//                 value={formData.className}
//                 onChange={handleChange}
//                 className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
//                 placeholder="Enter class"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold mb-1">School / College Name</label>
//               <input
//                 name="schoolName"
//                 value={formData.schoolName}
//                 onChange={handleChange}
//                 className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
//                 placeholder="Enter school/college name"
//               />
//             </div>

//            {/* NEXT BUTTON */}
//             <div className="col-span-2 flex justify-end">
//               <button
//                 onClick={() => setStep(2)}
//                 className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
//               >
//                 Next →
//               </button>
//             </div>

//           </div>
//         )}

//         {/* STEP 2 UI */}
//         {step === 2 && (
//           <div className="space-y-6 max-h-[70vh] overflow-y-auto md:pr-56 md:pl-45 md:ml-2">

//             <div className="flex flex-col justify-center items-center gap-3">

//               {[
//                 ["admission", "Admission Fees"],
//                 ["registration", "Registration Fees"],
//                 ["tuition", "Tuition Fees"],
//                 ["caution", "Caution Fees"],
//                 ["library", "Library Fees"],
//                 ["laboratory", "Laboratory Fees"],
//                 ["identity", "Identity & Library Fees"],
//                 ["practical", "Practical Fees"],
//                 ["sports", "Games & Sports Fees"],
//                 ["activities", "Activities / Cultural / Adventure"],
//                 ["development", "College Development Fees"],
//                 ["welfare", "Community Welfare Fees"],
//                 ["examForm", "University Exam Form Fees"],
//                 ["examFees", "University Exam Fees"],
//                 ["eligibility", "University Eligibility Fees"],
//                 ["enrollment", "University Enrollment Fees"],
//                 ["others", "Others"],
//               ].map(([field, label], index) => (
//                 <div
//                   key={index}
//                   className="
//                     flex 
//                     flex-col sm:flex-row
//                     items-start sm:items-center
//                     justify-between
//                     gap-2
//                     w-full bg-gray-50 
//                      rounded-xl px-4 py-3
//                   "
//                 >
//                   <span className="text-[15px] font-semibold text-gray-800 w-full">
//                     {label}
//                   </span>

//                   <input
//                     type="number"
//                     name={field}
//                     min={0}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     className="
//                       p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none
//                       w-full sm:w-32 text-center
//                     "
//                     placeholder="0"
//                   />
//                 </div>
//               ))}

//               {/* 🔥 TOTAL FIELD */}
//               <div
//                 className="
//                   flex 
//                   flex-col sm:flex-row
//                   items-start sm:items-center
//                   justify-between
//                   gap-2
//                   w-full bg-blue-50 
//                   border border-blue-300
//                   rounded-xl px-4 py-3
//                 "
//               >
//                 <span className="text-[15px] font-bold text-blue-800 w-full">
//                   Total Amount (Auto)
//                 </span>

//                 <input
//                   type="number"
//                   value={formData.total}
//                   readOnly
//                   className="
//                     p-2 border rounded-lg bg-white font-bold text-blue-700 text-center
//                     w-full sm:w-32
//                   "
//                 />
//               </div>

//             </div>

//             <div className="flex justify-between mt-6 pb-4">
//               <button
//                 onClick={() => setStep(1)}
//                 className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition font-semibold"
//               >
//                 ← Back
//               </button>

//               <button
//                 onClick={submitForm}
//                 className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
//               >
//                 Submit ✓
//               </button>
//             </div>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default StudentForm;




import React, { useState, useEffect } from "react";

const StudentForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    className: "",
    schoolName: "",
    admission: 0,
    registration: 0,
    tuition: 0,
    caution: 0,
    library: 0,
    laboratory: 0,
    identity: 0,
    practical: 0,
    sports: 0,
    activities: 0,
    development: 0,
    welfare: 0,
    examForm: 0,
    examFees: 0,
    eligibility: 0,
    enrollment: 0,
    others: 0,
    total: 0,
  });

  // Handle input changes
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // 🔥 Auto total calculation (fixed)
  useEffect(() => {
    const feeKeys = [
      "admission",
      "registration",
      "tuition",
      "caution",
      "library",
      "laboratory",
      "identity",
      "practical",
      "sports",
      "activities",
      "development",
      "welfare",
      "examForm",
      "examFees",
      "eligibility",
      "enrollment",
      "others",
    ];

    const totalSum = feeKeys.reduce(
      (sum, key) => sum + Number(formData[key] || 0),
      0
    );

    if (totalSum !== formData.total) {
      setFormData((prev) => ({ ...prev, total: totalSum }));
    }
  }, [
    formData.admission,
    formData.registration,
    formData.tuition,
    formData.caution,
    formData.library,
    formData.laboratory,
    formData.identity,
    formData.practical,
    formData.sports,
    formData.activities,
    formData.development,
    formData.welfare,
    formData.examForm,
    formData.examFees,
    formData.eligibility,
    formData.enrollment,
    formData.others,
  ]);

  // Save to LocalStorage
  const submitForm = () => {
    const existing = JSON.parse(localStorage.getItem("students")) || [];
    const updatedList = [...existing, formData];

    localStorage.setItem("students", JSON.stringify(updatedList));

    alert("✔ Student Registered Successfully!");

    setFormData({
      name: "",
      fatherName: "",
      className: "",
      schoolName: "",
      admission: 0,
      registration: 0,
      tuition: 0,
      caution: 0,
      library: 0,
      laboratory: 0,
      identity: 0,
      practical: 0,
      sports: 0,
      activities: 0,
      development: 0,
      welfare: 0,
      examForm: 0,
      examFees: 0,
      eligibility: 0,
      enrollment: 0,
      others: 0,
      total: 0,
    });

    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200">

        <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 border-b pb-2">
          Student Registration Form
        </h1>

        {/* STEP INDICATOR */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-3 sm:gap-4">
            <div
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-semibold text-center ${
                step === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              Step 1: Personal Details
            </div>

            <div
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-semibold text-center ${
                step === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              Step 2: Fees Details
            </div>
          </div>
        </div>

        {/* STEP 1 UI */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter full name"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1">Father / Husband Name</label>
              <input
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter name"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1">Class</label>
              <input
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter class"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1">School / College Name</label>
              <input
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter school/college name"
              />
            </div>

              {/* NEXT BUTTON */}
            <div className="col-span-2 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 UI */}
        {step === 2 && (
          <div className="space-y-6 max-h-[70vh] overflow-y-auto md:pr-20 ">

            <div className="flex flex-col justify-center items-center gap-3">

              {[
                ["admission", "Admission Fees"],
                ["registration", "Registration Fees"],
                ["tuition", "Tuition Fees"],
                ["caution", "Caution Fees"],
                ["library", "Library Fees"],
                ["laboratory", "Laboratory Fees"],
                ["identity", "Identity & Library Fees"],
                ["practical", "Practical Fees"],
                ["sports", "Games & Sports Fees"],
                ["activities", "Activities / Cultural / Adventure"],
                ["development", "College Development Fees"],
                ["welfare", "Community Welfare Fees"],
                ["examForm", "University Exam Form Fees"],
                ["examFees", "University Exam Fees"],
                ["eligibility", "University Eligibility Fees"],
                ["enrollment", "University Enrollment Fees"],
                ["others", "Others"],
              ].map(([field, label], index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 w-full bg-gray-50 rounded-xl px-4 py-3"
                >
                  <span className="text-[15px] font-semibold text-gray-800 w-full">
                    {label}
                  </span>

                  <input
                    type="number"
                    name={field}
                    value={formData[field]}
                    min={0}
                    onChange={handleChange}
                    className="p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none w-full sm:w-32 text-center"
                  />
                </div>
              ))}

              {/* TOTAL FIELD */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 w-full bg-blue-50 border border-blue-300 rounded-xl px-4 py-3">
                <span className="text-[15px] font-bold text-blue-800 w-full">
                  Total Amount
                </span>

                <input
                  type="number"
                  value={formData.total}
                  readOnly
                  className="p-2 border rounded-lg bg-white font-bold text-blue-700 text-center w-full sm:w-32"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6 pb-4">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition font-semibold"
              >
                ← Back
              </button>

              <button
                onClick={submitForm}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
              >
                Submit ✓
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default StudentForm;

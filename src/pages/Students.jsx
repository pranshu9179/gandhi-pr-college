import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalType, setModalType] = useState(null); // 'view' | 'receipt' | null

  // Load students from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(stored);
  }, []);

  // Delete student
  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    localStorage.setItem("students", JSON.stringify(updated));
    setStudents(updated);
  };

  // Open modals
  const openViewModal = (student) => {
    setSelectedStudent(student);
    setModalType("view");
  };

  const openReceiptModal = (student) => {
    setSelectedStudent(student);
    setModalType("receipt");
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setModalType(null);
  };

  // Map for fee field labels (same order as form)
  const feeFieldLabels = [
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
    ["others", "Other Fees"],
  ];

  // Generate School-style Receipt PDF
  const generatePDF = (student) => {
    const doc = new jsPDF("p", "mm", "a4");

    // Outer border
    doc.rect(10, 10, 190, 277);

    // College Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("GANDHI P.R. COLLEGE", 105, 22, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("D-1 Danish Nagar, Hoshangabad Road, Bhopal - 462023", 105, 28, {
      align: "center",
    });
    doc.text(
      "Approved NCTE, Affiliated to Barkatullah University & Recognised by Govt. of M.P.",
      105,
      33,
      { align: "center" }
    );

    // Title line
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("FEE RECEIPT", 105, 42, { align: "center" });

    // Receipt meta (you can adjust)
    const today = new Date();
    const dateStr = today.toLocaleDateString("en-IN");
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${dateStr}`, 150, 50);
    doc.text(
      `Receipt No: ${Math.floor(Math.random() * 90000) + 10000}`,
      20,
      50
    );

    // Student details box
    doc.rect(15, 55, 180, 22);
    doc.setFontSize(10);
    doc.text(`Name of Scholar: ${student.name || "-"}`, 18, 62);
    doc.text(`Father/Husband's Name: ${student.fatherName || "-"}`, 18, 68);
    doc.text(`Class: ${student.className || "-"}`, 18, 74);

    // Wrapped school name on right
    const schoolText = doc.splitTextToSize(
      `School/College: ${student.schoolName || "-"}`,
      85 // max width before wrapping
    );
    doc.text(schoolText, 110, 62); // aligns properly in box

    // Table header
    const startY = 84;
    doc.rect(15, startY, 180, 8);
    doc.text("S. No.", 18, startY + 5);
    doc.text("PARTICULARS", 45, startY + 5);
    doc.text("AMOUNT (₹)", 160, startY + 5);

    // Table rows
    let rowY = startY + 8;
    let serial = 1;

    feeFieldLabels.forEach(([field, label]) => {
      const amount = Number(student[field] || 0);
      // You can skip zero rows; if you want all rows, remove this 'if'
      if (amount >= 0) {
        doc.rect(15, rowY, 180, 8);
        doc.text(String(serial), 18, rowY + 5);
        doc.text(label, 45, rowY + 5);
        doc.text(amount.toFixed(2), 175, rowY + 5, { align: "right" });
        serial += 1;
        rowY += 8;
      }
    });

    // Total row
    doc.setFont("helvetica", "bold");
    doc.rect(15, rowY, 180, 8);
    doc.text("TOTAL", 45, rowY + 5);
    doc.text(`₹${Number(student.total || 0).toFixed(2)}`, 175, rowY + 5, {
      align: "right",
    });

    // Signature section
    const signY = rowY + 20;
    doc.setFont("helvetica", "normal");
    doc.text(
      "Note: Fees once paid will not be refundable in any circumstances.",
      15,
      signY
    );
    doc.text("Receipt subject to realisation of cheque.", 15, signY + 6);

    doc.text("Clerk", 30, signY + 28);
    doc.text("Checker", 100, signY + 28);
    doc.text("Authorised Signatory", 160, signY + 28, { align: "center" });

    doc.save(`${student.name || "student"}_fee_receipt.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
              All Students ({students.length})
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Manage registered students, view details and download fee
              receipts.
            </p>
          </div>

          {/* (Optional) placeholder for future search/filter */}
          {/* <div>
            <input
              placeholder="Search by name..."
              className="px-3 py-2 text-sm border rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
        </div>

        {/* Table container */}
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="p-3 text-left">No.</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Class</th>
                <th className="p-3 text-left">School / College</th>
                <th className="p-3 text-left">Total Fees</th>
                {/* <th className="p-3 text-center">Status</th> */}
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="p-3 align-middle">{index + 1}</td>
                  <td className="p-3 font-semibold align-middle">
                    {student.name || "-"}
                  </td>
                  <td className="p-3 align-middle">
                    {student.className || "-"}
                  </td>
                  <td className="p-3 align-middle">
                    <span className="line-clamp-1 max-w-[180px]">
                      {student.schoolName || "-"}
                    </span>
                  </td>
                  <td className="p-3 font-bold text-emerald-600 align-middle">
                    ₹{Number(student.total || 0)}
                  </td>

                  {/* Status pill */}
                  {/* <td className="p-3 text-center align-middle"> */}
                  {/* <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      ● Active
                    </span> */}
                  {/* </td> */}

                  {/* Actions */}
                  <td className="p-3 align-middle">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <button
                        onClick={() => openViewModal(student)}
                        className="px-3 py-1.5 text-[11px] sm:text-xs rounded-lg bg-slate-800 text-white hover:bg-black transition shadow-sm"
                      >
                        👁 View
                      </button>

                      <button
                        onClick={() => openReceiptModal(student)}
                        className="px-3 py-1.5 text-[11px] sm:text-xs rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition shadow-sm"
                      >
                        📄 Receipt
                      </button>

                      {/* Edit (placeholder) */}
                      {/* <button
                        className="px-3 py-1.5 text-[11px] sm:text-xs rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-sm"
                      >
                        ✏ Edit
                      </button>

                      <button
                        onClick={() => deleteStudent(index)}
                        className="px-3 py-1.5 text-[11px] sm:text-xs rounded-lg bg-red-500 text-white hover:bg-red-600 transition shadow-sm"
                      >
                        🗑 Delete
                      </button> */}
                    </div>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-slate-500">
                    No students registered yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* =================== VIEW MODAL =================== */}
      {modalType === "view" && selectedStudent && (
        <div
          className="fixed inset-0 bg-black/45 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4 overflow-y-auto py-6"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-slate-800 mb-1">
              Student Details
            </h2>
            <p className="text-xs text-slate-500 mb-4">
              Complete profile and fee summary of the student.
            </p>
            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-[11px] text-slate-500">Full Name</p>
                <p className="text-sm font-semibold text-slate-800">
                  {selectedStudent.name || "-"}
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-[11px] text-slate-500">
                  Father / Husband Name
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  {selectedStudent.fatherName || "-"}
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-[11px] text-slate-500">Class</p>
                <p className="text-sm font-semibold text-slate-800">
                  {selectedStudent.className || "-"}
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-[11px] text-slate-500">School / College</p>
                <p className="text-sm font-semibold text-slate-800">
                  {selectedStudent.schoolName || "-"}
                </p>
              </div>
            </div>
            {/* Fees Summary */}
            <div className="bg-slate-50 rounded-2xl p-4 max-h-[40vh] overflow-y-auto">
              <h3 className="text-sm font-semibold text-slate-700 mb-2">
                Fee Breakdown
              </h3>
              <div className="space-y-1.5 text-xs">
                {feeFieldLabels.map(([field, label]) => (
                  <div
                    key={field}
                    className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1"
                  >
                    <span className="text-slate-600">{label}</span>
                    <span className="font-semibold text-slate-900">
                      ₹{Number(selectedStudent[field] || 0)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-between items-center pt-2 border-t border-slate-300">
                <span className="text-sm font-bold text-slate-800">
                  Total Amount
                </span>
                <span className="text-base font-extrabold text-emerald-600">
                  ₹{Number(selectedStudent.total || 0)}
                </span>
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  closeModal();
                  openReceiptModal(selectedStudent);
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
              >
                View Receipt →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================== RECEIPT PREVIEW MODAL =================== */}
      {modalType === "receipt" && selectedStudent && (
        <div
          className="fixed inset-0 bg-black/45 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4 overflow-y-auto py-6"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-4 sm:p-6 relative max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>

            {/* Receipt frame */}
            <div className="border rounded-xl p-4 sm:p-5 text-xs sm:text-sm">
              {/* Header */}
              <div className="text-center mb-3">
                <h2 className="text-lg sm:text-xl font-extrabold">
                  GANDHI P.R. COLLEGE
                </h2>
                <p className="text-[10px] sm:text-xs text-slate-600">
                  D-1 Danish Nagar, Hoshangabad Road, Bhopal - 462023
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-500">
                  Approved NCTE, Affiliated to Barkatullah University &
                  Recognised by Govt. of M.P.
                </p>
                <p className="mt-1 text-[11px] font-semibold tracking-wide">
                  FEE RECEIPT
                </p>
              </div>

              {/* Meta row */}
              <div className="flex justify-between text-[11px] mb-2">
                <span>
                  Receipt No:{" "}
                  <strong>{10000 + Math.floor(Math.random() * 90000)}</strong>
                </span>
                <span>
                  Date:{" "}
                  <strong>{new Date().toLocaleDateString("en-IN")}</strong>
                </span>
              </div>

              {/* Student info box */}
              <div className="border rounded-lg p-2 mb-3 text-[11px] space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span>
                    Name of Scholar:{" "}
                    <strong>{selectedStudent.name || "-"}</strong>
                  </span>
                  <span>
                    Class: <strong>{selectedStudent.className || "-"}</strong>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span>
                    Father/Husband's Name:{" "}
                    <strong>{selectedStudent.fatherName || "-"}</strong>
                  </span>
                  <span>
                    School / College:{" "}
                    <strong>{selectedStudent.schoolName || "-"}</strong>
                  </span>
                </div>
              </div>

              {/* Fee table */}
              <table className="w-full text-[11px] border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-2 py-1 w-10">
                      S. No.
                    </th>
                    <th className="border border-slate-300 px-2 py-1">
                      PARTICULARS
                    </th>
                    <th className="border border-slate-300 px-2 py-1 w-24">
                      AMOUNT (₹)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeFieldLabels.map(([field, label], idx) => (
                    <tr key={field}>
                      <td className="border border-slate-300 px-2 py-1 text-center">
                        {idx + 1}
                      </td>
                      <td className="border border-slate-300 px-2 py-1">
                        {label}
                      </td>
                      <td className="border border-slate-300 px-2 py-1 text-right">
                        {Number(selectedStudent[field] || 0).toFixed(2)}
                      </td>
                    </tr>
                  ))}

                  {/* Total row */}
                  <tr className="bg-slate-100 font-bold">
                    <td className="border border-slate-300 px-2 py-1"></td>
                    <td className="border border-slate-300 px-2 py-1 text-right">
                      TOTAL
                    </td>
                    <td className="border border-slate-300 px-2 py-1 text-right">
                      ₹{Number(selectedStudent.total || 0).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Note + signature */}
              <div className="mt-3 text-[10px] text-slate-600">
                <p>
                  Note: Fees once paid will not be refundable in any
                  circumstances. Receipt subject to realisation of cheque.
                </p>
              </div>

              <div className="mt-4 flex justify-between text-[11px]">
                <span>Clerk</span>
                <span>Checker</span>
                <span>Authorised Signatory</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => generatePDF(selectedStudent)}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700"
              >
                📄 Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;

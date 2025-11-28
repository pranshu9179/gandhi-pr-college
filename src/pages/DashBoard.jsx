// import SideBarLayout from "../layout/SidebarLayout";

const Dashboard = () => {
  return (
    // <SideBarLayout>
    <div className="space-y-6 pb-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-xl shadow-md">
          <p>Total Students</p>
          <h2 className="text-2xl font-bold">12,540</h2>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-md">
          <p>Total Faculty</p>
          <h2 className="text-2xl font-bold">320</h2>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-md">
          <p>Departments</p>
          <h2 className="text-2xl font-bold">26</h2>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-md">
          <p>Revenue</p>
          <h2 className="text-2xl font-bold">₹2,48,920</h2>
        </div>
      </div>

    </div>
    // </SideBarLayout>
  );
};

export default Dashboard;

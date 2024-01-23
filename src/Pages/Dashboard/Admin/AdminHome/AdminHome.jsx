const AdminHome = () => {
  return (
    <div className="mt-12">
        {/* TODO: */}
      <h1 className="text-4xl">Pending requests (max: 5 items)</h1>
      <h1 className="text-4xl">● Top most requested items (max: 4 items)</h1>
      <h1 className="text-4xl">
        ● Limited Stock items (Quantity less than 10)
      </h1>
      <h1 className="text-4xl">
        ● Make a pie chart for the total percentage of returnable items and
        non-returnable items requested by the employee.
      </h1>
      <h1 className="text-4xl">● Add 2 relevant extra section</h1>
    </div>
  );
};

export default AdminHome;

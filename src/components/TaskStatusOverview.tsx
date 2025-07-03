const TaskStatusOverview = () => {
  const statusData = [
    { label: "Unassigned", count: 6, color: "bg-gray-100 text-gray-700" },
    { label: "In Progress", count: 1, color: "bg-blue-100 text-blue-700" },
    { label: "Completed", count: 0, color: "bg-green-100 text-green-700" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {statusData.map((status, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 p-6 text-center"
        >
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            {status.label}
          </h3>
          <div className="text-4xl font-bold text-gray-900 mb-1">
            {status.count}
          </div>
          <div className="text-sm text-gray-500">tasks</div>
        </div>
      ))}
    </div>
  );
};

export default TaskStatusOverview;

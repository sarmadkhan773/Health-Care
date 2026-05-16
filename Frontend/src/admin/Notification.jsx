import { useState } from "react";
import { Bell, CheckCheck, Trash2 } from "lucide-react";

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Appointment",
      message: "A new appointment has been booked by John Doe.",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      title: "Payment Received",
      message: "You received a payment of $120.",
      time: "10 min ago",
      read: false,
    },
    {
      id: 3,
      title: "System Update",
      message: "System will be updated tonight at 2 AM.",
      time: "1 hour ago",
      read: true,
    },
  ]);

  // Mark single notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  // Clear all notifications
  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Bell className="text-teal-600" />
          <h2 className="text-xl font-bold text-gray-800">
            Notifications
          </h2>
        </div>

        <button
          onClick={clearAll}
          className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
        >
          <Trash2 size={16} />
          Clear All
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-400 text-center py-10">
            No notifications
          </p>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-2xl border flex justify-between items-start gap-4 transition ${
                n.read
                  ? "bg-gray-50 border-gray-100"
                  : "bg-teal-50 border-teal-100"
              }`}
            >
              {/* Left Content */}
              <div>
                <h3 className="font-semibold text-gray-800">
                  {n.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {n.message}
                </p>

                <span className="text-xs text-gray-400 mt-2 block">
                  {n.time}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {!n.read && (
                  <button
                    onClick={() => markAsRead(n.id)}
                    className="text-teal-600 hover:text-teal-700"
                    title="Mark as read"
                  >
                    <CheckCheck size={18} />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notification;
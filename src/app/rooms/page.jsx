import RoomCard from "@/Components/RoomCard";


async function getRooms() {
  const res = await fetch("http://localhost:5000/rooms", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch rooms");
  }

  return res.json();
}

const RoomsPage = async () => {
  const rooms = await getRooms();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Available Study Rooms
      </h1>

      {rooms.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-500">
            No rooms found
          </h2>
          <p className="mt-2 text-gray-400">
            There are currently no study rooms available.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard
              key={room._id}
              room={room}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomsPage;
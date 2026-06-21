"use client";

const AddRoomsPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const room = Object.fromEntries(formData.entries());

    console.log(room);

    const res = await fetch('http://localhost:5000/rooms', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(room),
    })

    const data = await res.json()
    console.log(data);
  };

  return (
    <div className="w-4xl mx-auto px-4 py-10">
      <div className="bg-base-100 shadow-xl rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Add Study Room
        </h1>

        <form onSubmit={onSubmit} className="space-y-6">

          {/* Room Name */}
          <input
            name="roomName"
            type="text"
            placeholder="Quiet Study Room"
            className="input input-bordered w-full"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            rows="5"
            placeholder="Describe the room..."
            className="textarea textarea-bordered w-full"
            required
          />

          {/* Image URL */}
          <input
            name="image"
            type="url"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            required
          />

          {/* Floor */}
          <input
            name="floor"
            type="text"
            placeholder="3rd Floor"
            className="input input-bordered w-full"
            required
          />

          {/* Capacity */}
          <input
            name="capacity"
            type="number"
            min="1"
            placeholder="4"
            className="input input-bordered w-full"
            required
          />

          {/* Hourly Rate */}
          <input
            name="hourlyRate"
            type="number"
            min="1"
            placeholder="5"
            className="input input-bordered w-full"
            required
          />

          {/* Amenities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

            <label className="flex items-center gap-3">
              <input
                name="amenities"
                value="Whiteboard"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              Whiteboard
            </label>

            <label className="flex items-center gap-3">
              <input
                name="amenities"
                value="Projector"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              Projector
            </label>

            <label className="flex items-center gap-3">
              <input
                name="amenities"
                value="Wi-Fi"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              Wi-Fi
            </label>

            <label className="flex items-center gap-3">
              <input
                name="amenities"
                value="Power Outlets"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              Power Outlets
            </label>

            <label className="flex items-center gap-3">
              <input
                name="amenities"
                value="Quiet Zone"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              Quiet Zone
            </label>

            <label className="flex items-center gap-3">
              <input
                name="amenities"
                value="Air Conditioning"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              Air Conditioning
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Add Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoomsPage;
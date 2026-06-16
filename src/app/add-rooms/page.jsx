

"use client";

import { useForm } from "react-hook-form";

const amenitiesOptions = [
  "Whiteboard",
  "Projector",
  "Wi-Fi",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

const AddRooms = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const selectedAmenities = amenitiesOptions.filter(
      (amenity) => data.amenities?.includes(amenity)
    );

    const roomData = {
      roomName: data.roomName,
      description: data.description,
      image: data.image,
      floor: data.floor,
      capacity: Number(data.capacity),
      hourlyRate: Number(data.hourlyRate),
      amenities: selectedAmenities,
    };

    console.log(roomData);

    // axios.post(...)
    // toast.success("Room added successfully")

    reset();
  };

  return (
    <div className="w-6xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">
            Add Study Room
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Room Name */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Room Name
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter room name"
                className="input input-bordered w-full"
                {...register("roomName", {
                  required: true,
                })}
              />
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Description
                </span>
              </label>

              <textarea
                rows="5"
                placeholder="Room description"
                className="textarea textarea-bordered w-full"
                {...register("description", {
                  required: true,
                })}
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Image URL
                </span>
              </label>

              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full"
                {...register("image", {
                  required: true,
                })}
              />
            </div>

            {/* Floor */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Floor
                </span>
              </label>

              <input
                type="text"
                placeholder="e.g. 3rd Floor"
                className="input input-bordered w-full"
                {...register("floor", {
                  required: true,
                })}
              />
            </div>

            {/* Capacity */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Capacity
                </span>
              </label>

              <input
                type="number"
                min="1"
                placeholder="e.g. 4"
                className="input input-bordered w-full"
                {...register("capacity", {
                  required: true,
                })}
              />
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Hourly Rate ($)
                </span>
              </label>

              <input
                type="number"
                min="1"
                placeholder="e.g. 5"
                className="input input-bordered w-full"
                {...register("hourlyRate", {
                  required: true,
                })}
              />
            </div>

            {/* Amenities */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Amenities
                </span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {amenitiesOptions.map((amenity) => (
                  <label
                    key={amenity}
                    className="label cursor-pointer justify-start gap-3"
                  >
                    <input
                      type="checkbox"
                      value={amenity}
                      className="checkbox checkbox-primary"
                      {...register("amenities")}
                    />

                    <span>{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Add Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRooms;
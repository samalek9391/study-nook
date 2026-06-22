import Image from "next/image";
import Link from "next/link";

const RoomCard = ({ room }) => {
  const {
    _id,
    roomName,
    image,
    description,
    floor,
    capacity,
    hourlyRate,
    amenities = [],
  } = room;

  return (
    <div className="card bg-base-100 shadow-lg h-full">
      <figure className="h-56 overflow-hidden">
        <Image
          src={image}
          alt={roomName}
          className="w-full h-full object-cover"
          width={600}
          height={400}
          unoptimized
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {roomName}
        </h2>

        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        <div className="space-y-1">
          <p>
            <strong>Floor:</strong> {floor}
          </p>

          <p>
            <strong>Capacity:</strong> {capacity} people
          </p>

          <p>
            <strong>Rate:</strong> ${hourlyRate}/hr
          </p>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mt-2">
          {amenities.slice(0, 3).map((item) => (
            <span
              key={item}
              className="badge badge-outline"
            >
              {item}
            </span>
          ))}

          {amenities.length > 3 && (
            <span className="badge badge-primary">
              +{amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="card-actions justify-end mt-4">
          <Link
            href={`/rooms/${_id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
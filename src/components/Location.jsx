// LocationIcon.js

import { useRouter } from "next/router";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const LocationIcon = () => {
  const latitude = "";
  const longitude = "";
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the map page with latitude and longitude as query parameters
    router.push(
      `https://www.google.com/maps/place/23%C2%B015'55.0%22N+77%C2%B024'19.2%22E/@23.2652866,77.4053275,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.2652866!4d77.4053275?entry=ttu`
    );
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="flex items-center gap-1">
        <IoLocationSharp className="text-c2" />
        <p className="text-sm">Bhopal</p>
      </div>
    </div>
  );
};

export default LocationIcon;

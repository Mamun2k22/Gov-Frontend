import React, { useState, useEffect } from "react";
import axios from "axios";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notice = () => {
  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch notice data when the component mounts
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/notices");
        setNotice(response.data); // Set the single notice object
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching notice:", err);
        setError("Failed to fetch notice");
        setIsLoading(false);
      }
    };

    fetchNotice();
  }, []); // Empty dependency array means this will run once when the component mounts

  // Show loading, error, or notice content
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!notice) {
    return <div>No notice available</div>;
  }

  return (
    <div className="bg-[#F5F5F5] pl-20 p-8">
      {/* Notice Title */}
      <h1 className="text-3xl">{notice.title}</h1> {/* Dynamic title */}

      {/* Notice Description */}
      <p className="mt-6 pr-0">
        <span className="block mb-4">
          <FontAwesomeIcon
            className="text-green-600"
            icon={faCircleCheck}
            style={{ marginRight: "8px" }}
          />
          {notice.description} {/* Dynamic description */}
        </span>
      </p>


      {/* {notice.image ? (
        <div>
          <img
            src={`http://localhost:5000${notice.image}`} 
            alt="Notice"
            className="mt-4 max-w-full h-auto"
          />
        </div>
      ) : (
        <p>No image available</p>
      )} */}
    </div>
  );
};

export default Notice;

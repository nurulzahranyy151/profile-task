import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    
    name: "Nurul Qalbi Zahrani",
    email: "nurulqalbizahrani11@gmail.com",
    description: "Undergraduate Student at Mataram University"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>User Profile</h2>

      {isEditing ? (
       
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
          <br />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
          <br />

          <label>Description: </label>
          <textarea
            name="description"
            value={profile.description}
            onChange={handleChange}
          />
          <br />

          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
       
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Description:</strong> {profile.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

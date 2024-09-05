import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Nurul Qalbi Zahrani",
    email: "nurulqalbizahrani11@gmail.com",
    description: "Undergraduate Student at Mataram University",
    avatar: "",
    externalLink: "https://www.linkedin.com/in/nurul-qalbi-zahrani",
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

          <label>Avatar URL: </label>
          <input
            type="text"
            name="avatar"
            value={profile.avatar}
            onChange={handleChange}
          />
          <br />

          <label>External Link: </label>
          <input
            type="text"
            name="externalLink"
            value={profile.externalLink}
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
          {profile.avatar && <img src={profile.avatar} alt="Avatar" style={{ width: "100px", borderRadius: "10px" }} />}
          <p><strong>External Link:</strong> <a href={profile.externalLink}>{profile.externalLink}</a></p>

          <button onClick={() => setIsEditing(true)}>Update Profile</button>
          <button onClick={() => alert("Update External Link")}>Update External Link</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

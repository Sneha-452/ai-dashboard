import React, { useEffect, useState } from 'react';
import './Card.css';

function Card() {
  const [avatars, setAvatars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newAvatar, setNewAvatar] = useState({
    first_name: '',
    last_name: '',
    avatar: ''
  });

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1&per_page=3')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setAvatars(data.data);
        } else {
          setAvatars([]);
        }
      })
      .catch(err => {
        console.error('Error fetching avatars:', err);
        setAvatars([]);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const newEntry = {
      id,
      first_name: newAvatar.first_name,
      last_name: newAvatar.last_name,
      avatar: newAvatar.avatar
    };
    setAvatars([...avatars, newEntry]);
    setShowModal(false);
    setNewAvatar({ first_name: '', last_name: '', avatar: '' });
  };

  return (
    <div className="card-section">
      <h2 className="section-title">Avatar AI Dahboard</h2>

      <div className="avatar-grid">
        {avatars.map(user => (
          <div key={user.id} className="avatar-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{user.first_name} {user.last_name}</h3>
            <button>Edit</button>
          </div>
        ))}
      </div>

      <button className="floating-button" onClick={() => setShowModal(true)}>
        + Create New Avatar
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Create New Avatar</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={newAvatar.first_name}
                onChange={(e) => setNewAvatar({ ...newAvatar, first_name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={newAvatar.last_name}
                onChange={(e) => setNewAvatar({ ...newAvatar, last_name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Avatar Image URL"
                value={newAvatar.avatar}
                onChange={(e) => setNewAvatar({ ...newAvatar, avatar: e.target.value })}
                required
              />
              <button type="submit">Add Avatar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;








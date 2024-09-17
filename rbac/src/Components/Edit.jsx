import React, { useState, useEffect } from 'react';

export default function EditUserModal({ show, onClose, user, onUpdate }) {
  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    if (user) setUpdatedUser(user);
  }, [user]);

  const handleUpdate = () => {
    onUpdate(updatedUser);
    onClose();
  };

  if (!show || !user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit User</h2>
        <input className='modal-input'
          type="text"
          placeholder="User Name"
          value={updatedUser.name}
          onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
        />
        <input className='modal-input'
          type="text"
          placeholder="Category"
          value={updatedUser.category}
          onChange={(e) => setUpdatedUser({ ...updatedUser, category: e.target.value })}
        />
        <textarea className='modal-input'
          placeholder="Description"
          value={updatedUser.description}
          onChange={(e) => setUpdatedUser({ ...updatedUser, description: e.target.value })}
        ></textarea>
        <div className='modal-btn'>
        <button  onClick={handleUpdate}>Save Changes</button>
        <button className="button-cancel" onClick={onClose}>Cancel</button>
        </div>
       
      </div>
    </div>
  );
}

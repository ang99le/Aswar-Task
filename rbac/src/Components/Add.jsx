import React, { useState } from 'react';

export default function AddUserModal({ show, onClose, onAdd }) {
  const [newUser, setNewUser] = useState({ name: '', category: '', description: '' });

  const handleAdd = () => {
    const user = {
      id: Math.random(),
      ...newUser,
    };
    onAdd(user);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New User</h2>
        <input className='modal-input'
          type="text"
          placeholder="User Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input className='modal-input'
          type="text"
          placeholder="Category"
          value={newUser.category}
          onChange={(e) => setNewUser({ ...newUser, category: e.target.value })}
        />
        <textarea className='modal-input'
          placeholder="Description"
          value={newUser.description}
          onChange={(e) => setNewUser({ ...newUser, description: e.target.value })}
        ></textarea>
        <div className='modal-btn'> 
        <button onClick={handleAdd}>Add User</button>
        <button className="button-cancel" onClick={onClose}>Cancel</button>
        </div>
       
      </div>
    </div>
  );
}

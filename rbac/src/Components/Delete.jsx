import React from 'react';

export default function DeleteUserModal({ show, onClose, onDelete }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Delete User</h2>
        <p>Are you sure you want to delete this user?</p>
        <div className='modal-btn'>
        <button onClick={onDelete}>Confirm</button>
        <button className='button-cancel' onClick={onClose}>Cancel</button>
        </div>
      
      </div>
    </div>
  );
}

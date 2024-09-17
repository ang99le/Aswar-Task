import React, { useState } from 'react';
import AddUserModal from './Add';
import EditUserModal from './Edit';
import DeleteUserModal from './Delete';
import { useAuth } from '../context/Context';

export default function Table() {
  const { user } = useAuth();
  const [users, setUsers] = useState([
    { id: 1, role: 'Admin', name: 'User 1', category: 'Category 1', description: 'Description 1' },
    { id: 2, role: 'Developer', name: 'User 2', category: 'Category 2', description: 'Description 2' },
    { id: 3, role: 'HR', name: 'User 3', category: 'Category 3', description: 'Description 3' },
  ]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const [selectedUser, setSelectedUser] = useState(null); 

  const currentUserRole = user ? user.role : '';

  const rolesPermissions = {
    Admin: ['edit', 'add', 'delete'],
    Developer: ['edit', 'add'],
    HR: ['read'],
  };

  const hasPermission = (action) => {
    return rolesPermissions[currentUserRole]?.includes(action);
  };

 
  const handleEdit = (user) => {
    if (hasPermission('edit')) {
      setSelectedUser(user);
      setIsEditModalOpen(true);
    } else {
      alert('You do not have permission to edit.');
    }
  };

  
  const handleDelete = (user) => {
    if (hasPermission('delete')) {
      setSelectedUser(user);
      setIsDeleteModalOpen(true); 
    } else {
      alert('You do not have permission to delete.');
    }
  };

  
  const confirmDelete = () => {
    setUsers(users.filter(u => u.id !== selectedUser.id));
    setIsDeleteModalOpen(false); 
    setSelectedUser(null); 
  };

  const handleAddUser = (newUser) => {
    if (hasPermission('add')) {
      setUsers([...users, newUser]);
      setIsAddModalOpen(false); 
    } else {
      alert('You do not have permission to add.');
    }
  };

  return (
    <div className="users-container">
      {hasPermission('add') && (
        <button className='button-add' onClick={() => setIsAddModalOpen(true)}>
          Add User
        </button>
      )}

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.category}</td>
              <td>{user.description}</td>
              <td className='flex-actions'>
                {hasPermission('edit') && (
                  <button className='button-cancel'  onClick={() => handleEdit(user)}>Edit</button>
                )}
                {hasPermission('delete') && (
                  <button className="button-delete" onClick={() => handleDelete(user)}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      {isEditModalOpen && (
        <EditUserModal
          show={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          user={selectedUser}
          onUpdate={(updatedUser) => {
            setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
            setIsEditModalOpen(false);
          }}
        />
      )}

      
      {isAddModalOpen && (
        <AddUserModal
          show={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={(newUser) => handleAddUser(newUser)}
        />
      )}


      {isDeleteModalOpen && (
        <DeleteUserModal
          show={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={confirmDelete}
        />
      )}
    </div>
  );
}

import React, { useState } from "react";
import { TableWrapper, ModalWrapper, PaginationWrapper } from "./style";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "./toggle.css";

const usersData = [
  { id: 1, name: "Jese Leos", email: "jese.leos@example.com", createdAt: "10 Nov 2022", lastLogin: "20 Nov 2022", status: "Active" },
  { id: 2, name: "Bonnie Green", email: "bonnie.green@example.com", createdAt: "12 Nov 2022", lastLogin: "23 Nov 2022", status: "Inactive" },
  { id: 3, name: "Leslie Livingston", email: "leslie.livingston@example.com", createdAt: "15 Nov 2022", lastLogin: "19 Nov 2022", status: "Active" },
  { id: 4, name: "William Smith", email: "william.smith@example.com", createdAt: "18 Nov 2022", lastLogin: "21 Nov 2022", status: "Inactive" },
  { id: 5, name: "Emma Johnson", email: "emma.johnson@example.com", createdAt: "20 Nov 2022", lastLogin: "22 Nov 2022", status: "Active" },
  { id: 6, name: "Michael Brown", email: "michael.brown@example.com", createdAt: "21 Nov 2022", lastLogin: "23 Nov 2022", status: "Inactive" },
  { id: 7, name: "Olivia Wilson", email: "olivia.wilson@example.com", createdAt: "22 Nov 2022", lastLogin: "24 Nov 2022", status: "Active" },
  { id: 8, name: "Daniel Martinez", email: "daniel.martinez@example.com", createdAt: "23 Nov 2022", lastLogin: "25 Nov 2022", status: "Inactive" },
  { id: 9, name: "Sophia Garcia", email: "sophia.garcia@example.com", createdAt: "24 Nov 2022", lastLogin: "26 Nov 2022", status: "Active" },
  { id: 10, name: "James Anderson", email: "james.anderson@example.com", createdAt: "25 Nov 2022", lastLogin: "27 Nov 2022", status: "Inactive" },
  { id: 11, name: "Charlotte Moore", email: "charlotte.moore@example.com", createdAt: "26 Nov 2022", lastLogin: "28 Nov 2022", status: "Active" },
  { id: 12, name: "Benjamin Taylor", email: "benjamin.taylor@example.com", createdAt: "27 Nov 2022", lastLogin: "29 Nov 2022", status: "Inactive" }
];

const UserManagement= () => {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  const toggleSelection = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  const openModal = (user = null) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const saveUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());

    if (editingUser) {
      setUsers(users.map((user) => (user.id === editingUser.id ? { ...newUser, id: editingUser.id } : user)));
    } else {
      newUser.id = users.length + 1;
      setUsers([...users, newUser]);
    }
    closeModal();
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setSelectedUsers(selectedUsers.filter((uid) => uid !== id));
  };

  const massDelete = () => {
    setUsers(users.filter((user) => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };

  const toggleUserStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
    ));
  };

  const filteredUsers = users.filter(
    (user) => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search)
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <TableWrapper>
      <div className="table-container">
        <div className="table-header">
          <input type="text" placeholder="Search User..." onChange={handleSearch} />
          <button className="add-user" onClick={() => openModal()}><FaPlus /> Add User</button>
          {selectedUsers.length > 0 && <button className="delete-users" onClick={massDelete}>Delete Selected</button>}
        </div>

        <table>
          <thead>
            <tr>
              <th><input type="checkbox" onChange={(e) => setSelectedUsers(e.target.checked ? users.map(u => u.id) : [])} /></th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Login</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td><input type="checkbox" checked={selectedUsers.includes(user.id)} onChange={() => toggleSelection(user.id)} /></td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLogin}</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" checked={user.status === "Active"} onChange={() => toggleUserStatus(user.id)} />
                    <span className="slider"></span>
                  </label>
                  {user.status}
                </td>
                <td>
                  <button className="edit" onClick={() => openModal(user)}><FaEdit /></button>
                  <button className="delete" onClick={() => deleteUser(user.id)}><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <PaginationWrapper>
          <button className="previous" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} className={currentPage === index + 1 ? "active" : "disabled"} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
          ))}
          <button className="next" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </PaginationWrapper>
      </div>

      {isModalOpen && (
        <ModalWrapper>
          <div className="modal">
            <h2>{editingUser ? "Edit User" : "Add User"}</h2>
            <form onSubmit={saveUser}>
              <input name="id" type="hidden" defaultValue={editingUser?.id || ""} />
              <input name="name" type="text" placeholder="Name" required defaultValue={editingUser?.name || ""} />
              <input name="email" type="email" placeholder="Email" required defaultValue={editingUser?.email || ""} />
              <button type="submit">Save</button>
              <button type="button" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </ModalWrapper>
      )}
    </TableWrapper>
  );
};

export default UserManagement

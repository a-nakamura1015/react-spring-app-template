import { useState, useEffect, FC } from "react";
import { getUsers, createUser, deleteUser, updateUser } from "../api/userApi";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editUserId, setEditUserId] = useState<number | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error("Failed to load users:", error);
    }
  };

  const handleCreateUser = async () => {
    try {
      const newUser = { name, email };
      await createUser(newUser);
      setName("");
      setEmail("");
      loadUsers();
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleEditUser = (user: User) => {
    setEditUserId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleUpdateUser = async () => {
    if (editUserId !== null) {
      try {
        await updateUser(editUserId, { name, email });
        setEditUserId(null);
        setName("");
        setEmail("");
        loadUsers();
      } catch (error) {
        console.error("Failed to update user:", error);
      }
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {editUserId === user.id ? (
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleUpdateUser}>保存</button>
                <button onClick={() => setEditUserId(null)}>キャンセル</button>
              </div>
            ) : (
              <div>
                {user.name} - {user.email}
                <button onClick={() => handleEditUser(user)}>編集</button>
                <button onClick={() => handleDeleteUser(user.id)}>削除</button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <h2>新しいユーザーを追加</h2>
      <input
        type="text"
        placeholder="名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCreateUser}>Create</button>
    </div>
  );
};

export default UserList;

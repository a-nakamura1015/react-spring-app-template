const API_BASE_URL = "http://localhost:8080";

export async function getUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`);
    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Failed to fetch users: ${message}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function getUser(id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${id}`);
    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Failed to fetch user with id ${id}: ${message}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
}

export async function createUser(user: { name: string; email: string }) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Failed to create user: ${message}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function updateUser(id: number, user: { name: string; email: string }) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Failed to update user with id ${id}: ${message}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    throw error;
  }
}

export async function deleteUser(id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Failed to delete user with id ${id}: ${message}`);
    }

    return response.ok;
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error);
    throw error;
  }
}

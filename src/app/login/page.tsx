const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ==================== AUTH ====================

// ✅ LOGIN
export const login = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Login failed");
  }

  return data; // { success, token }
};

// ✅ REGISTER
export const register = async (
  name: string,
  tel: string,
  email: string,
  password: string
) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, tel, email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Register failed");
  }

  return data;
};

// ==================== USER ====================

// ✅ GET ME (ต้องมี token)
export const getMe = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Unauthorized");
  }

  return data;
};

// ==================== SPACES ====================

// ✅ GET ALL SPACES
export const getSpaces = async () => {
  const res = await fetch(`${API_URL}/spaces`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch spaces");
  }

  return data;
};

// ✅ CREATE SPACE (ต้องมี token)
export const createSpace = async (spaceData: any) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/spaces`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(spaceData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to create space");
  }

  return data;
};

// ==================== RESERVATIONS ====================

// ✅ CREATE RESERVATION
export const createReservation = async (spaceId: string, reservationData: any) => {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_URL}/spaces/${spaceId}/reservations`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reservationData),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to create reservation");
  }

  return data;
};
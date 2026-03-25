const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  console.error("❌ NEXT_PUBLIC_API_URL is missing");
}

// 🔥 handle response แบบกันพัง
async function handleResponse(res: Response) {
  let data;

  try {
    data = await res.json();
  } catch {
    throw new Error("Invalid server response");
  }

  if (!res.ok) {
    throw new Error(data.error || data.message || "API Error");
  }

  return data;
}

// 🔥 helper fetch (มี debug)
async function apiFetch(url: string, options: RequestInit) {
  console.log("➡️ REQUEST:", url, options);

  const res = await fetch(url, options);

  console.log("⬅️ STATUS:", res.status);

  return handleResponse(res);
}

/* =======================
   AUTH
======================= */

export async function login(email: string, password: string) {
  return apiFetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

export async function register(data: any) {
  return apiFetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

/* =======================
   RESERVATIONS
======================= */

export async function getMyReservations(token: string) {
  return apiFetch(`${BASE_URL}/reservations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function createReservation(spaceId: string, data: any, token: string) {
  if (!spaceId) {
    throw new Error("Missing spaceId ❌")
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/spaces/${spaceId}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  console.log("CREATE RESERVATION:", result); // 🔥 debug

  if (!res.ok) {
    throw new Error(result.message || "Create failed");
  }

  return result;
}
export async function updateReservation(id: string, data: any, token: string) {
  return apiFetch(`${BASE_URL}/reservations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

export async function deleteReservation(id: string, token: string) {
  return apiFetch(`${BASE_URL}/reservations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

/* =======================
   ADMIN
======================= */

export async function getAllReservations(token: string) {
  return apiFetch(`${BASE_URL}/reservations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
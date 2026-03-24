const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

function handleResponse(res: Response) {
  return res.json().then((data) => {
    if (!res.ok) {
      throw new Error(data.error || "API Error");
    }
    return data;
  });
}

// AUTH
export async function login(email: string, password: string) {
  console.log("API URL:", BASE_URL);

  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}

export async function register(data: any) {
  return fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(handleResponse);
}

// RESERVATION CRUD
export async function getMyReservations(token: string) {
  return fetch(`${BASE_URL}/reservations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

export async function createReservation(data: any, token: string) {
  return fetch(`${BASE_URL}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(handleResponse);
}

export async function updateReservation(id: string, data: any, token: string) {
  return fetch(`${BASE_URL}/reservations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(handleResponse);
}

export async function deleteReservation(id: string, token: string) {
  return fetch(`${BASE_URL}/reservations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

// ADMIN
export async function getAllReservations(token: string) {
  return fetch(`${BASE_URL}/reservations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}
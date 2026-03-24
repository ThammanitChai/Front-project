const BASE_URL = "http://localhost:5000/api"

// AUTH
export async function login(data:any) {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export async function register(data:any) {
  return fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export async function getMe(token:string) {
  return fetch(`${BASE_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json())
}

//  RESERVATION
export async function getMyReservations(token:string) {
  return fetch(`${BASE_URL}/reservations`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json())
}

export async function createReservation(data:any, token:string) {
  return fetch(`${BASE_URL}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export async function deleteReservation(id:string, token:string) {
  return fetch(`${BASE_URL}/reservations/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  })
}

// SPACES
export async function getSpaces() {
  return fetch(`${BASE_URL}/spaces`)
    .then(res => res.json())
}
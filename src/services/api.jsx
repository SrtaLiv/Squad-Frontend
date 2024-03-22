import { getToken } from "./auth";

const BASE_URL = "http://squad.ddns.net/api/v1";

async function login(email, password) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response.json();
}

async function fetchGroups(search = "", tags = "", page = 1, controller) {
  const token = getToken();

  if (!token) {
    return null;
  }

  let url = `${BASE_URL}/groups?page=${page}`;

  if (search) {
    url += `&search=${search}`;
  }
  if (tags) {
    url += `&tags=${tags}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(response.error);
  }

  return response.json();
}

async function fetchGroup(ulid, controller) {
  const token = getToken();

  if (!token) {
    return null;
  }

  let url = `${BASE_URL}/groups/${ulid}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(response.error);
  }

  return response.json();
}

async function groupRequestAction(ulid, action, controller) {
  const token = getToken();
  if (!token) {
    return null;
  }
  let url = `${BASE_URL}/groups/${action}/${ulid}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal: controller.signal,
  });
  if (!response.ok) {
    throw new Error(response.error);
  }
  return response.json();
}

export { login, fetchGroups, fetchGroup, groupRequestAction };

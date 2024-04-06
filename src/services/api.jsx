import { getToken } from "./auth";

const BASE_URL = "http://squad.ddns.net/api/v1";

async function login(userdata) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  });

  return response.json();
}

async function register(userdata) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
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
  if (tags.length > 0) {
    let tagsStr = tags.join(",");
    url += `&tags=${tagsStr}`;
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

async function fetchFacultades(controller) {
  const token = getToken();

  if (!token) {
    return null;
  }

  let url = `${BASE_URL}/facultades`;

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

async function createGroup(groupdata) {
  
  const token = getToken();

  if (!token) {
    return null;
  }

  groupdata = {...groupdata, ['idCarrera']: parseInt(groupdata['idCarrera']) }
  groupdata = {...groupdata, ['maxMembers']: parseInt(groupdata['maxMembers']) }

  const response = await fetch(`${BASE_URL}/groups`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(groupdata),
  });

  return response.json();
}

export { login, register, fetchGroups, fetchGroup, groupRequestAction, fetchFacultades, createGroup };

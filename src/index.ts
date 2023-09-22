async function get<T>(url: string, options?: RequestInit) {
  let response: T | null = null;
  let status: number | null = null;
  let error: Error | unknown;
  try {
    const data = await fetch(url, {
      method: 'GET',
      ...options,
    });
    response = await data.json();
    status = data.status;
  } catch (err) {
    error = err;
  }

  return { response, status, error };
}

async function post<T>(url: string, options: RequestInit) {
  let response: T | null = null;
  let status: number | null = null;
  let error: Error | unknown;
  try {
    const data = await fetch(url, {
      method: 'POST',
      ...options,
    });
    response = await data.json();
    status = data.status;
  } catch (err) {
    error = err;
  }

  return { response, status, error };
}

async function put<T>(url: string, options: RequestInit) {
  let response: T | null = null;
  let status: number | null = null;
  let error: Error | unknown;
  try {
    const data = await fetch(url, {
      method: 'PUT',
      ...options,
    });
    response = await data.json();
    status = data.status;
  } catch (err) {
    error = err;
  }

  return { response, status, error };
}

async function deleteResource<T>(url: string, options: RequestInit) {
  let response: T | null = null;
  let status: number | null = null;
  let error: Error | unknown;
  try {
    const data = await fetch(url, {
      method: 'POST',
      ...options,
    });
    response = await data.json();
    status = data.status;
  } catch (err) {
    error = err;
  }

  return { response, status, error };
}

const Sai = { get, post, put, delete: deleteResource };

export default Sai;

const baseURL = "http://localhost:4000";

export const createUser = async (payload) => {
  try {
    const res = await fetch(`${baseURL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.result || "Помилка реєстрації користувача");
    }

    return data;
  } catch (err) {
    throw err;
  }
};

export const login = async (credentials) => {
  try {
    const res = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.result || "Неправильний логін або пароль");
    }

    return data;
  } catch (err) {
    throw err;
  }
};

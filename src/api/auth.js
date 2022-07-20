import API from ".";

export const signIn = async (credentials) => {
  try {
    const res = await API.post("/auth/sign-in", credentials);
    return res.data.token;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (credentials) => {
  try {
    const res = await API.post("/auth/sign-up", credentials);
    return res.data.token;
  } catch (error) {
    throw error;
  }
};

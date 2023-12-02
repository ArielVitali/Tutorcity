import instance from "./config/config.axios.js";

export const loginAPI = async (data) => {
  try {
    const response = await instance.post("/auth", data);
    console.log(response, "response api");
    localStorage.setItem("jwt", JSON.stringify(response.data.jwt));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    console.error;
  }
};

export const registerAPI = async (data) => {
  try {
    console.log(data, "data api");
    const response = await instance.post("/users", data);
    console.log(response, "response api");
    localStorage.setItem("jwt", JSON.stringify(response.data.jwt));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const verifyValidToken = async (token) => {
  try {
    const response = await instance.post("/auth/validate-token", { token });
    return response.data.valid;
  } catch (error) {
    throw error.response.data;
  }
};

export const getServicesByUser = async () => {
  try {
    const response = await instance.get("/services/user");
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const createService = async (data) => {
  try {
    const response = await instance.post("/services", data);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const getCommentsByService = async (serviceId) => {
  try {
    const response = await instance.get(`/comments/${serviceId}`);
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const getPendingComments = async (serviceId) => {
  try {
    const response = await instance.get(
      `/comments/pendingComments/${serviceId}`
    );
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const createComment = async (serviceId, data) => {
  try {
    const response = await instance.post(`/comments/${serviceId}`, data);
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const updateService = async (serviceId, data) => {
  try {
    const response = await instance.patch(`/services/${serviceId}`, data);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const getHiringsByProvider = async () => {
  try {
    const response = await instance.get("/hirings/user");
    console.log(response.data.payload, "response from axios");
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const updateHiring = async (hiringId, data) => {
  try {
    const response = await instance.patch(`/hirings/${hiringId}`, data);
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const createHiring = async (serviceId, data) => {
  try {
    const response = await instance.post(`/hirings/${serviceId}`, data);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const updateUser = async (data) => {
  try {
    const response = await instance.patch("/users", data);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await instance.patch("/users/profileImg", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const getServices = async (filters) => {
  try {
    const response = await instance.get("/services", { params: filters });
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const getPublicUserData = async (userId) => {
  try {
    const response = await instance.get(`/users/${userId}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const getCategories = async () => {
  try {
    const response = await instance.get("/categories");
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const updateComment = async (commentId, data) => {
  try {
    const response = await instance.patch(`/comments/${commentId}`, data);
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await instance.delete(`/comments/${commentId}`);
    return response.data.payload;
  } catch (error) {
    throw error.response;
  }
};

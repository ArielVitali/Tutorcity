import CategoryDAO from "../DAOs/mongo/clasess/Category.class.js";

export const getCategories = async () => {
  try {
    const response = await CategoryDAO.getCategories();
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCategoryById = async (id) => {
  try {
    return await CategoryDAO.getCategoryById(id);
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (data) => {
  try {
    return await CategoryDAO.createCategory(data);
  } catch (error) {
    throw error;
  }
};

export const removeCategory = async (id) => {
  try {
    return await CategoryDAO.deleteCategory(id);
  } catch (error) {
    throw error;
  }
};

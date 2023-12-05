import CategoriesDAO from "../DAOs/mongo/classes/Category.class.js";

export const getCategories = async () => {
  try {
    return await CategoriesDAO.getCategories();
  } catch (error) {
    throw error;
  }
};

export const getCategoryById = async (id) => {
  try {
    return await CategoriesDAO.getCategoryById(id);
  } catch (error) {
    throw error;
  }
};

export const getCategoryByName = async (name) => {
  try {
    return await CategoriesDAO.getCategoryByName(name);
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (categoryInfo) => {
  try {
    const { name } = categoryInfo;
    const newCategoryInfo = {
      name,
    };
    return await CategoriesDAO.createCategory(newCategoryInfo);
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (id, updateInfo) => {
  try {
    const { name, service } = updateInfo;
    const newCategoryInfo = {
      name,
      service,
    };
    return await CategoriesDAO.updateCategory(id, newCategoryInfo);
  } catch (error) {
    throw error;
  }
};

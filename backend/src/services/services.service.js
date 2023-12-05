import ServiceDAO from "../DAOs/mongo/classes/Service.class.js";
import {
  getCategoryByName,
  createCategory,
  updateCategory,
} from "./categories.service.js";

export const getServices = async (queries) => {
  try {
    const { category, type, frequency, rating } = queries;
    const queryConditions = {};
    let sortOptions = 1;

    if (category !== undefined && category !== "") {
      const categoryFound = await getCategoryByName(category);
      queryConditions.category = categoryFound[0]._id;
    }

    if (type !== undefined && type !== "") {
      queryConditions.type = type;
    }

    if (frequency !== undefined && frequency !== "") {
      queryConditions.frequency = frequency;
    }

    if (rating !== undefined && rating !== "") {
      sortOptions = rating.toLowerCase() === "descendent" ? 1 : -1;
    }

    const hasConditions = Object.keys(queryConditions).length > 0;

    const query = hasConditions ? { $and: [queryConditions] } : {};

    const response = await ServiceDAO.getServices(
      query,
      sortOptions,
      hasConditions
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getServicesByUserId = async (userId) => {
  try {
    return await ServiceDAO.getServiceByUserId(userId);
  } catch (error) {
    throw error;
  }
};

export const getServiceById = async (serviceId) => {
  try {
    return await ServiceDAO.getServiceById(serviceId);
  } catch (error) {
    throw error;
  }
};

export const createNewService = async (userId, serviceInfo) => {
  try {
    const {
      _id,
      category,
      name,
      duration,
      type,
      frequency,
      description,
      price,
      isPublished,
      ratedTimes,
      ratingTotalPoints,
      ratingAverage,
    } = serviceInfo;

    const newServiceInfo = {
      user: userId,
      name,
      duration,
      type,
      frequency,
      description,
      price,
      isPublished,
      ratedTimes,
      ratingTotalPoints,
      ratingAverage,
    };

    const categoryFound = await getCategoryByName(category);

    if (category !== undefined && category !== "") {
      if (categoryFound.length === 0) {
        const newCategory = await createCategory({
          name: category,
        });
        newServiceInfo.category = newCategory._id;
      } else {
        newServiceInfo.category = categoryFound[0]._id;
      }
    } else {
      throw new Error("Category is required");
    }

    const response = await ServiceDAO.createService(newServiceInfo);

    await updateCategory(newServiceInfo.category, {
      service: response._id,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateService = async (id, updateInfo) => {
  try {
    const {
      user,
      category,
      name,
      duration,
      type,
      frequency,
      description,
      price,
      isPublished,
      ratedTimes,
      ratingTotalPoints,
      ratingAverage,
    } = updateInfo;
    const newServiceInfo = {
      user,
      category,
      name,
      duration,
      type,
      frequency,
      description,
      price,
      isPublished,
      ratedTimes,
      ratingTotalPoints,
      ratingAverage,
    };
    return await ServiceDAO.updateService(id, newServiceInfo);
  } catch (error) {
    throw error;
  }
};

export const removeService = async (id) => {
  try {
    return await ServiceDAO.deleteService(id);
  } catch (error) {
    throw error;
  }
};

import Service from '../models/Service.js';

export const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find({ status: 'active' });

    res.json({
      success: true,
      services,
    });
  } catch (error) {
    next(error);
  }
};

export const getServiceById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json({
      success: true,
      service,
    });
  } catch (error) {
    next(error);
  }
};

export const createService = async (req, res, next) => {
  try {
    const { title, price, duration, description, providers } = req.body;

    if (!title || !price || !duration) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const service = new Service({
      title,
      price,
      duration,
      description,
      providers: providers || [],
    });

    await service.save();

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      service,
    });
  } catch (error) {
    next(error);
  }
};

export const updateService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, price, duration, description, providers, status } = req.body;

    let service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    if (title) service.title = title;
    if (price) service.price = price;
    if (duration) service.duration = duration;
    if (description) service.description = description;
    if (providers) service.providers = providers;
    if (status) service.status = status;

    await service.save();

    res.json({
      success: true,
      message: 'Service updated successfully',
      service,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    await Service.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'Service deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

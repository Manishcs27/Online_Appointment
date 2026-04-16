const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userRole)) {
      return res.status(403).json({ message: 'Not authorized to access this resource' });
    }
    next();
  };
};

export default authorize;

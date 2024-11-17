// middleware para verificar si el usuario tiene uno de los roles permitidos para acceder a una ruta especifica


const authorize = (allowedRoles) => {
    return (req, res, next) => {
      try {
        if (!allowedRoles.includes(req.user.role)) {
          return res.status(403).json({ message: "No tienes permisos para realizar esta acción." });
        }
        next();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  };
  
  export default authorize;
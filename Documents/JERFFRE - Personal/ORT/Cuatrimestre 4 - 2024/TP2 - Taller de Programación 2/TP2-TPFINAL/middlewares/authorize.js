// // middleware para verificar si el usuario tiene uno de los roles permitidos para acceder a una ruta especifica
import User from "../models/User.js";
import Role from "../models/Role.js";


// una forma de hacerlo

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
  



// otra forma

/*

const authorize = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      // Verifica que req.user esté definido
      if (!req.userId) {
        return res.status(401).json({ message: "Usuario no autenticado." });
      }

      // Buscar el usuario y su rol en la base de datos
      const user = await User.findByPk(req.userId, {
        include: [{ model: Role, attributes: ['name'] }],
      });

      if (!user || !allowedRoles.includes(user.Role?.name)) {
        return res.status(403).json({ message: "No tienes permisos para realizar esta acción." });
      }

      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};


*/



export default authorize;




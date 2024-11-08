
class UserController{

    getAllUsers = async(req, res) => {
        try {
            res
            .status(200)
            .send({ success: true, message: "res desde getAllUsers " });
          } catch (error) {
            res.status(400).send({ success: false, message: error.message });
          }

    }

}

export default UserController;
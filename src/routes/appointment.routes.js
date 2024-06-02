import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { appointmentRegister, deleteAppointment, deleteMultipleAppointments, getAllAppointment, getAppointmentsByUserId, getSingleAppointment, updateSingleAppointment } from "../controllers/appointment.controller.js";


const router = Router();

// Secured Routes
router.route("").post( verifyJWT , appointmentRegister);
router.route("").get( verifyJWT , getAllAppointment);
// router.route("/:id").get( verifyJWT , getSingleAppointment);
router.route("/:id").patch( verifyJWT , updateSingleAppointment);
router.route("/:id").delete( verifyJWT , deleteAppointment);
router.route("").delete( verifyJWT , deleteMultipleAppointments);
router.route("/user-appointments").get( verifyJWT , getAppointmentsByUserId);








export default router;
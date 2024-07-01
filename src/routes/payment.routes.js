import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { paymentInit, paymentSuccess } from "../controllers/payment.controller.js";




const router = Router();

router.route("").post(paymentInit)
router.route("/success").post(paymentSuccess)
router.route("/fail").post(paymentSuccess)
router.route("/cancel").post(paymentSuccess)
router.route("/ipn").post(paymentSuccess)













export default router;
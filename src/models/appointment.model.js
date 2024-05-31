import mongoose, { Schema } from "mongoose";


const appointmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    phone: {
      type: String,
      required: true,
      index: true,
    },
    address: {
      type: String,
    },
    service: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: String,
      required: true,
    },
    appointmentTime: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "pending",
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {
    timestamps: true,
  }
);


export const Appointment = mongoose.model("appointment", appointmentSchema);

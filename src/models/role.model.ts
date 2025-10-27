import { Schema, model } from "mongoose";

const RoleSchema = new Schema({
  role: { type: String, required: true, unique:true },
  description: { type: String },
  active: { type: Boolean, default: true }
}, {
  collection: "roles",
  timestamps: true
});

export default model("Role", RoleSchema)
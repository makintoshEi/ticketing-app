import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONG_DB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    category: String,
    description: String,
    priority: Number,
    progress: String,
    status: String,
    title: String,
  },
  {
    timestamps: true,
  }
);

export const Ticket =
  mongoose.models.tickets || mongoose.model("tickets", ticketSchema);

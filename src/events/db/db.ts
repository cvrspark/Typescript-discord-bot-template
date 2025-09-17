import mongoose from "mongoose";
import config from "../../../config.json";
export async function startDatabase() {
	if (!config.dbToken) {
		return;
	}
	try {
		await mongoose.connect(config.dbToken);
		console.log("Database connected");
	} catch (err) {
		console.error("Database connection error:", err);
	}
}


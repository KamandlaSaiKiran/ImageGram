import { verifyJwt } from "../utils/jwt.js";
import { checkIfUserExists } from "../services/userService.js";

export const isAuthenticated = async (req, res, next) => {
  // Accept token from either header or custom header (optional)
  const authHeader = req.headers["authorization"];
  const altToken = req.headers["x-access-token"]; // Optional: for Postman tests

  let token = null;

  // Check standard Bearer token
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else if (altToken) {
    token = altToken; // fallback to x-access-token if provided
  }

  // If no token found
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Token is required for authentication",
    });
  }

  try {
    const decoded = verifyJwt(token);

    const doesUserExist = await checkIfUserExists(decoded.email);
    if (!doesUserExist) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export const isAdmin = async (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Unauthorized: Admin access required",
    });
  }
  next();
};

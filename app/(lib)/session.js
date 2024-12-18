import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodeKey = new TextEncoder().encode(secretKey);

/**
 * Encrypts the given payload into a JWT.
 *
 * This function creates a JSON Web Token (JWT) using the provided payload,
 * sets the algorithm to HS256, adds the issued at and expiration time,
 * and signs it with a secret key.
 *
 * @param {Object} payload - The payload should contain the minimum, unique user data that'll be used in subsequent requests, such as the user's ID, role, etc. It should not contain personally identifiable information like phone number, email address, credit card information, etc, or sensitive data like passwords.
 * @returns {Promise<string>} - A promise that resolves to the signed JWT string.
 */

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodeKey);
}

/**
 * Verifies the given session JWT and returns the payload.
 *
 * This function verifies the given session JWT using the secret key, and
 * returns the payload if the verification is successful.
 *
 * @param {string} session - The JWT to verify.
 * @returns {Promise<Object>} - A promise that resolves to the payload if the verification is successful, or nothing if the verification fails.
 */
export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

/**
 * Creates a session for the given user ID and stores it in the user's cookies.
 *
 * This function creates a new session with the given user ID, encrypts it,
 * and stores it in the user's cookies. The session is set to expire after 1 day.
 *
 * @param {string} userId - The user ID to associate the session with.
 */
export async function createSession(userId) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

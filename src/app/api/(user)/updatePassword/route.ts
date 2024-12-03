// app/api/updatePassword/route.ts
import { updatePassword } from "../../../../../controllers/authController";

export async function PATCH(req: Request) {
  return await updatePassword(req);
}

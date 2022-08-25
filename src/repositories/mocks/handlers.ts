import { mockAuthRepository } from "./mockAuthRepository";
import { mockUserRepository } from "./mockUserRepository";

export const handlers = [...mockUserRepository, ...mockAuthRepository];

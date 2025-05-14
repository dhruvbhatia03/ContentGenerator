// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
]);

export default clerkMiddleware((auth, req) => {
  // Only protect if it's a protected route
  if (isProtectedRoute(req)) {
    auth().protect(); // Will redirect to sign-in if not authenticated
  }
});

export const config = {
  matcher: [
    "/dashboard(.*)", // Only run middleware on dashboard pages
  ],
};

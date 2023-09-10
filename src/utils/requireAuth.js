export function isLoggedIn() {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("token");
      if (user) {
        return true;
      }
    }
    return false;
  }
  
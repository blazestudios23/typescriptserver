import { Request, Response, NextFunction } from "express";
import { get, post, controller, use, bodyValidator } from "./decorators";

@controller("/auth")
export class LoginController {
  @get("/login")
  // @use(logger)
  getLogin(req: Request, res: Response) {
    res.send(`
    <form method="POST">
    <div>
        <label>Email</label>
        <input name="email">
    </div>
    <div>
        <label>Password</label>
        <input name="password" type="password">
    </div>
    <button>Submit</button>
    </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    const loggedIn = () => {
      req.session = { loggedIn: true };
      return res.redirect("/");
    };

    email && password && email === "hi@hi.com" && password === "password"
      ? loggedIn()
      : res.send("Invalid email or password");
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}

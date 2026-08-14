import { app } from "./app.js";
import { resolvePort } from "./config/env.js";
const port = resolvePort();

app.listen(port, () => {
  console.log(`server is live at http://127.0.0.1:${port}`);
});

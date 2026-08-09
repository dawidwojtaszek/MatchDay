const a: any = "hello";
const b: unknown = "hello";

function printLength(value: unknown): void {
  if (typeof value !== "string") {
    console.log("not a string");
    return;
  }
  console.log(value.length);
}
function parseConfig(raw: string): void {
  let config: unknown;
  try {
    config = JSON.parse(raw);
  } catch {
    console.log("invalid config");
    return;
  }

  if (typeof config !== "object" || config === null || !("port" in config)) {
    console.log("invalid config");

    return;
  }

  console.log(config.port);
}

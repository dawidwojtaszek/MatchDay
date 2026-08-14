const MIN_PORT = 1;
const MAX_PORT = 65535;
const DEFAULT_PORT = 3000;
export function resolvePort(): number {
  const port = process.env.PORT;
  const portNumber = Number(port);
  if (port === undefined) {
    return DEFAULT_PORT;
  }
  if (
    !Number.isInteger(portNumber) ||
    portNumber < MIN_PORT ||
    portNumber > MAX_PORT
  ) {
    throw new Error(`${JSON.stringify(port)} is invalid port value`);
  }

  return portNumber;
}

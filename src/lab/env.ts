export function resolvePort(): number {
  const port = process.env.PORT;
  const portNumber = Number(port);

  if (port === undefined || !Number.isInteger(portNumber)) {
    return 3000;
  }

  return portNumber;
}

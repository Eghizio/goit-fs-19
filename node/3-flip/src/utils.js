export const normalizePort = (port, defaultPort) => {
  const parsedPort = parseInt(port, 10);
  return isNaN(parsedPort) || parsedPort <= 0 || parsedPort > 65535
    ? defaultPort
    : parsedPort;
};

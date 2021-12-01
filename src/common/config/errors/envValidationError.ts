export class EnvValidationError extends Error {
  public constructor(message: string) {
    super(`Environment variable validation error: ${message}`);
  }
}

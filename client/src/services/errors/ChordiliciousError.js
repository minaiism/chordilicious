export class ChordiliciousError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

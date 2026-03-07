const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const uploadService = {
  async uploadFile(_file: File, _sessionId: string): Promise<{ id: string; storageKey: string }> {
    await delay(1000);
    return { id: "asset_new", storageKey: `uploads/${_sessionId}/${_file.name}` };
  },
  async getUploadUrl(_filename: string): Promise<string> {
    await delay(200);
    return "https://storage.example.com/presigned-upload-url";
  },
};

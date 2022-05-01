import { createWriteStream } from "fs";

export const save = async (
  binaryStream: any,
  path: string,
  filename: string
) => {
  binaryStream.pipe(createWriteStream(path + filename));
};

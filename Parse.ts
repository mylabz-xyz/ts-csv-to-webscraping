import * as Papa from "papaparse";
import { get } from "./Api";

// use end point name to name the file
// remove partToIgnore (like "_200px_" in the name of the endpoint)
export const parse = (csvPath: string, partToIgnoreForRename?: string) => {
  Papa.parse(csvPath, {
    // in my case
    // 0 : id
    // 1 : base link (server url)
    // 2 : endpoint link
    step:async (results, papa) => {
     const result = mapCSVExemple(results.data as string[])
    const scrappedData =  await get(result.serverUrl+result.endpoint)

    console.log(scrappedData.data)
    },
  });
};

const mapCSVExemple = (data: string[]) => {
  const id = data[0];
  const serverUrl = data[1];
  const endpoint = data[2];

  return { serverUrl, endpoint };
};

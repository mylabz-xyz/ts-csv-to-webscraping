import { parse } from "./Parse";
import {readFileSync} from 'fs'

 parse(readFileSync("./csv/remembrance.csv").toString());

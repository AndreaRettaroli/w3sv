import { domains } from "@nucypher/taco";

export const ritualId = 0; //TODO:Replace with your own ritual ID
export const domain = domains.TESTNET;

export const defaultSnapOrigin =
  process.env.SNAP_ORIGIN ?? `local:http://localhost:8080`;

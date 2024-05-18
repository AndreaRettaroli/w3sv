// import { defaultSnapOrigin } from "../constants/constants";
// import type { Snap } from "../types";
// import { useRequest } from "./useRequest";

// import type { MetaMaskInpageProvider } from "@metamask/providers";

// /**
//  * Utility hook to wrap the `wallet_requestSnaps` method.
//  *
//  * @param snapId - The requested Snap ID. Defaults to the snap ID specified in the
//  * config.
//  * @param version - The requested version.
//  * @returns The `wallet_requestSnaps` wrapper.
//  */
// export const useRequestSnap = (
//   snapId = defaultSnapOrigin,
//   provider: MetaMaskInpageProvider,
//   version?: string
// ) => {
//   const request = useRequest(provider);

//   /**
//    * Request the Snap.
//    */
//   const requestSnap = async () => {
//     const snaps = (await request({
//       method: "wallet_requestSnaps",
//       params: {
//         [snapId]: version ? { version } : {},
//       },
//     })) as Record<string, Snap>;

//     // Updates the `installedSnap` context variable since we just installed the Snap.
//     //setInstalledSnap(snaps?.[snapId] ?? null);
//   };

//   return requestSnap;
// };

// import type {
//   RequestArguments,
//   MetaMaskInpageProvider,
// } from "@metamask/providers";
// import { ethers } from "ethers";

// export type Request = (params: RequestArguments) => Promise<unknown | null>;
// /**
//  * Utility hook to consume the provider `request` method with the available provider.
//  *
//  * @returns The `request` function.
//  */
// export const useRequest = (provider: MetaMaskInpageProvider) => {
//   /**
//    * `provider.request` wrapper.
//    *
//    * @param params - The request params.
//    * @param params.method - The method to call.
//    * @param params.params - The method params.
//    * @returns The result of the request.
//    */
//   const request: Request = async ({ method, params }) => {
//     try {
//       const data =
//         (await provider?.request({
//           method,
//           params,
//         } as RequestArguments)) ?? null;

//       return data;
//     } catch (requestError: any) {
//       return null;
//     }
//   };

//   return request;
// };

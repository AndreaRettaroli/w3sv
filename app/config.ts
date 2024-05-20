import { http, createConfig } from 'wagmi'
import { polygonAmoy } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [polygonAmoy],
  connectors: [injected()],
  ssr: true,
  transports: {
    [polygonAmoy.id]: http(),
  },
})
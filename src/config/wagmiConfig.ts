import { http, createConfig } from "@wagmi/core";
import { scrollSepolia } from "@wagmi/core/chains";

export const wagmiConfig = createConfig({
  chains: [scrollSepolia],
  transports: {
    [scrollSepolia.id]: http(
      "https://scroll-sepolia.g.alchemy.com/v2/OWk1batiAD_4Hsrf9bFSiFXhzTovXIbd"
    ),
  },
});

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

// Enhanced Sepolia configuration for development
const enhancedSepolia = {
  ...sepolia,
  rpcUrls: {
    default: {
      http: [
        process.env.ALCHEMY_SEPOLIA_URL || 'https://eth-sepolia.g.alchemy.com/v2/6H8cy5JmV9VHPvMFYaK9C',
        'https://sepolia.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        'https://rpc.sepolia.org',
        'https://ethereum-sepolia.publicnode.com'
      ],
    },
    public: {
      http: [
        'https://rpc.sepolia.org',
        'https://ethereum-sepolia.publicnode.com'
      ],
    },
  },
};

export const config = getDefaultConfig({
  appName: 'LandKrypt - Real Estate DeFi Platform',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '5fa297ea757b04cd0350a7a5b8de27bc',
  chains: [
    enhancedSepolia, // Prioritize enhanced Sepolia for development
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
  ],
  transports: {
    [sepolia.id]: http(
      process.env.ALCHEMY_SEPOLIA_URL || 'https://eth-sepolia.g.alchemy.com/v2/6H8cy5JmV9VHPvMFYaK9C',
      {
        batch: true,
        fetchOptions: {
          timeout: 30000,
        },
        retryCount: 3,
        retryDelay: 1000,
      }
    ),
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
  ssr: true,
  enableAnalytics: false, // Disable for privacy during development
});


// https://cloud.reown.com/app/21f4d9c0-7810-4c36-894e-dc05a78c2efa/project/78de6928-45cb-46c2-b820-8f266f992e4d
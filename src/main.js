import { createAppKit } from '@reown/appkit'
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5'
import { mainnet, bsc, polygon, avalanche, arbitrum, optimism, base, fantom} from '@reown/appkit/networks'
// @ts-expect-error 1. Get projectId
const projectId = ''

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // url must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}



const modal = createAppKit({
  adapters: [new Ethers5Adapter()],
  metadata: metadata,
  networks: [mainnet, bsc, polygon, avalanche, arbitrum, optimism, base, fantom],
  projectId,
  features: {
    analytics: true,
    email: false,
    socials: false,
    siwe: false
  }
})


async function handleChange({ provider, providerType, address, error, chainId, isConnected }) {
  if (isConnected) {
    alert("wallet connected")
  }
}
modal.subscribeProviders(handleChange)



document.addEventListener('DOMContentLoaded', () => {
    const connectWalletButtons = document.querySelectorAll('.open-modal');
    connectWalletButtons.forEach(button => {
      button.addEventListener('click', () => {
        modal.open();
      });
    });
  });

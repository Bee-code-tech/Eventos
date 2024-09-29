import pic1 from '../src/assets/pic1.jpg'
import pic2 from '../src/assets/pic2.jpg'
import pic3 from '../src/assets/pic3.jpg'
import nft1 from '../src/assets/nft1.JPG'
import nft2 from '../src/assets/nft2.JPG'
import nft3 from '../src/assets/nft3.JPG'
import nft4 from '../src/assets/nft4.JPG'
import nft6 from '../src/assets/nft6.JPG'

export const events = [
  {
    id: 1,
    name: "Blockchain Conference 2023",
    description: "A premier event about blockchain technologies.",
    date: "Wed, February 1, 2023, 12:00 am",
    location: "San Francisco, CA",
    price: 0.1,
    category: "Conference",
    image: pic1, 
  },
  {
    id: 2,
    name: "Web3 Developers Summit",
    description: "The biggest gathering for Web3 developers.",
    date: "Thu, March 10, 2023, 10:00 am",
    location: "New York, NY",
    price: 0.15,
    category: "Summit",
    image: pic2,
  },
  {
    id: 3,
    name: "NFT Art Expo 2023",
    description: "Showcasing the future of digital art with NFTs.",
    date: "Sat, April 15, 2023, 5:00 pm",
    location: "Los Angeles, CA",
    price: 0.2,
    category: "Expo",
    image: pic3,
  },
  {
    id: 4,
    name: "DeFi Protocol Meetup",
    description: "Discussing decentralized finance protocols.",
    date: "Tue, May 23, 2023, 2:00 pm",
    location: "Austin, TX",
    price: 0.08,
    category: "Meetup",
    image: pic1,
  },
  {
    id: 5,
    name: "Smart Contract Workshop",
    description: "Hands-on workshop on building smart contracts.",
    date: "Mon, June 5, 2023, 9:00 am",
    location: "Seattle, WA",
    price: 0.12,
    category: "Workshop",
    image: pic2,
  },
  {
    id: 6,
    name: "DAO Governance Conference",
    description: "Exploring the future of decentralized governance.",
    date: "Wed, July 12, 2023, 11:00 am",
    location: "Chicago, IL",
    price: 0.18,
    category: "Conference",
    image: pic2,
  },
  {
    id: 7,
    name: "Crypto Mining Expo 2023",
    description: "A deep dive into the world of cryptocurrency mining.",
    date: "Fri, August 25, 2023, 3:00 pm",
    location: "Denver, CO",
    price: 0.22,
    category: "Expo",
    image: pic1,
  },
  {
    id: 8,
    name: "Metaverse Developers Conference",
    description: "Building the future of virtual worlds and the metaverse.",
    date: "Sun, September 10, 2023, 1:00 pm",
    location: "Las Vegas, NV",
    price: 0.25,
    category: "Conference",
    image: pic2,
  },
  {
    id: 9,
    name: "Crypto Regulatory Summit",
    description: "Discussing the future of cryptocurrency regulation.",
    date: "Wed, October 20, 2023, 9:00 am",
    location: "Washington, D.C.",
    price: 0.14,
    category: "Summit",
    image:pic1,
  },
  {
    id: 10,
    name: "Decentralized Identity Workshop",
    description: "Workshop on self-sovereign identities and blockchain.",
    date: "Tue, November 28, 2023, 4:00 pm",
    location: "Portland, OR",
    price: 0.13,
    category: "Workshop",
    image:pic3,
  },
];

export const nfts = [
  {
    id: 1,
    name: "Claimable NFT #1",
    image: nft1, // Placeholder image
    startTimestamp: 1696032000, // Unix timestamp for Sep 30, 2023
    endTimestamp: 1696291200, // Unix timestamp for Oct 3, 2023 (Already passed, Claimable)
    price: 0.25,
  },
  {
    id: 2,
    name: "Claimable NFT #2",
    image: nft2,
    startTimestamp: 1695945600, // Unix timestamp for Sep 29, 2023
    endTimestamp: 1696204800, // Unix timestamp for Oct 2, 2023 (Already passed, Claimable)
    price: 0.15,
  },
  {
    id: 3,
    name: "Future NFT #1",
    image: nft3,
    startTimestamp: 1698000000, // Unix timestamp for Oct 23, 2023
    endTimestamp: 1698400000, // Unix timestamp for Oct 28, 2023 (Future event, countdown active)
    price: 0.35,
  },
  {
    id: 4,
    name: "Future NFT #2",
    image: nft4,
    startTimestamp: 1698500000, // Unix timestamp for Nov 1, 2023
    endTimestamp: 1699000000, // Unix timestamp for Nov 3, 2023 (Future event, countdown active)
    price: 0.4,
  },
  {
    id: 5,
    name: "Future NFT #3",
    image: nft6,
    startTimestamp: 1699100000, // Unix timestamp for Nov 4, 2023
    endTimestamp: 1699200000, // Unix timestamp for Nov 5, 2023 (Future event, countdown active)
    price: 0.4,
  },
];





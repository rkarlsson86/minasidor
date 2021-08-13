import { Nft } from './nft.model'

export interface User {
  account_id: string;
  profile?: Profile,
  nft?: Nft
}

export interface Profile {
  first_name: string;
  last_name: string;
  country: string;
  phone: string;
  email: string;
  profile_image: string;
}

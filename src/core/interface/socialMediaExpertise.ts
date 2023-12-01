export interface SocialMediaType {
  id: number;
  network: string;
  proficiency: number;
}

export interface SocialMediaExpertiseType {
  socialMedias: SocialMediaType[];
}

export type GoogleFactCheckResponse = {
  claims?: {
    text: string;
    claimant?: string;
    claimDate?: string;
    claimReview?: {
      url: string;
      title: string;
      reviewDate?: string;
      textualRating?: string;
      languageCode?: string;
    }[];
  }[];
};

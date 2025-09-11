export type faqType = {
  lastUpdated: string;
  title: string;
  sections: {
    id: number;
    question: string;
    answer: string;
  }[];
};

// Legacy file - redirect to new glossary structure
export { glossaryData, getAllGlossaryTerms, getGlossaryTerm, searchGlossaryTerms } from './glossary';

// Updated legacy data with new terms
export const legacyGlossaryData = {
  lastUpdated: "September 1, 2025",
  sections: [
    {
      mainLetter: "A",
      subTerm: ["Alternative Dispute Resolution", "Arbitration", "Award"],
    },
    {
      mainLetter: "B",
      subTerm: ["Binding Decision"],
    },
    {
      mainLetter: "C",
      subTerm: ["Conflict Resolution"],
    },
    {
      mainLetter: "D",
      subTerm: ["Dispute Resolution"],
    },
    {
      mainLetter: "E",
      subTerm: ["E-File", "E-Mediation", "Enforceable Award", "Escalation Clauses"],
    },
    {
      mainLetter: "L",
      subTerm: ["Litigation", "Legal Disputes"],
    },
    {
      mainLetter: "M",
      subTerm: ["Mediation", "Mediator"],
    },
    {
      mainLetter: "N",
      subTerm: ["Negotiation", "Neutral Evaluation"],
    },
    {
      mainLetter: "O",
      subTerm: ["Online Dispute Resolution"],
    },
  ],
};

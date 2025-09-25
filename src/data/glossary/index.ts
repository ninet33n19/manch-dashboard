import { awardGlossary } from './award';
import { alternativeDisputeResolutionGlossary } from './alternative-dispute-resolution';
import { arbitratorGlossary } from './arbitrator';
import { arbitrationGlossary } from './arbitration';
import { bindingDecisionGlossary } from './binding-decision';
import { conflictResolutionGlossary } from './conflict-resolution';
import { eFileGlossary } from './e-file';
import { disputeResolutionGlossary } from './dispute-resolution';
import { enforceableAwardGlossary } from './enforceable-award';
import { eMediationGlossary } from './e-mediation';
import { litigationGlossary } from './litigation';
import { escalationClausesGlossary } from './escalation-clauses';
import { legalDisputesGlossary } from './legal-disputes';
import { mediationGlossary } from './mediation';
import { mediatorGlossary } from './mediator';
import { negotiationGlossary } from './negotiation';
import { neutralEvaluationGlossary } from './neutral-evaluation';
import { onlineDisputeResolutionGlossary } from './online-dispute-resolution';
import { GlossaryData } from '@/types/glossary-type';

export const glossaryData: GlossaryData = {
  'award': awardGlossary,
  'alternative-dispute-resolution': alternativeDisputeResolutionGlossary,
  'arbitrator': arbitratorGlossary,
  'arbitration': arbitrationGlossary,
  'binding-decision': bindingDecisionGlossary,
  'conflict-resolution': conflictResolutionGlossary,
  'dispute-resolution': disputeResolutionGlossary,
  'e-file': eFileGlossary,
  'enforceable-award': enforceableAwardGlossary,
  'e-mediation': eMediationGlossary,
  'litigation': litigationGlossary,
  'escalation-clauses': escalationClausesGlossary,
  'legal-disputes': legalDisputesGlossary,
  'mediation': mediationGlossary,
  'mediator': mediatorGlossary,
  'negotiation': negotiationGlossary,
  'neutral-evaluation': neutralEvaluationGlossary,
  'online-dispute-resolution': onlineDisputeResolutionGlossary,
};

// Helper function to get all available glossary terms
export const getAllGlossaryTerms = () => Object.keys(glossaryData);

// Helper function to get a specific glossary term
export const getGlossaryTerm = (slug: string) => glossaryData[slug];

// Helper function to search glossary terms
export const searchGlossaryTerms = (query: string) => {
  const terms = Object.values(glossaryData);
  return terms.filter(term =>
    term.title.toLowerCase().includes(query.toLowerCase()) ||
    term.sections.some(section => {
      if (typeof section.content === 'string') {
        return section.content.toLowerCase().includes(query.toLowerCase());
      }

      if (Array.isArray(section.content)) {
        return section.content.some(item => {
          if (typeof item === 'string') {
            return item.toLowerCase().includes(query.toLowerCase());
          }

          if (item && typeof item === 'object' && 'content' in item) {
            const subsection = item as { content: string | string[] };
            if (typeof subsection.content === 'string') {
              return subsection.content.toLowerCase().includes(query.toLowerCase());
            }

            if (Array.isArray(subsection.content)) {
              return subsection.content.some(subItem =>
                subItem.toLowerCase().includes(query.toLowerCase())
              );
            }
          }

          return false;
        });
      }

      return false;
    })
  );
};

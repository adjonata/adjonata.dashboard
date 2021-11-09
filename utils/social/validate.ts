import validateKnowledge, { KnowledgeForm } from '@/utils/knowledge/validate'

export interface SocialForm extends KnowledgeForm {}

export default function validateSocial(form: SocialForm) {
  return validateKnowledge(form)
}

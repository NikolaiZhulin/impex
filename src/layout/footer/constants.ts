import { intlMessages, ROUTES } from '@constants/routes.constants';
import { EMAIL } from '@constants/ui.constants';

export const FOOTER_LINKS = {
  company: [
    { href: ROUTES.ADVANTAGES, text: intlMessages.advantages },
    { href: ROUTES.SCHEME_OF_WORK, text: intlMessages.scheme_of_work },
    { href: ROUTES.FAQ, text: intlMessages.faq },
    { href: ROUTES.RULES, text: intlMessages.community_rules },
  ],
  legality: [
    { href: ROUTES.PRIVACY_POLICY, text: intlMessages.privacy_policy },
    { href: ROUTES.TERMS_AND_CONDITIONS, text: intlMessages.terms_and_conditions },
  ],
  contacts: [
    { text: EMAIL },
  ],
};

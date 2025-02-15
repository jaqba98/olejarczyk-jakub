import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Selector, State } from '@ngxs/store';

import { ContactsModel } from '@olejarczyk-jakub/model';

@State<ContactsModel>({
  name: 'contacts',
  defaults: {
    contacts: [
      {
        icon: faEnvelope,
        header: 'Send me a message',
        label: 'jakubolejarczyk98@gmail.com',
        link: 'mailto:jakubolejarczyk98@gmail.com',
      },
      {
        icon: faPhone,
        header: 'Call me',
        label: '501 007 197',
        link: 'tel:501-007-197',
      },
      {
        icon: faLocationDot,
        header: "See where I'm from",
        label: 'Kielce',
        link: 'https://maps.app.goo.gl/WfaYw2oHqbq8crmk6',
      },
      {
        icon: faLinkedin,
        header: 'Check out my Linkedin',
        label: 'www.linkedin.com/in/jakub-olejarczyk',
        link: 'https://www.linkedin.com/in/jakub-olejarczyk',
      },
      {
        icon: faGithub,
        header: 'Check out my GitHub',
        label: 'www.github.com/jaqba98',
        link: 'https://www.github.com/jaqba98',
      },
    ],
  },
})
export class ContactsState {
  @Selector()
  static getContacts(state: ContactsModel): ContactsModel['contacts'] {
    return state.contacts;
  }
}

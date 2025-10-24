import { AboutMeSectionStateDomainModel } from '../../model/state/section/about-me-section-state-domain.model';
import { aboutMeSectionDataDomainConst } from './about-me-section-domain.const';

describe('About Me Section Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: AboutMeSectionStateDomainModel = {
      // TODO: Add real description
      descriptions: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a quam sit amet arcu egestas rhoncus. Duis nec laoreet odio. Suspendisse potenti. Nam aliquet pulvinar dolor, scelerisque varius velit faucibus eu. Praesent malesuada odio non volutpat ullamcorper. Cras porta sed erat sit amet posuere. Aliquam fringilla tellus sed tincidunt varius. Suspendisse bibendum, felis et cursus dignissim, lacus eros tempor metus, nec ullamcorper sapien eros in diam. Aliquam placerat malesuada tristique. Ut laoreet tempor lacus, congue convallis ligula tempus a. Nulla eget velit eget massa viverra auctor. Fusce congue dolor et quam sollicitudin, ut interdum eros condimentum. Proin a mi interdum, interdum quam in, consequat risus. ',
        'Sed id sapien vel urna tempor varius sed a nunc. Sed id tortor sit amet libero efficitur blandit ac sit amet justo. Sed nec posuere enim. Maecenas dignissim lectus quis lorem venenatis, eu tempor diam auctor. Morbi imperdiet, neque vitae pulvinar fermentum, leo urna convallis quam, eget scelerisque metus urna non nisl. Integer bibendum luctus dolor, a finibus tortor lacinia non. Ut ullamcorper purus sed diam tristique sodales. Praesent eget orci nulla. Aliquam bibendum leo nunc, scelerisque viverra sapien malesuada id. Duis a viverra lectus. Nulla euismod elit eu nisl gravida varius. Nunc et feugiat elit. Duis rhoncus nisl tellus. Maecenas commodo nunc vel mi tempor, id sagittis velit aliquam. ',
        'Vestibulum vitae finibus nibh, at convallis lacus. In hac habitasse platea dictumst. Duis auctor mauris velit, ut sollicitudin urna pharetra vitae. Fusce erat elit, gravida sit amet justo sit amet, tincidunt elementum leo. Nullam eu est at nibh suscipit maximus lobortis et magna. Donec porta lectus nulla, ac tincidunt mauris porta nec. Aenean bibendum nec eros id convallis. Phasellus ullamcorper, massa in tincidunt semper, turpis enim molestie lorem, eget gravida urna nisi id nisi. Donec ut dignissim diam. ',
      ],
    };
    expect(aboutMeSectionDataDomainConst).toEqual(correctResult);
  });
});

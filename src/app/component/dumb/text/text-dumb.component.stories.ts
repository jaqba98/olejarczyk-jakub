import type { Meta, StoryObj } from '@storybook/angular';

import { TextDumbComponent } from './text-dumb.component';
import { TextDumbType } from './text-dumb.type';

const meta: Meta<TextDumbComponent> = {
  title: 'Component/Dumb/Text',
  component: TextDumbComponent,
};

export default meta;
type Story = StoryObj<TextDumbComponent>;

const buildTextDumb = (type: TextDumbType, value: string) => {
  return `<text-dumb type="${type}"><span ${type}>${value}</span></text-dumb>`;
};

export const P: Story = {
  render: (args) => ({
    props: args,
    template: buildTextDumb('p', 'p works!'),
  }),
  args: {
    type: 'p',
  },
};

export const H1: Story = {
  render: (args) => ({
    props: args,
    template: buildTextDumb('h1', 'h1 works!'),
  }),
  args: {
    type: 'h1',
  },
};

export const H2: Story = {
  render: (args) => ({
    props: args,
    template: buildTextDumb('h2', 'h2 works!'),
  }),
  args: {
    type: 'h2',
  },
};

export const H3: Story = {
  render: (args) => ({
    props: args,
    template: buildTextDumb('h3', 'h3 works!'),
  }),
  args: {
    type: 'h3',
  },
};

export const H4: Story = {
  render: (args) => ({
    props: args,
    template: buildTextDumb('h4', 'h4 works!'),
  }),
  args: {
    type: 'h4',
  },
};

export const H5: Story = {
  render: (args) => ({
    props: args,
    template: buildTextDumb('h5', 'h5 works!'),
  }),
  args: {
    type: 'h5',
  },
};

export const H6: Story = {
  render: (args) => ({
    props: args,
    template: buildTextDumb('h6', 'h6 works!'),
  }),
  args: {
    type: 'h6',
  },
};

export const Small: Story = {
  render: (args) => ({
    props: args,
    template: buildTextDumb('small', 'small works!'),
  }),
  args: {
    type: 'small',
  },
};

export const LongText: Story = {
  render: (args) => ({
    props: args,
    template: buildTextDumb(
      'p',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus repellat, aut omnis odit quaerat aliquam laborum doloribus repudiandae quis consequuntur iure praesentium nostrum deserunt tempora asperiores corporis cupiditate, unde veniam aliquid aspernatur hic. Qui quae praesentium delectus voluptatibus optio repellat voluptates, animi explicabo cupiditate, quo, itaque temporibus! Nulla accusamus iusto debitis omnis, necessitatibus neque error. Officiis expedita maxime asperiores harum accusantium, praesentium sint ratione veniam doloremque, incidunt quas. Consequuntur, dicta blanditiis deserunt tempore aperiam alias, reiciendis similique quia quibusdam dignissimos nulla sint nobis perferendis error unde ipsum quam commodi ex cum, facere nisi optio facilis quod ullam. Corporis qui, ducimus quibusdam molestiae unde delectus dignissimos praesentium tempore eveniet nam sed animi! Odio, possimus rerum, sunt amet provident asperiores deleniti quibusdam ex cupiditate quaerat facere neque. Inventore minus mollitia doloribus cum quibusdam autem tempore esse possimus, ducimus expedita quidem voluptate cupiditate incidunt ratione repellat animi nemo veritatis porro id officiis, ipsum neque obcaecati asperiores? Voluptates eaque ut ullam ducimus officia aperiam saepe, minus voluptate, soluta reiciendis maiores illum fugit eos. Quisquam ea et nulla aut. Minus magnam optio non assumenda itaque laboriosam sapiente inventore, vero quia id commodi iusto natus. Facilis ipsam molestiae a neque, illum hic in. Dicta ipsam voluptatem suscipit facilis vero, hic dolore aperiam odio? Laboriosam tempore beatae eum sint laborum assumenda modi, magni nostrum, esse delectus provident adipisci. Porro labore vero officia aspernatur amet quasi ex quas non, ipsa repudiandae quidem optio culpa unde soluta, distinctio neque odio eum magni id minima illum quo voluptatum molestiae? Libero id quibusdam impedit pariatur illum odio, consectetur facilis vitae delectus quos natus maiores earum neque dolorem officia excepturi mollitia aperiam obcaecati est eligendi nesciunt sunt consequatur. Eaque dignissimos odio ab eligendi harum vero corporis perferendis ipsam iste quaerat in aspernatur distinctio neque fuga, culpa architecto cupiditate praesentium omnis voluptatum expedita autem sunt fugiat assumenda. Adipisci error illo odio omnis quo, ipsam corrupti eveniet temporibus architecto ipsa fugit quod eligendi ex neque pariatur a recusandae fugiat ducimus voluptas provident doloribus? Saepe optio excepturi, animi facilis placeat, repellendus dolores aliquid earum vitae est deserunt voluptates quos nobis, laborum mollitia incidunt accusantium ex aliquam. Doloremque reprehenderit quia sunt laudantium omnis accusamus eveniet asperiores odit in. Sunt quaerat repellat quam et! Rerum, dicta. Quasi, modi? Nostrum, ullam? Quos iusto suscipit amet soluta commodi, tempora blanditiis hic voluptate, doloribus optio explicabo, doloremque ipsa! Voluptate doloremque recusandae aut ratione facere a magnam voluptatum saepe. Vero porro distinctio in tempore, sit saepe nulla aliquam libero iure et quaerat optio veniam nemo dolore! Eius ex facilis aut aspernatur doloribus deleniti repellat explicabo natus officia doloremque amet mollitia corrupti deserunt optio consectetur rem libero, molestiae sunt numquam exercitationem porro cum nulla. Voluptates beatae reiciendis nam officiis minus similique nostrum molestias, tenetur quidem, adipisci nisi! Distinctio maiores at quaerat, temporibus aliquam nisi nostrum fugit totam, facilis, amet officia quos eveniet ex esse omnis ipsum non dolore quam nemo consectetur adipisci impedit quo repudiandae error. Sed voluptas nisi commodi! Magnam culpa dolores facilis eligendi quisquam hic est quibusdam, porro veniam ipsa non consequuntur illo nobis accusamus expedita totam quo eveniet. Expedita possimus sunt esse, error iste non, tempora distinctio illum aperiam nemo, perspiciatis omnis. Dolores rem dolorum sapiente quos culpa quibusdam repellat rerum deserunt eos sunt ut architecto blanditiis, at explicabo voluptatibus temporibus? Eius suscipit esse consectetur exercitationem fugiat labore ipsam expedita incidunt. Possimus illo repellendus nemo nisi ad eveniet, cum ratione. Quam molestias culpa inventore odio hic esse corrupti id ab voluptates eveniet ipsa vel quia dicta, ipsam recusandae nisi explicabo quos, consequuntur et distinctio alias. Expedita maxime alias natus amet sequi, provident similique officia unde? Quidem sapiente hic aspernatur eaque iusto placeat cupiditate optio accusantium error nulla. Consequuntur, molestiae, quod minus eligendi quisquam qui nisi quasi magni hic non, earum alias repellendus sit deserunt quae culpa mollitia ullam officiis debitis cumque iste nobis doloremque voluptatibus veritatis. Consequatur nostrum tempore reiciendis dolor, quasi laudantium nam eius quidem mollitia odit totam, vel repudiandae recusandae beatae nesciunt vitae tempora nemo, explicabo ipsa eligendi molestiae. Nihil, reprehenderit eum sequi officiis voluptatum repellat doloribus delectus. Sequi, quos ex temporibus harum dignissimos saepe placeat minima quis incidunt, accusantium in voluptates voluptatem sunt. Doloremque hic ipsam, nostrum officiis dolore aspernatur impedit quasi temporibus incidunt ratione numquam. Sequi tenetur inventore ipsa dicta deleniti laboriosam, cumque eveniet similique fugit veritatis, id suscipit earum eius, pariatur accusantium quae provident et ab. Enim deserunt voluptatum culpa dolore soluta in eligendi facilis excepturi unde ea. Itaque rem aliquam quod repellendus quisquam laboriosam illo, voluptas dignissimos rerum vero sit, aliquid tempore. Mollitia rerum dolorem quod dolorum officia, cum, maxime veritatis eius amet architecto temporibus doloribus omnis quibusdam doloremque est, vel accusamus nam minus illo iure sapiente? Illum recusandae asperiores in nulla repellendus, eum itaque voluptate nobis delectus reprehenderit natus necessitatibus neque ullam officiis sint vel consequatur quaerat corrupti? Delectus aspernatur eligendi quia sed ullam harum velit, dolorum excepturi numquam molestias est perferendis alias ipsum nihil. Perspiciatis delectus vitae, facere recusandae corporis veritatis, dolor est quia cum architecto laborum ex eum impedit dolorum aspernatur eos autem doloremque odit nihil cumque? Tenetur ipsam vero, doloribus unde beatae blanditiis dolore fuga ad. Aliquam dolores quia commodi cupiditate eveniet harum quae, nemo autem voluptatibus architecto asperiores soluta quam repellendus molestiae minus sapiente, nihil dolore. Nulla totam eos maxime minus tenetur enim! Aliquid, nisi odio libero rem similique, possimus fuga reiciendis saepe obcaecati distinctio, inventore nemo expedita facilis. Laborum voluptatum eaque odio inventore ipsa porro corporis alias unde quae at, architecto tenetur magni tempore impedit saepe aspernatur aliquam ullam illum deserunt. Reiciendis eligendi laborum nemo animi beatae magni officiis sed obcaecati odit sapiente eveniet ducimus dignissimos ut, laudantium numquam, commodi sunt veniam recusandae temporibus quo vitae iure dolor! Id, modi? Doloribus commodi voluptates sequi, ut saepe nobis porro reiciendis pariatur incidunt praesentium laboriosam autem accusantium, culpa animi soluta architecto corrupti? Explicabo iste quasi molestiae voluptatum cupiditate reiciendis pariatur nam enim! Quis doloremque voluptas impedit sequi quas saepe voluptatem totam aut facere dicta enim velit in, iure quo dolores quibusdam rem cum animi magni sed minus unde!',
    ),
  }),
  args: {
    type: 'p',
  },
};

import type { Schema, Attribute } from '@strapi/strapi';

export interface BasePostPost extends Schema.Component {
  collectionName: 'components_base_post_posts';
  info: {
    displayName: 'post';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Titre: Attribute.String;
    description: Attribute.Blocks;
    categorie: Attribute.Relation<
      'base-post.post',
      'oneToOne',
      'api::categorie.categorie'
    >;
    tags: Attribute.Relation<'base-post.post', 'oneToMany', 'api::tag.tag'>;
    date_post: Attribute.Date;
    media: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'base-post.post': BasePostPost;
    }
  }
}

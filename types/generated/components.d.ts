import type { Schema, Attribute } from '@strapi/strapi';

export interface LiLi extends Schema.Component {
  collectionName: 'components_li_lis';
  info: {
    displayName: 'Li';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface MarkdownMarkdown extends Schema.Component {
  collectionName: 'components_markdown_markdowns';
  info: {
    displayName: 'Markdown';
  };
  attributes: {
    Block: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'li.li': LiLi;
      'markdown.markdown': MarkdownMarkdown;
    }
  }
}

import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  // headings: {
  //   type: 'json',
  //   resolve: async (doc) => {
  //     const slugger = new GithubSlugger();
  //     const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  //     const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
  //       ({ groups }) => {
  //         const flag = groups?.flag;
  //         const content = groups?.content;
  //         return {
  //           level: flag.length,
  //           text: content,
  //           slug: content ? slugger.slug(content) : undefined,
  //         };
  //       },
  //     );
  //     return headings;
  //   },
  // },
};

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: false,
    },
    site: {
      type: 'string',
      required: false,
    },
    image: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'date',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    tags: {
      required: false,
      type: 'list',
      of: {
        type: 'string',
      },
    },
  },
  computedFields,
}));

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blogs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    image: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'date',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project, Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});

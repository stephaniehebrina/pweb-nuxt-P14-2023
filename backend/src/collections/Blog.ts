import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Blog = {
  slug: 'Blog',
  
  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation === "create") {
          let logMessage = `Blog: [${args.result.title}], id: [${args.result.id}] created`;
          await payload.create({
            collection: "Logs",
            data: {
              title: args.result.title,
              log: logMessage,
              timestamp: new Date(),
              action: "Blog Created",
            },
          });
        } 
        else if (args.operation === "deleteByID") {
          let logMessage = `Blog: [${args.result.title}], id: [${args.result.id}] deleted`;
          await payload.create({
            collection: "Logs",
            data: {
              title: args.result.title,
              log: logMessage,
              timestamp: new Date(),
              action: "Blog Deleted",
            },
          });
        } 
        else if (args.operation === "updateByID") {
          let logMessage = `Blog: [${args.result.title}], id: [${args.result.id}] updated`;
          await payload.create({
            collection: "Logs",
            data: {
              title: args.result.title,
              log: logMessage,
              timestamp: new Date(),
              action: "Blog Updated",
            },
          });
        }
      },
    ],
  },

  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image URL',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'textarea',
      required: true,
    },
  ],
};

export default Blog;

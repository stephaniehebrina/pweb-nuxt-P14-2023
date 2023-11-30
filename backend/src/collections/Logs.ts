import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Log = {
  slug: 'Logs',
  
  admin: {
    useAsTitle: 'log',
  },

  access: {
    read: () => true,
    update: () => false, 
    delete: () => false,
    create: () => false,
  },

  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'log',
      label: 'Log Message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'timestamp',
      label: 'Timestamp',
      type: 'date',
      required: true,
    },
    {
      name: 'action',
      label: 'Action',
      type: 'text',
      required: true,
    },
  ],
};

export default Log;

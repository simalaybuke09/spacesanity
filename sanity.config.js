import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { webhooksTrigger } from 'sanity-plugin-webhooks-trigger'

export default defineConfig({
  name: 'default',
  title: 'spacesanity',

  projectId: '0i0zsj65',
  dataset: 'production',

  plugins: [structureTool(), visionTool()  ],

  schema: {
    types: schemaTypes,
  },
})

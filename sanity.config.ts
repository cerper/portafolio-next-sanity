import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: '6jpaeq3x',
  dataset: 'production',
  title: 'My personal website',
  apiVersion: '2024-1-16',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config

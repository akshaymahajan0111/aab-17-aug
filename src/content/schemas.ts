import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "note": z.string()
      }),
      "principles": z.array(z.object({
        "title": z.string(),
        "body": z.string(),
        "id": z.string()
      })),
      "invitation": z.object({
        "folio": z.string(),
        "label": z.string()
      }),
      "footer": z.object({
        "closing": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;
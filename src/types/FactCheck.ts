import { Type } from '@sinclair/typebox';

export const FactCheckSchema = Type.Object({
  text: Type.String(),
  claimant: Type.Optional(Type.String()),
  reviewDate: Type.Optional(Type.String()),
  rating: Type.Optional(Type.String()),
  url: Type.Optional(Type.String()),
});

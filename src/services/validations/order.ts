import { orderSchemas } from './schemas';
import parseValidationError from './parseValidationError';

function onCreate(productsIds: number[]) {
  const { onCreateSchema } = orderSchemas;

  const { error } = onCreateSchema.validate(productsIds);
  if (!error) {
    return null;
  }

  throw parseValidationError(error);
}

export default {
  onCreate,
};
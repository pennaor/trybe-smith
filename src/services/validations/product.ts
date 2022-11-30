import parseValidationError from './parseValidationError';
import { productBodySchemas } from './schemas';

function onCreate(body: object) {
  const { onCreateSchema } = productBodySchemas;

  const { error } = onCreateSchema.validate(body);
  if (!error) {
    return null;
  }

  throw parseValidationError(error);
}

export default {
  onCreate,
};

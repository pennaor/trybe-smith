import parseValidationError from './parseValidationError';
import { userBodySchemas } from './schemas';

function onCreate(body: object) {
  const { onCreateSchema } = userBodySchemas;

  const { error } = onCreateSchema.validate(body);
  if (!error) {
    return null;
  }

  throw parseValidationError(error);
}

function onAuthenticate(body: object) {
  const { onAuthenticateSchema } = userBodySchemas;

  const { error } = onAuthenticateSchema.validate(body);
  if (!error) {
    return null;
  }

  throw parseValidationError(error);
}

export default {
  onCreate,
  onAuthenticate,
};

import { BadRequest, UnprocessableEntity } from '../../errors';
import { IAppError } from '../../interfaces';

export default function parseValidationError(error: Error):IAppError {
  const { message } = error;
  if (message.includes('is required')) {
    return new BadRequest(message);
  }
  return new UnprocessableEntity(message);
}

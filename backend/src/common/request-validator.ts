import { Request } from 'express';
import { validationResult, ValidationChain } from 'express-validator';

/**
 * Validate request body
 */
export async function validate(req: Request, validations: ValidationChain[]) {
  await Promise.all(validations.map((validation) => validation.run(req)));
  return validationResult(req);
}

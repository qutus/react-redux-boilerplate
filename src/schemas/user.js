import { normalize, schema } from 'normalizr';

const userSchema = new schema.Entity('users', {}, { idAttribute: 'email' });

export const normalizeUser = (data) => normalize(data, [userSchema]);

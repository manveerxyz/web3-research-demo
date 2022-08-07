import NodeCache from 'node-cache';
import log from './log';

let c: NodeCache;

export const initCache = () => {
  c = new NodeCache({ stdTTL: 60 * 60 * 24 });
  log.debug('init cache');
}

const get = (key: string) => c.get(key);
const set = (key: string, value: any) => c.set(key, value);

const cache = {
  get,
  set,
}
export default cache;
import { config } from 'dotenv';
import { resolve } from 'path';

if (process.env.NODE_ENV === 'development') {
  config({ path: resolve(__dirname, '../.env.local') });
}

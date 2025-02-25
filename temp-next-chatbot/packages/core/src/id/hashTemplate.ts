import { hashString } from './hashJsxChildren';
import stringify from 'fast-json-stable-stringify';

export default function hashTemplate(
  template: {
    [key: string]: string;
  },
  hashFunction = hashString
): string {
  return hashFunction(stringify(template));
}

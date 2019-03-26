import { from } from "rxjs";
import { flatMap } from "rxjs/operators";

const getMarkdownContent = resource =>
  from(fetch(resource)).pipe(flatMap(resp => resp.text()));

export { getMarkdownContent };

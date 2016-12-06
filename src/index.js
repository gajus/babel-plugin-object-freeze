// @flow

import BabelTypes from 'babel-types';

export default ({
  types: t
}: {
  types: BabelTypes
}) => {
  let skipOne = false;

  return {
    visitor: {
      'ArrayExpression|ObjectExpression' (path: Object) {
        if (skipOne) {
          skipOne = false;

          return;
        }

        /**
         * @todo Investigate if there is a smarter way to do this avoiding recursion.
         */
        skipOne = true;

        path.replaceWith(
          t.callExpression(
            t.memberExpression(
              t.identifier('Object'),
              t.identifier('freeze')
            ),
            [
              path.node
            ]
          )
        );
      }
    }
  };
};

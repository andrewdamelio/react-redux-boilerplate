/* eslint-env node, mocha */
import jsdom from 'jsdom';
import assert from'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../../src/components/Counter';
import TestUtils from 'react-addons-test-utils';


/**
 * Returns the computed styles of a 'component' at the
 * provided 'lookup' id.
 *
 * @param {React Component} component
 * @return computed styles
 */
function getStylesByTestId(component, lookup) {
  const node = ReactDOM.findDOMNode(component);
  const targetNode = node.querySelector(lookup);
  const styles = global.window.getComputedStyle(targetNode);

  return styles;
}

describe('Counter', () => {
  beforeEach(() => {
    global.document = jsdom.jsdom();
    global.window = document.defaultView;
  });

  describe('counter >= 0', () => {
    let counter;

    beforeEach(() => {
      const mockFn = () => true;
      counter = TestUtils.renderIntoDocument(
        <Counter counter={ 1 }
                 increment={ mockFn }
                 decrement={ mockFn } />
      );
    });

    it('should display with green color style', () => {
      const style = getStylesByTestId(counter, '#status-test-id');
      const statusIndicatorStyles = style.color === 'rgb(42, 254, 27)';
      assert.strictEqual(statusIndicatorStyles, true);
    });
  });

  describe('counter < 0', () => {
    let counter;

    beforeEach(() => {
      const mockFn = () => true;
      counter = TestUtils.renderIntoDocument(
        <Counter counter={ -1 }
                 increment={ mockFn }
                 decrement={ mockFn } />
      );
    });

    it('should display with red color style', () => {
      const style = getStylesByTestId(counter, '#status-test-id');
      const statusIndicatorStyles = style.color === 'rgb(254, 50, 50)';
      assert.strictEqual(statusIndicatorStyles, true);
    });
  });
});

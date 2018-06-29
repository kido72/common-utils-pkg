/* global describe, it */

import chai from 'chai';
import StringUtil from './string.util';

chai.expect();

const {
  expect
} = chai;

describe('STRING', () => {
  describe('arrToString', () => {
    it('should convert array to string', () => {
      expect(StringUtil.arrToString([1, 2], '-')).to.be.equal('1-2');
      expect(StringUtil.arrToString([1, 2], '-')).to.be.a('string');
    });
  });

  describe('toTitleCase', () => {
    it('should convert string to "Title Case"', () => {
      expect(StringUtil.toTitleCase('the quick brown')).to.be.equal('The Quick Brown');
    });
  });

  describe('toSentenceCase', () => {
    it('should convert string to "Sentence case"', () => {
      expect(StringUtil.toSentenceCase('THE QUICK BROWN')).to.be.equal('The quick brown');
    });
  });
});

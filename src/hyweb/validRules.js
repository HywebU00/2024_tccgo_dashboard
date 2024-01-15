export default {
    /**
     * Rule validate required
     * @param {any} v the given value to validate
     * @param {string} label
     * @returns validate
     */
    ruleRequired: (v, label = null) => {
      //return !!v || `${label ?? 'field'}必須填寫`;
      return !!v || '必須填寫' ;
    },
    /**
     * Rule validate min length
     * @param {any} v the given value to validate
     * @param {number} length min length to check
     * @param {string} label
     * @returns validate
     */
    ruleMinLength: (v, length, label = null) => {
      return (
        String(v).length >= length ||
        //`The ${label ?? 'field'} minimum characters is ${length}`
        `最少要${length}字元`
      );
    },
    /**
     * Rule validate max length
     * @param {any} v the given value to validate
     * @param {number} length max length to check
     * @param {string} label
     * @returns validate
     */
    ruleMaxLength: (v, length, label = null) => {
      return (
        String(v).length <= length ||
        //`The ${label ?? 'field'} maximum characters is ${length}`
        `最多${length}字元`
      );
    },
    /**
     * Rule validate email
     * @param {any} v the given value to validate
     * @param {string} label
     * @returns validate
     */
    ruleEmail: (v, label = null) => {
      return (
        !v ||
        /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+(\.\w{2,3})+$/.test(String(v)) ||
        //`The ${label ?? 'field'} must be a valid email`
        `email格式有誤`
      );
    },
    /**
     * Rule validate phone number
     * @param {any} v the given value to validate
     * @param {string} label
     * @returns validate
     */
    ruleTelephone: (v, label = null) => {
      return (
        !v ||
        /^([0-9\\-])*$/.test(String(v)) ||
        `The ${label ?? 'field'} must be a valid phone number`
      );
    },
    /**
     * Rule validate decimal
     * @param {any} v the given value to validate
     * @param {string} label
     * @param {number} decimalPlace the decimal place to check
     * @param {boolean} checkOverDecimalOnly to check only over decimal place only
     * @returns validate
     */
    ruleDecimal: ({
      v,
      label = null,
      decimalPlace = 2,
      checkOverDecimalOnly = true,
    }) => {
      const regex = new RegExp(
        `^(0|[1-9]\\d*)((\\.)${checkOverDecimalOnly ? '?' : ''}\\d{${
          checkOverDecimalOnly ? '0,' : ''
        }${decimalPlace}})$`
      );
      if (v && !v.toString().replace(/\s/g, '').match(regex)) {
        return `The ${
          label ?? 'field'
        } must be a valid decimal with ${decimalPlace} fraction`;
      }
      return true;
    },
    /**
     * Rule validate number less than
     * @param {any} v the given value to validate
     * @param {any} targetValue the target value to check againt
     * @param {string} label
     * @returns validate
     */
    ruleLessThan: (v, targetValue, label = null) => {
      return (
        !v ||
        !targetValue ||
        parseFloat(v) < parseFloat(targetValue) ||
        `The ${label ?? 'field'} must less than ${targetValue}`
      );
    },
    /**
     * Rule validate number greater than
     * @param {any} v the given value to validate
     * @param {any} targetValue the target value to check againt
     * @param {string} label
     * @returns validate
     */
    ruleGreaterThan: (v, targetValue, label = null) => {
      return (
        !v ||
        !targetValue ||
        parseFloat(v) > parseFloat(targetValue) ||
        `The ${label ?? 'field'} must greater than ${targetValue}`
      );
    },
    /**
     * Rule validate integer number
     * @param {any} v the given value to validate
     * @param {string} label
     * @returns validate
     */
    ruleNumber: (v, label = null) => {
      return (
        Number.isInteger(Number(v)) ||
        `The ${label ?? 'field'} must be a valid integer`
      );
    },
    /**
     * Rule validate date before date
     * @param {any} v the given value to validate
     * @param {any} targetValue the target value to check againt
     * @param {string} label
     * @returns validate
     */
    ruleBeforeDate: (v, targetValue, label = null) => {
      return (
        !v ||
        !targetValue ||
        v < targetValue ||
        `The ${label ?? 'field'} must before ${targetValue}`
      );
    },
    /**
     * Rule validate date after date
     * @param {any} v the given value to validate
     * @param {any} targetValue the target value to check againt
     * @param {string} label
     * @returns validate
     */
    ruleAfterDate: (v, targetValue, label = null) => {
      return (
        !v ||
        !targetValue ||
        v > targetValue ||
        `The ${label ?? 'field'} must after ${targetValue}`
      );
    },
    /**
     * Rule validate is
     * @param {any} v the given value to validate
     * @param {any} targetValue the target value to check againt
     * @param {string} label
     * @returns validate
     */
    ruleIs: (v, targetValue, label = null) => {
      return (
        !v ||
        !targetValue ||
        v === targetValue ||
        `The ${label ?? 'field'} must be ${targetValue}`
      );
    },
  };
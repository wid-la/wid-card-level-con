'use strict';

(function () {

  Polymer({

    is: 'wid-card-level-con',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * level
       * @type {Boolean}
       */
      level: {
        type: Number,
        value: 0,
        observer: '_conLevelChanged'
      },

      /**
       * name
       * @type {String}
       */
      name: {
        type: String,
        value: 'Level Con'
      },

      /**
       * title
       * @type {String}
       */
      title: {
        type: String,
        value: 'Low'
      },

      /**
       * reason
       * @type {String}
       */
      reason: {
        type: String,
        value: 'No Reason'
      }

    },

    _conLevelChanged: function _conLevelChanged(newVal) {
      this.$.descHeaderContainer.setAttribute('class', 'flex layout horizontal center-center style-scope wid-card-level-con header-level-' + newVal);
      this.$.descStatusContainer.setAttribute('class', 'row-icon flex-3 layout vertical center-center style-scope wid-card-level-con status-level-' + newVal);
    }

  });
})();
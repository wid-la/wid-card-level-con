'use strict';

(function () {

  Polymer({

    is: 'wid-card-level-con',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior, Polymer.WidCardThemeBehavior],

    properties: {
      /**
       * level
       * @type {Boolean}
       */
      level: {
        type: Number,
        value: 0,
        observer: '_onLevelChanged'
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

    _onLevelChanged: function _onLevelChanged(newVal) {
      this.$.descHeaderContainer.setAttribute('class', 'flex-2 layout horizontal center-center style-scope wid-card-level-con header-level-' + newVal);
      this.$.descStatusContainer.setAttribute('class', 'row-icon flex-3 layout vertical center-center style-scope wid-card-level-con status-level-' + newVal);
      this.$.cloudIcon.src = 'bower_components/wid-card-level-con/' + this._getIconLevel() + '.svg';
    },

    _getIconLevel: function _getIconLevel() {
      var levelIcon = '';
      switch (this.level) {
        case 0:
          levelIcon = 'sunny';
          break;
        case 1:
          levelIcon = 'cloudy';
          break;
        case 2:
          levelIcon = 'rainy';
          break;
        case 3:
          levelIcon = 'stormy';
          break;
        case 4:
          levelIcon = 'thunderous';
          break;
      }
      return levelIcon;
    }

  });
})();
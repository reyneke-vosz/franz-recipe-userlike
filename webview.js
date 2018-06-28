const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
      //const count = document.querySelectorAll('#chat-tabs .badge').length;

      const badges = document.querySelectorAll('#chat-tabs .badge');
      let count = 0;

      [].forEach.call(badges, function(badge) {
          count += parseInt(badge.innerHTML);
      });

      // set Franz badge
      Franz.setBadge(count);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};

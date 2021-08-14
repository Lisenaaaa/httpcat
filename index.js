const { Plugin } = require('powercord/entities');


module.exports = class scamLinkBan extends Plugin {
  async startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'steamscamban',
      description: 'bans a user for scam link',
      usage: '{c} [user id or ping]',
      executor: (args) => ({
        send: true,
        result: `fire ban ${args} sending a scam link --days 1`
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('steamscamban');
  }
};

const { Plugin } = require('powercord/entities');


module.exports = class httpcat extends Plugin {
  async startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'http',
      description: 'httpcat',
      usage: '{c} [number]',
      executor: (args) => ({
        send: true,
        result: `https://http.cat/${args[0]??'404'}`
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('http');
  }
};

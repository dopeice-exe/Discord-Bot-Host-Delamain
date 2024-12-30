const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Check the current vehicle status.'),
  async execute(interaction) {
    const statusEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setTitle("Vehicle Status Update")
      .setDescription(
        "Ah, greetings. Currently, we have a limited number of vehicles operating in this area due to ongoing maintenance and operational constraints. Only 20 units remain active, as some require essential maintenance to ensure optimal performance. Please understand that our capacity is reduced temporarily, but we are actively working to restore full operational status. Thank you for your patience and continued support."
      );

    await interaction.reply({ embeds: [statusEmbed] });
  },
};

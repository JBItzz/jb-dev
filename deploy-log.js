const url = process.env.DISCORD_WEBHOOK_URL;
if (!url) {
  console.log("Missing webhook URL variable.");
  process.exit(0);
}

const data = {
  embeds: [{
    title: "🚀 System Update Deployed",
    description: "The city portal infrastructure has been successfully updated and is live.",
    color: 12951585, 
    fields: [
      { name: "Lead Developer", value: "`itzz JB`", inline: true },
      { name: "Environment", value: "`Production`", inline: true },
    ],
    footer: { text: "ITZZ Systems • Automated Infrastructure Logs" },
    timestamp: new Date().toISOString()
  }]
};

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(() => console.log("Log sent to Discord successfully."))
.catch((err) => console.error("Error sending log:", err));

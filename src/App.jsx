import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Stops the tracker from spamming your Discord while you are testing locally
    if (window.location.hostname === 'localhost') return;

    const discordWebhookUrl = "https://discord.com/api/webhooks/1505176809291907152/IrlPCjdDB25P62nh2VSuekTESFjIXmGB3swH5O3xojDlBw7iwc4l_y8RcBz9n3iSWeE1";

    const payload = {
      embeds: [{
        title: "👀 New Website View",
        description: "Someone just opened the Mayor's Office Website!",
        color: 12951585, 
        fields: [
          { name: "Platform", value: "`Live Portal`", inline: true },
          { name: "Link", value: "[Open Site](https://lacomm-mayorsoffice.vercel.app/)", inline: true }
        ],
        footer: { text: "ITZZ Systems • Traffic Monitor" },
        timestamp: new Date().toISOString()
      }]
    };

    fetch(discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(err => console.error("Analytics error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center font-sans">
      {/* Container Card */}
      <div className="max-w-2xl text-center px-6 py-12 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#C5A021] mb-4">
          Mayor's Office
        </h1>
        <p className="text-zinc-400 text-lg mb-6 max-w-md mx-auto">
          Welcome to the official municipal portal for the Board of Commissioners and Executive Office.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/80 text-sm text-zinc-300 border border-zinc-700">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          Systems Operational
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-xs text-zinc-600 tracking-wider uppercase">
        Portal Developed by itzz JB &bull; ITZZ Systems
      </footer>
    </div>
  );
}

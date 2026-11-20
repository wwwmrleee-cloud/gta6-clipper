# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/wwwmrleee-cloud/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/wwwmrleee-cloud/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500, top 20 by YouTube views). The clip is one continuous 29-second slice of Rockstar's GTA 6 Trailer 2 (1:02–1:31), per-shot reframed to 1080×1920 as a YouTube Short: Lucia walks out of Leonida Penitentiary, Jason waiting by the car, then the trailer's own run of scenes — the "ROCKSTAR GAMES PRESENTS" card, a bedroom scene, a red-lit armed robbery, a beach bar, the docks and a pier sunset, a night boat yard, a roadside cleanup, and a bar. Then it turns to the viewer and pitches make.fun on screen: "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01". The video is public on YouTube on the channel 李云龙 GTA (@李云龙GTA), and its description carries the bounty's line and the entrant's play code.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The video

- Source: Grand Theft Auto VI Trailer 2 (YouTube VQRLujxTm3c), official Rockstar footage
- Moment: one continuous slice of Trailer 2, 62–91s (1:02–1:31), nothing dropped — not a montage assembled from different parts of the trailer. Frame-checked: 62.0–66.0s Lucia walks out of Leonida Penitentiary (gate, then close-up, she looks up at the camera within the first half-second, which is the hook); 66.0–69.2s reunion with Jason by the car; 69.2–71.5s "ROCKSTAR GAMES PRESENTS" title card; 71.5–74.5s bedroom scene under the title card; 74.5–77.5s red-lit armed robbery, masked Lucia with a rifle and a hostage; 77.5–79.5s blue close-up struggle; 79.5–82.0s Lucia and Jason with beers at a beach bar; 82.0–83.0s the couple on the docks; 83.0–85.5s pier sunset; 85.5–87.0s night boat yard; 87.0–88.0s roadside cleanup crew; 88.0–90.0s Lucia and Jason at home; 90.0–91.0s regulars at the bar. Each shot is reframed on its own, because the subjects move across the frame.
- Cut: `ffmpeg`, trim + per-shot reframe (486×864 from the 1920×864 cinematic frame — crop x=480 gate, x=557 Lucia close-up, x=1050 reunion and bedroom, x=717 title card, heist struggle, pier sunset, cleanup and bar, x=550 masked Lucia, beers, night yard and interior, x=960 docks) + scale to 1080×1920, original trailer audio for the 29-second GTA part, then a 3-second black end card with the make.fun pitch in white and yellow text. Total 32.0 seconds, a Short.
- The clip's pitch is in the clip itself, as the rules require; no views were bought or botted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates `VIDEO.json` — a JSON object under the 16384-byte gate cap whose `url` is a YouTube video address — and copies it to the output directory. That is all the program has to do: the house reads the video's views itself through the YouTube Data API.

`VIDEO.json` holds the video's address:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=x0yy8q40&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>

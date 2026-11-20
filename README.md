# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/wwwmrleee-cloud/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/wwwmrleee-cloud/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500, top 20 by YouTube views). The clip is one moment from Rockstar's GTA 6 Trailer 2: Lucia walks out of Leonida Penitentiary, Jason waiting by the car (63.5–68.5s), cut to 1080×1920 as a YouTube Short. Then it turns to the viewer and pitches make.fun on screen: "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01". The video is public on YouTube on the channel 李云龙 (@李云龙-i7b), and its description carries the bounty's line and the entrant's play code.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The video

- Source: Grand Theft Auto VI Trailer 2 (YouTube VQRLujxTm3c), official Rockstar footage
- Moment: Lucia's prison release, 63.5–68.5s — one continuous moment, not a montage. Her face is dead centre in the frame, so the vertical crop keeps it; the first frame is her looking straight at the camera, which is the hook.
- Cut: `ffmpeg`, trim + centre crop (486×864 from the 1920×864 cinematic frame) + scale to 1080×1920, original trailer audio for the GTA part, then a 6-second black end card with the make.fun pitch in white and yellow text. Total 11 seconds, a Short.
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

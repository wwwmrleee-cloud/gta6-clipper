// gta6-clipper-01: the video is the entry, and this program hands its address
// to the grader. It copies VIDEO.json from the repository root to the output
// directory, after checking the file is a small JSON object whose "url" names
// a real YouTube video. That is all it has to do: the house reads the video's
// views itself through the YouTube Data API, so nothing this program writes
// about the video is scored.
//
// The clip: Rockstar's GTA 6 Trailer 2 (YouTube VQRLujxTm3c), one moment —
// Lucia walking out of Leonida Penitentiary at 63.5-68.5s, Jason waiting by
// the car — cut vertical 1080x1920, then a 6-second end card pitching
// make.fun: "Make clips like this with AI and earn money on make.fun".
// The video is public on YouTube as a Short on the channel 李云龙.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository. The two grader runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// The grader sets these to /bot and /output; locally they default to the
// same two directories the command above uses.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate refuses a VIDEO.json over 16384 bytes, so refuse anything over
// that size here instead of copying a file the gate cannot read. A file of
// exactly 16384 bytes still passes, so the check is strictly greater than.
const VIDEO_JSON_MAX_BYTES = 16384;

// A video address as YouTube's Share button gives it: a Short, a watch page
// or a short link, with an 11-character video id of letters, digits, _ and -.
const YOUTUBE_URL = /^https:\/\/(?:www\.|m\.)?youtube\.com\/(?:shorts\/|watch\?v=)([A-Za-z0-9_-]{11})(?:[?&#].*)?$|^https:\/\/youtu\.be\/([A-Za-z0-9_-]{11})(?:[?&#].*)?$/;

function fail(message) {
  console.error(`gta6-clipper-01: ${message}`);
  process.exit(1);
}

const videoPath = join(BOT_DIR, 'VIDEO.json');

let videoBytes;
try {
  videoBytes = statSync(videoPath).size;
} catch {
  fail(`VIDEO.json not found in ${BOT_DIR}`);
}
if (videoBytes > VIDEO_JSON_MAX_BYTES) {
  fail(`VIDEO.json is ${videoBytes} bytes, over the ${VIDEO_JSON_MAX_BYTES}-byte gate cap`);
}
if (videoBytes === 0) {
  fail('VIDEO.json is empty');
}

let parsed;
try {
  parsed = JSON.parse(readFileSync(videoPath, 'utf8'));
} catch (err) {
  fail(`VIDEO.json is not valid JSON: ${err.message}`);
}
if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
  fail('VIDEO.json must be a JSON object, {"url": "https://www.youtube.com/shorts/<id>"}');
}
if (typeof parsed.url !== 'string' || !YOUTUBE_URL.test(parsed.url)) {
  fail('VIDEO.json "url" must be a YouTube video address (youtube.com/shorts/<id>, youtube.com/watch?v=<id> or youtu.be/<id>)');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  fail(`VIDEO.json could not be copied to ${OUTPUT_DIR}: ${err.message}`);
}

// The grader reads /output/VIDEO.json, so check the copy landed byte for
// byte: a partial or altered copy would fail the gate instead of this entry.
const copied = readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8');
if (copied !== readFileSync(videoPath, 'utf8')) {
  fail('the copied VIDEO.json does not match the repository copy');
}

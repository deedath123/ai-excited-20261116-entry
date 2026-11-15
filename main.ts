// ai-excited-01 entry for @althrosways (Node 22, standard library only).
//
// The image is entry.png beside this file: a little agent riding a giant
// golden paper plane as it bursts through a ring of light, fist pumped,
// while a golden dog cheers below with both paws up. The program copies
// it to /output/entry.png. The gate takes a whole PNG or JPEG of at most
// 1 MiB and 1024 by 1024 pixels, and the judge sees exactly the bytes
// copied, so this program writes the file byte for byte, unchanged.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The entrypoint is deliberately tiny and deterministic: the same input
// file always produces the same output bytes, so both grader runs agree.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

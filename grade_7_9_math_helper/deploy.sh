#!/usr/bin/env bash
set -euo pipefail

BUCKET="lhcos-d20a9-1257711250"
REMOTE_DIR="lhcos-data/www/html/math"
LOCAL_DIR="dist"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

SKIP_BUILD=0
DELETE=0
for arg in "$@"; do
  case "$arg" in
    --skip-build) SKIP_BUILD=1 ;;
    --delete)     DELETE=1 ;;
    -h|--help)
      cat <<EOF
Usage: $0 [--skip-build] [--delete]

  --skip-build   Skip 'npm run build' and sync existing dist/
  --delete       Remove remote files that no longer exist locally

Incrementally syncs ./$LOCAL_DIR -> cos://$BUCKET/$REMOTE_DIR/
Unchanged files (matching CRC64) are skipped.
EOF
      exit 0 ;;
    *) echo "Unknown arg: $arg" >&2; exit 1 ;;
  esac
done

if [ "$SKIP_BUILD" -eq 0 ]; then
  echo ">> Building..."
  npm run build
fi

if [ ! -d "$LOCAL_DIR" ]; then
  echo "Error: $LOCAL_DIR/ not found. Run without --skip-build first." >&2
  exit 1
fi

EXTRA_FLAGS=()
[ "$DELETE" -eq 1 ] && EXTRA_FLAGS+=(--delete --force)

echo ">> Syncing $LOCAL_DIR/ -> cos://$BUCKET/$REMOTE_DIR/ (incremental)"
coscli sync -r "$LOCAL_DIR/" "cos://$BUCKET/$REMOTE_DIR/" "${EXTRA_FLAGS[@]}"

echo ">> Done."

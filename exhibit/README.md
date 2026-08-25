# Exhibit files

- `card.html` — fixed 1080x1350 (4:5) light-only layout, the source for the shareable image.
- `hf3900-exhibit.png` — rendered card, 2160x2700 (2x). This is the file that travels.
- `index.html` — responsive, theme-aware web version with a short explainer. Published as a Claude artifact: https://claude.ai/code/artifact/c6b27485-ba3b-4c08-ad63-0dd848a265db

## Regenerating the PNG after editing card.html

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu `
  --screenshot="C:\sync\Folders\ai-projects\truth-in-legislature\github\exhibit\hf3900-exhibit.png" `
  --window-size=1080,1350 --force-device-scale-factor=2 --default-background-color=FFFFFFFF `
  --virtual-time-budget=10000 `
  "file:///C:/sync/Folders/ai-projects/truth-in-legislature/github/exhibit/card.html"
```

## Verification (done 2026-08-24 against revisor.mn.gov)

- Ballot question and title quoted verbatim from HF 3900, 3rd Engrossment.
- Deleted passage is a contiguous 76-word chunk of Minn. Const. art. XI, §8; cross-checked against the current constitution text on revisor.mn.gov. Word count: split on whitespace.
- The 4.5% rate appears only in the statutory sections (Minn. Stat. §11A.16, subd. 5, as amended), not in the amendment text.
- "0 mentions of any deletion in the ballot question" is phrased deliberately: the question shares incidental words with the deleted text ("permanent school fund"), so the claim is about mentions of a deletion, not word overlap. Keep this phrasing if editing.


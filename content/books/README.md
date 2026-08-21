# Product Book 2026 manuscripts (local archive)

Unpublished Word files downloaded from Google Drive for later reference. **Do not commit the `.docx` files** — they are gitignored.

- **Local path:** `/Users/gnaneshwerjadav/Workspace/drgnaneshwerjadav/content/books/`
- **Source folder:** https://drive.google.com/drive/folders/1Na9EI0PpQU45iLOvflf1dlxknmXtizeP
- **Downloaded:** 21 August 2026

| Title | Local file | Drive file ID | Size (approx.) |
| --- | --- | --- | --- |
| Build Before You Scale | `Build_Before_You_Scale.docx` | `1dvZMkWNsLxLPM3iERKPCojZCWLVNeSLc` | 1.4 MB |
| Decide Then Build | `Decide_Then_Build.docx` | `1Hrh9GeBEoeqey11R0vS2l_kcdlhpQa9-` | 962 KB |
| Deliver Value, and Lead in the Age of AI | `Deliver_Value_and_Lead_in_the_Age_of_AI.docx` | `1-gwrOWi9G-UoNGv8JWPq3PWlxIPZOI31` | 315 KB |
| Dharma in the Dark | `Dharma_in_the_Dark.docx` | `1IMN3IIj7KKcDR6YWXCP32G-UGF7D56Gg` | 1.8 MB |
| The Human Operating System | `The_Human_Operating_System.docx` | `10OFvXEuvBlfWzaQ__8201OZDlqzA3tDZ` | 1.1 MB |
| The Art of a Meaningful Life | `The_Art_of_a_Meaningful_Life.docx` | `1LLMbSfb2CV702vSgMpzWANckTafU2p-p` | 1.3 MB |
| The Biology of Opportunity | `The_Biology_of_Opportunity.docx` | `1kOKEihJM3HRV5hb-qBME7-zt4t8t-zMY` | 47 KB |
| The Complete Product | `The_Complete_Product.docx` | `1hC2SQGAbuf4C3sH-ZueYFhR808OX5PD9` | 1.1 MB |

Compact public notes for the chatbot live in `api/knowledge.ts`. Full manuscripts stay only on disk.

## Public summaries and buy links (site)

Short downloadable summaries live in `public/books/{slug}.md` (not the Word files).

To go live tomorrow:

1. **Buy links** — paste a live `https://…` into `buyLinks.amazon` or `buyLinks.gumroad` on that title in `src/data/commerce.ts` (or set `VITE_AMAZON_*` / `VITE_GUMROAD_*`). Leave empty to keep “link tomorrow”.
2. **PDF summary** — drop `public/books/{slug}.pdf` and set `downloadHref` to `/books/{slug}.pdf`. Do not commit `.docx` manuscripts.


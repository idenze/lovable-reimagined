<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Build public Ezeme pages as TanStack routes sharing a single branded layout and semantic CSS design system, so navigation and presentation stay consistent.
- Keep imported public source descriptions in a browser-safe content module; never publish the uploaded private family records or infrastructure files.
- Treat generated photographs as illustrative imagery rather than evidence of existing Ezeme facilities; display their illustrative status where they appear.
- Keep the public Family section separate from the enterprise overview, with a distinct page identity; private family records remain unpublished because the public site is not an authenticated family archive.

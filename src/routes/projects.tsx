import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, PageIntro } from '@/components/ezeme-layout';
import { pageHead } from '@/lib/ezeme';
import content from '@/lib/public-content.json';
export const Route = createFileRoute('/projects')({ head: () => pageHead('Projects', 'Furniture & Soft Furnishings, Ozi Ikoro and Ezeme Agriculture: the three projects in development.'), component: Projects });
function Projects() { return <SiteLayout><PageIntro label="THREE PROJECTS · IN DEVELOPMENT" title="The work ahead." text="What the group is building, in the order it is being built. Projects, not press releases." /><div className="source-content" dangerouslySetInnerHTML={{ __html: content.projects }} /></SiteLayout>; }
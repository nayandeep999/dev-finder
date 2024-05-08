import { Badge } from "./ui/badge";

export function SplitTags(tags: string) {
    return (
        tags.split(",").map((tag) => tag.trim())
    )
}
export function TagList({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Badge className="w-fit" key={tag} variant="default">
                    {tag}
                </Badge>
            ))}
        </div>
    );
}
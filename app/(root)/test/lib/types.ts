export type Project = {
  id: string
  name: string
  project_type?: string | null
  project_link?: string | null
  tools_used?: string | null
  github_link?: string | null
  other_link?: string | null
  imageUrl?: string | null
  details?: string | null
  likes: number
  views: number
  craetedAt: Date
}

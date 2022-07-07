export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

export type Categories = {
  contents: Array<Category>
  totalCount: number
  offset: number
  limit: number
}

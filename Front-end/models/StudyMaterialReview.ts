export default interface StudyMaterialReview {
  id: string
  author: string
  likes: number
  review: string
  hasLiked: boolean
  comments: StudyMaterialReviewComment[]
  date: number
}

export interface StudyMaterialReviewComment {
  id: string
  author: string
  comment: string
  date: number
}
